import React from "react";
import PropTypes from "prop-types";
import { Icon } from 'antd-mobile';
import "./styles/productbrief.css";

const mainPreCls = "ser-detail";
const preCls = "ser-de-brief";

class ProductBrief extends React.Component {
  render() {
    const backgroundColor = this.props.imgBackgroundColor || "";

    return (
      <div className={`${preCls}`}>
        <div
          className={`${preCls}-img-frame`}
          style={{
            backgroundColor: backgroundColor,
            borderColor: backgroundColor,
          }}>
          <div className={`${preCls}-img-wrapper`}>
            <img src={this.props.productImage} alt="product" />
          </div>
          <span>{this.props.productChName}</span>
        </div>
        <div className={`${mainPreCls}-icon-frame brief`}>
          <Icon type="check-circle" size="xxs" />
          <span>{`￥${this.props.productPrice}`}</span>
        </div>
        <div className={`${mainPreCls}-icon-frame brief`}>
          <Icon type="check-circle" size="xxs" />
          <span>{this.props.productStore}</span>
        </div>
      </div>
    );
  }
}

ProductBrief.propTypes = {
  productImage: PropTypes.string,
  productChName: PropTypes.string,
  productPrice: PropTypes.number,
  productStore: PropTypes.string,
}

export default ProductBrief;