import React from "react";
import { connect } from 'react-redux';
import * as Actions from "../../store/actions.js";
import BaseSelector from "./BaseSelector.jsx";
import { transMinsToTime } from "../../helper/DateCalculator.js";

class TimeSelector extends React.Component {
  render() {
    return (
      <BaseSelector
        title={`已选择时间`}
        content={transMinsToTime(this.props.scheduledTime)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    scheduledTime: state.schedule.time,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearScheduleTime: () => {
      dispatch(Actions.clearScheduleTime());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeSelector);