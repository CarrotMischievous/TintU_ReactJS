import React from "react";
import PropTypes from "prop-types";
import "./styles/serviceitem.css";

const imgSrc = (productName) => {
  return require(`../../img/serviceitems/${productName}.png`);
}

class ServiceItem extends React.Component {
  handleChooseServiceItem() {
    if (!this.chooseMoved) {
      if (this.props.onSelected) {
        this.props.onSelected(this.props.productName);
      }
    }
    this.chooseMoved = false;
  }

  handleChooseServiceMove() {
    this.chooseMoved = true;
  }

  render() {
    return (
      <div
        className="service-item"
        style={this.props.style}
        onTouchEnd={this.handleChooseServiceItem.bind(this)}
        onTouchMove={this.handleChooseServiceMove.bind(this)}>
        <div className="ser-item-imgframe">
          <img className="ser-item-img" src={imgSrc(this.props.productName)} alt="service" />
        </div>
        <span className="ser-item-title">{this.props.title}</span>
      </div>
    );
  }
}

ServiceItem.propTypes = {
  productName: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
  onSelected: PropTypes.func,
};

export default ServiceItem;
