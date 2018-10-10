import React from "react";
import { connect } from 'react-redux';
import * as Actions from "../../store/actions.js";
import BaseSelector from "./BaseSelector.jsx";
import { transDateToDisplay } from "../../helper/DateCalculator.js";

class DateSelector extends React.Component {
  render() {
    return (
      <BaseSelector
        title={`已选择日期`}
        content={transDateToDisplay(this.props.scheduledDate)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    scheduledDate: state.schedule.date,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearScheduleDate: () => {
      dispatch(Actions.clearScheduleDate());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateSelector);