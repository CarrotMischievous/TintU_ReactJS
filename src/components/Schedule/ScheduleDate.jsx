import React from "react";
import { connect } from 'react-redux';
import { Icon } from 'antd-mobile';
import PropTypes from "prop-types";
import * as Actions from "../../store/actions.js";
import { transDayToWeek, is2DateEquals } from "../../helper/DateCalculator.js";
import "./styles/scheduledate.css";

const preCls = "schedule-date";

class ScheduleDate extends React.Component {
  handleItemSelected() {
    if (!is2DateEquals(this.props.item, this.props.scheduleDate)) {
      if (this.props.updateScheduleDate) {
        if(this.props.isAvailable) {
          this.props.updateScheduleDate(this.props.item);
        }
      }
    } else {
      if (this.props.clearScheduleDate) {
        if(this.props.isAvailable) {
          this.props.clearScheduleDate();
        }
      }
    }
  }

  canRenderSelected() {
    if (is2DateEquals(this.props.item, this.props.scheduleDate)) {
      if (this.props.isAvailable) {
        return true;
      }
    }
    return false;
  }

  render() {
    const someday = this.props.item || {};
    const Selected = this.canRenderSelected() ? "selected" : "";
    const Available = this.props.isAvailable ? "" : "not-free";

    return (
      <div
        className={`${preCls} ${Selected} ${Available}`}
        onTouchEnd={this.handleItemSelected.bind(this)}>
        <div className={`${preCls}-upper`}>
          <p className={`${preCls}-month`}>{`${someday.month}月`}</p>
          <p className={`${preCls}-date`}>{someday.date}</p>
        </div>
        <div className={`${preCls}-lower`}>
          <p className={`${preCls}-day`}>{transDayToWeek(someday.day)}</p>
        </div>
        <Icon className={`${preCls}-select`} type="check-circle" size="xxs" />
      </div>
    );
  }
}

ScheduleDate.propTypes = {
  item: PropTypes.object,
  scheduleDate: PropTypes.object,
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    scheduleDate: state.schedule.date,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateScheduleDate: (date) => {
      dispatch(Actions.updateScheduleDate(date));
    },
    clearScheduleDate: () => {
      dispatch(Actions.clearScheduleDate());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleDate);