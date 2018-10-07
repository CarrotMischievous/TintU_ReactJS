import React from "react";
import PropTypes from "prop-types";
import ServiceItem from "./ServiceItem.jsx";
import "./styles/serviceframe.css";

class ServiceFrame extends React.Component {
  parseItemStyle(frameStyle, itemStyle) {
    let style = frameStyle;

    if (itemStyle) {
      style = {
        ...frameStyle,
        ...itemStyle,
      }
    }

    return style;
  }

  render() {
    const frameStyle = this.props.frameStyle || {};

    return (
      <div className="service-item-frame">
        <span className="ser-frame-title">{this.props.title}</span>
        <div className="ser-frame-items">
          {this.props.itemList.map((item, index) => {
            return (
              <ServiceItem
                key={index}
                style={this.parseItemStyle(frameStyle, item.style)}
                productName={item.productName}
                title={item.title}
                onSelected={this.props.onServiceItemSelected}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

ServiceFrame.propTypes = {
  image: PropTypes.string,
  itemName: PropTypes.string,
};

export default ServiceFrame;
