import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ScheduleSample from "./ScheduleSamplePage.jsx";
import ScheduleSurePopup from "../../components/PopUps/ScheduleSurePopup.jsx";
import ScheduleTime from "../../components/Schedule/ScheduleTime.jsx";
import AppWrapper from "../../components/AppWrapper/AppWrapper.jsx";
import ProductSelector from "../../components/ScheduleSelector/ProductSelector.jsx";
import DateSelector from "../../components/ScheduleSelector/DateSelector.jsx";
import * as Actions from "../../store/actions.js";
import { routeTraverseWithDelay } from "../../helper/RouteHelper.js";
import { PAGE_ORDER_ADDON } from "../../routes/userRoutes.js";
import { calcAllDayTimeFragment } from "../../helper/DateCalculator.js";

/* 距0点的分钟数来表示时间，这应该也是和数据库关联的 */
const WORK_START_TIME = 600;
const WORK_HOUR = 8;

const ScheduleSamplePage = ScheduleSample(ScheduleTime);

class ScheduleTimePage extends React.Component {
  constructor(props) {
    super(props);

    /* 通知Wrapper header的配置 */
    if (this.props.setHeaderConfiguration) {
      this.props.setHeaderConfiguration({
        title: "预约时间",
        explain: "请继续选择合适的服务时间段",
      });
    }

    this.state = {
      isPopUpHidden: true,
    }
  }

  componentDidUpdate(prevProps) {
    //console.log(this.props.scheduleTime, prevProps.scheduleTime);
    if (prevProps.scheduleTime !== this.props.scheduleTime) {
      /* item被点击了一次，弹出确认窗 */
      if (-1 !== this.props.scheduleTime) {
        this.setState({
          isPopUpHidden: false,
        });
      }
    }
  }

  componentWillMount() {
    /* 计算工作日一天的时间点 */
    const timeFragments = calcAllDayTimeFragment(WORK_START_TIME, WORK_HOUR, 30);
    //console.log(timeFragments);

    /* 根据当前日期查询数据库，返回可预约时间偏移 */
    const availableTime = [600, 660, 720, 900, 960, 990]; /* 模拟数据库信息，值为偏移0点分钟数 */

    /* 刷新项目的可使用性 */
    this.scheduleItems = timeFragments.map((time, index) => {
      const isAvailable = availableTime.includes(time);
      return {
        entry: time,
        isAvailable,
      }
    });
  }

  handlePopUpHidden = () => {
    this.setState({
      isPopUpHidden: true,
    });

    /* 取消已经选择的时间 */
    if (this.props.clearScheduleTime) {
      this.props.clearScheduleTime();
    }
  }

  handleScheduleSure = () => {
    routeTraverseWithDelay(this.props.history, PAGE_ORDER_ADDON);
  }

  render() {
    const date = this.props.scheduleDate || {};
    const time = this.props.scheduleTime || -1;
    const storeInfo = this.props.storeInfo || {};
    const product = this.props.product || {};

    return (
      <ScheduleSamplePage
        {...this.props}
        selectors={[
          (<ProductSelector key="product"/>),
          (<DateSelector key="date" />),
        ]}
        popup={
          <ScheduleSurePopup
            isHidden={this.state.isPopUpHidden}
            onPopUpHidden={this.handlePopUpHidden}
            onHandleScheduleSure={this.handleScheduleSure}
            schedule={{
              date,
              time,
              storeInfo,
              product,
            }}
          />
        }
        scheduleItems={this.scheduleItems}
        notice={`营业时间为10:00~18:00，其余时间请致电咨询`}
      />
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    scheduleTime: state.schedule.time,
    scheduleDate: state.schedule.date,
    storeInfo: state.storeInfo,
    product: state.product,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearScheduleTime: () => {
      dispatch(Actions.clearScheduleTime());
    },
  }
}

export default withRouter(AppWrapper(connect(mapStateToProps, mapDispatchToProps)(ScheduleTimePage)));