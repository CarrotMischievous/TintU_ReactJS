import React from "react";
import { connect } from 'react-redux';
import * as Actions from "../../store/actions.js";
import BaseSelector from "./BaseSelector.jsx";
import { PAGE_SCHEDULE_DATE } from "../../routes/userRoutes.js";
import { transDateToDisplay } from "../../helper/DateCalculator.js";

class DateSelector extends React.Component {
  render() {
    return (
      <BaseSelector
        title={`日期`}
        content={transDateToDisplay(this.props.scheduledDate)}
        reselectRoute={PAGE_SCHEDULE_DATE}
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