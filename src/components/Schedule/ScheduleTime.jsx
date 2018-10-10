import React from "react";
import { connect } from 'react-redux';
import { Icon } from 'antd-mobile';
import PropTypes from "prop-types";
import * as Actions from "../../store/actions.js";
import { transMinsToTime } from "../../helper/DateCalculator.js";
import "./styles/scheduletime.css";

const preCls = "schedule-time";

class ScheduleTime extends React.Component {
  handleItemSelected = () => {
    if (this.props.item !== this.props.scheduledTime) {
      if (this.props.updateScheduleTime) {
        if(this.props.isAvailable) {
          this.props.updateScheduleTime(this.props.item);
        }
      }
    } else {
      if (this.props.clearScheduleTime) {
        if(this.props.isAvailable) {
          this.props.clearScheduleTime();
        }
      }
    }
  }

  canRenderSelected = () => {
    if (this.props.item === this.props.scheduledTime) {
      if (this.props.isAvailable) {
        return true;
      }
    }

    return false;
  }

  render() {
    const scheduleTime = this.props.item || {};
    const Selected = this.canRenderSelected() ? "selected" : "";
    const Available = this.props.isAvailable ? "" : "not-free";

    return (
      <div
        className={`${preCls} ${Selected} ${Available}`}
        onTouchEnd={this.handleItemSelected}
      >
        <p className={`${preCls}-hour`}>
          {transMinsToTime(scheduleTime)}
          <Icon className={`${preCls}-select`} type="check-circle" size="xxs" />
        </p>
      </div>
    );
  }
}

ScheduleTime.propTypes = {
  item: PropTypes.number,
  scheduledTime: PropTypes.number,
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    scheduledTime: state.schedule.time,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateScheduleTime: (time) => {
      dispatch(Actions.updateScheduleTime(time));
    },
    clearScheduleTime: () => {
      dispatch(Actions.clearScheduleTime());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleTime);