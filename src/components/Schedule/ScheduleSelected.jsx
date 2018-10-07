import React from "react";
import PropTypes from "prop-types";
import "./styles/scheduleselected.css";

const preCls = "schedule-selected";

class ScheduleSelected extends React.Component {
  render() {
    return (
      <div className={`${preCls}`}>
        {
          (this.props.selectedItems || []).map((item, index) => {
            return (
              <div key={index} className={`${preCls}-frame`}>
                <p className={`${preCls}-title`}>{item.title}</p>
                <p className={`${preCls}-content`}>{item.content}</p>
              </div>
            );
          })
        }
      </div>
    );
  }
}

ScheduleSelected.propTypes = {
  selectedItems: PropTypes.array,
}

export default ScheduleSelected;