import React from "react";
import "./styles/scheduleselector.css";

const preCls = "schedule-selected";

class ScheduleSelector extends React.Component {
  render() {
    return (
      <div className={`${preCls}`}>
        {
          this.props.children
        }
      </div>
    );
  }
}

export default ScheduleSelector;