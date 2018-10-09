import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ScheduleSample from "./ScheduleSamplePage.jsx";
import ScheduleDate from "../../components/Schedule/ScheduleDate.jsx";
import AppWrapper from "../../components/AppWrapper/AppWrapper.jsx";
import * as Actions from "../../store/actions.js";
import { PAGE_SCHEDULE_TIME } from "../../routes/userRoutes.js";
import { calcFutureDays } from "../../helper/DateCalculator.js";

/* 计划可选14天，加上当天凑整 */
const PLAN_DAYS = 15;

const ScheduleSamplePage = ScheduleSample(ScheduleDate);

class ScheduleDatePage extends React.Component {
  constructor(props) {
    super(props);

    /* 通知Wrapper header的配置 */
    if (this.props.setHeaderConfiguration) {
      this.props.setHeaderConfiguration({
        title: "③预约日期",
        explain: "请先选择合适的服务预约日期",
      });
    }
  }

  componentWillMount() {
    /* 计算后14天的日期信息 */
    const futureDays = calcFutureDays(new Date(), PLAN_DAYS);

    /* 根据日期查询数据库，返回可预约日期偏移（当天不需要处理） */
    const freeDays = [2, 9, 11, 13]; /* 模拟数据库信息 */

    /* 刷新项目的可使用性 */
    this.scheduleItems = futureDays.map((day, index) => {
      const isAvailable = freeDays.includes(index);
      return {
        entry: day,
        isAvailable,
      }
    });

    /* 默认可能有一个选中的根据参数解析出来 */
    
  }

  /* 渲染完成再跳转，实际上看不出来.. */
  componentDidUpdate(prevProps) {
    //console.log(this.props.selectedIndex, prevProps.selectedIndex);
    if (prevProps.selectedIndex !== this.props.selectedIndex) {
      /* item被点击了一次，如果是选中了一个则直接跳转到时间页面 */
      if (-1 !== this.props.selectedIndex) {
        this.handleDateSelected();
      }
    }
  }

  handleDateSelected() {
    this.props.history.push(PAGE_SCHEDULE_TIME);
  }

  render() {
    return (
      <ScheduleSamplePage
        selectedItems={[
          {
            title: "已选择项目",
            content: "证件照",
          }
        ]}
        scheduleItems={this.scheduleItems}
        notice={`可预约14天内的档期，新一天的档期于每日10点开放`} />
    );
  }
}

ScheduleDatePage.propTypes = {
  selectedIndex: PropTypes.number,
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    selectedIndex: state.schedule.dateSelectedIndex,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateDateSelected: (selectedIndex) => {
      dispatch(Actions.updateDateSelected(selectedIndex));
    },
  }
}

export default withRouter(AppWrapper(connect(mapStateToProps, mapDispatchToProps)(ScheduleDatePage)));