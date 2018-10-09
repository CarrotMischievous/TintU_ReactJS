import React from "react";
import StoreEntry from "../../components/Store/StoreEntry.jsx";
import ScheduleSelector from "../../components/ScheduleSelector/ScheduleSelector.jsx";
import ProductSelector from "../../components/ScheduleSelector/ProductSelector.jsx";
import "./styles/schedulepage.css";

const preCls = "schedule-page";

export default function(ScheduleComponent) {
  return class ScheduleSamplePage extends React.Component {
    render() {
      return (
        <div className={`${preCls} page-frame`}>
          {this.props.children}
          <StoreEntry storeId={this.props.storeId} />
          <ScheduleSelector>
            <ProductSelector />
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
                    index={index}
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