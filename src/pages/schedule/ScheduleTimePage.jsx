import React from "react";
import { withRouter } from 'react-router-dom';
import ScheduleSample from "./ScheduleSamplePage.jsx";
import ScheduleTime from "../../components/Schedule/ScheduleTime.jsx";
import AppWrapper from "../../components/AppWrapper/AppWrapper.jsx";
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
        title: "④预约时间",
        explain: "请继续选择合适的服务预约时间",
      });
    }
  }

  componentWillMount() {
    /* 计算工作日一天的时间点 */
    const timeFragments = calcAllDayTimeFragment(WORK_START_TIME, WORK_HOUR, 30);
    //console.log(timeFragments);

    /* 根据当前日期查询数据库，返回可预约时间偏移 */
    const availableTime = [600, 660, 720, 900, 960, 990]; /* 模拟数据库信息，值为偏移0点分钟数 */

    /* 刷新项目的可使用性 */
    this.scheduleItems = timeFragments.map((time) => {
      const isAvailable = availableTime.includes(time);
      return {
        entry: time,
        isAvailable,
      }
    });
  }

  render() {
    return (
      <div>
        <ScheduleSamplePage
          storeId={0}
          selectedItems={[
            {
              title: "已选择项目",
              content: "证件照",
            },
            {
              title: "已选择日期",
              content: "2018年10月9日（周二）",
            }
          ]}
          scheduleItems={this.scheduleItems}
          notice={`营业时间为10:00~18:00，其余时间请致电咨询`}
        />
      </div>
    );
  }
}

export default withRouter(AppWrapper(ScheduleTimePage));