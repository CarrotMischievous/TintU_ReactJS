import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ScheduleSample from "./ScheduleSamplePage.jsx";
import ScheduleDate from "../../components/Schedule/ScheduleDate.jsx";
import ProductSelector from "../../components/ScheduleSelector/ProductSelector.jsx";
import AppWrapper from "../../components/AppWrapper/AppWrapper.jsx";
import { routeTraverseWithDelay } from "../../helper/RouteHelper.js";
import { PAGE_SCHEDULE_TIME } from "../../routes/userRoutes.js";
import { calcFutureDays, is2DateEquals } from "../../helper/DateCalculator.js";

/* 计划可选14天，加上当天凑整 */
const PLAN_DAYS = 15;

const ScheduleSamplePage = ScheduleSample(ScheduleDate);

class ScheduleDatePage extends React.Component {
  constructor(props) {
    super(props);

    /* 通知Wrapper header的配置 */
    if (this.props.setHeaderConfiguration) {
      this.props.setHeaderConfiguration({
        title: "预约日期",
        explain: "请先选择合适的服务日期进行预约",
      });
    }
  }

  componentWillMount() {
    /* 计算当日起15天的日期信息 */
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
  }

  /* 渲染完成再跳转，实际上看不出来.. */
  componentDidUpdate(prevProps) {
    //console.log(this.props.scheduledDate, prevProps.scheduledDate);
    if (!is2DateEquals(prevProps.scheduledDate, this.props.scheduledDate)) {
      /* item被点击了一次，如果是选中了一个合理值则直接跳转到时间页面 */
      if (this.props.scheduledDate) {
        routeTraverseWithDelay(this.props.history, PAGE_SCHEDULE_TIME);
      }
    }
  }

  render() {
    return (
      <ScheduleSamplePage
        selectors={[
          (<ProductSelector
            key="product"
            onSelectedItemNone={undefined}
            onChangeSelectedItem={undefined} />),
        ]}
        scheduleItems={this.scheduleItems}
        notice={`可预约14天内的档期，新一天的档期于每日10点开放`} />
    );
  }
}

ScheduleDatePage.propTypes = {
  scheduledDate: PropTypes.object,
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    scheduledDate: state.schedule.date,
  };
}

export default withRouter(AppWrapper(connect(mapStateToProps)(ScheduleDatePage)));