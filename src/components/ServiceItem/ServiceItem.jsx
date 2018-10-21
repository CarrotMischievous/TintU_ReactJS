import React from "react";
import PropTypes from "prop-types";
import DivButton from "../../components/DivButton/DivButton.jsx";
import "./styles/serviceitem.css";

const imgSrc = (productName) => {
  return require(`../../img/serviceitems/${productName}.png`);
}

class ServiceItem extends React.Component {
  handleChooseServiceItem() {
    if (this.props.onSelected) {
      this.props.onSelected(this.props.name);
    }
  }

  render() {
    return (
      <DivButton
        className="service-item"
        style={this.props.style}
        onTouchEnd={this.handleChooseServiceItem.bind(this)}>
        <div className="ser-item-imgframe">
          <img className="ser-item-img" src={imgSrc(this.props.name)} alt="service" />
        </div>
        <span className="ser-item-title">{this.props.title}</span>
      </DivButton>
    );
  }
}

ServiceItem.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
  onSelected: PropTypes.func,
};

export default ServiceItem;
