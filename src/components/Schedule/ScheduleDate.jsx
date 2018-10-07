import React from "react";
import { connect } from 'react-redux';
import { Icon } from 'antd-mobile';
import PropTypes from "prop-types";
import * as Actions from "../../store/actions.js";
import { transDayToWeek } from "../../helper/DateCalculator.js";
import "./styles/scheduledate.css";

const preCls = "schedule-date";

class SchduleDate extends React.Component {
  handleItemSelected() {
    const updateIndex = (this.props.index === this.props.selectedIndex)
      ? -1 : this.props.index;

    if (this.props.updateDateSelected) {
      if(this.props.isAvailable) {
        this.props.updateDateSelected(updateIndex);
      }
    }
  }

  canRenderSelected() {
    if (this.props.index === this.props.selectedIndex) {
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

SchduleDate.propTypes = {
  item: PropTypes.object,
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

export default connect(mapStateToProps, mapDispatchToProps)(SchduleDate);