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
    const updateIndex = (this.props.index === this.props.selectedIndex)
      ? -1 : this.props.index;

    if (this.props.updateTimeSelected) {
      if(this.props.isAvailable) {
        this.props.updateTimeSelected(updateIndex);
      }
    }

    return;
  }

  canRenderSelected = () => {
    if (this.props.index === this.props.selectedIndex) {
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
  selectedIndex: PropTypes.number,
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    selectedIndex: state.schedule.timeSelectedIndex,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTimeSelected: (selectedIndex) => {
      dispatch(Actions.updateTimeSelected(selectedIndex));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleTime);