import React from "react";
import PropTypes from "prop-types";
import { Icon } from 'antd-mobile';
import { srcProductImage } from "../../helper/ProductImage.js";
import "./styles/productbrief.css";

const mainPreCls = "ser-detail";
const preCls = "ser-de-brief";

class ProductBrief extends React.Component {
  render() {
    const backgroundColor = this.props.imgBackgroundColor || "";
    const product = this.props.product || {};

    return (
      <div className={`${preCls}`}>
        <div
          className={`${preCls}-img-frame`}
          style={{
            backgroundColor: backgroundColor,
            borderColor: backgroundColor,
          }}>
          <div className={`${preCls}-img-wrapper`}>
            <img src={srcProductImage(product.name)} alt="product" />
          </div>
          <span>{product.ch_name}</span>
        </div>
        <div className={`${mainPreCls}-icon-frame brief`}>
          <Icon type="check-circle" size="xxs" />
          <span>{`￥${product.price}`}</span>
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
  product: PropTypes.object,
  productStore: PropTypes.string,
}

export default ProductBrief;