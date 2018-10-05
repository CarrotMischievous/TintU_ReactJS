import React from "react";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';
import { routeServerProduct } from "../../routes/userRoutes.js";
import "./styles/serviceitem.css";

const imgSrc = (productName) => {
  return require(`../../img/serviceitems/${productName}.png`);
}

class ServiceItem extends React.Component {
  handleChooseServiceItem() {
    this.props.history.push(routeServerProduct(this.props.productName));
  }

  render() {
    return (
      <div
        className="service-item"
        style={this.props.style}
        onTouchEnd={this.handleChooseServiceItem.bind(this)}>
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
};

export default withRouter(ServiceItem);
