import React from "react";
import StoreEntry from "../../components/Store/StoreEntry.jsx";
import ScheduleSelector from "../../components/ScheduleSelector/ScheduleSelector.jsx";
import "./styles/schedulepage.css";

const preCls = "schedule-page";

export default function(ScheduleComponent) {
  return class ScheduleSamplePage extends React.Component {
    render() {
      return (
        <div className={`${preCls} page-frame`}>
          {this.props.popup}
          <StoreEntry />
          <ScheduleSelector>
            {
              this.props.selectors.map((selector) => {
                return selector;
              })
            }
          </ScheduleSelector>
          <div className={`${preCls}-header`}>
            <p>可预约</p>
            <p>已约满</p>
          </div>
          <div className={`${preCls}-items`}>
            {
              this.props.scheduleItems.map((item, index) => {
                return (
                  <ScheduleComponent
                    key={index}
                    isAvailable={item.isAvailable}
                    item={item.entry} />
                );
              })
            }
          </div>
          <p>{this.props.notice}</p>
        </div>
      );
    }
  }
}