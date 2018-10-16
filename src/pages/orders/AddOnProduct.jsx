import React from "react";
import PropTypes from "prop-types";
import DivButton from "../../components/DivButton/DivButton.jsx";
import { srcProductImage } from "../../helper/ProductImage.js";
import "./styles/addonproduct.css";

const preCls = "addon-product";

class AddOnProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chosed: false,
    }
  }

  handleTouchEnd = () => {
    this.setState({
      chosed: !this.state.chosed,
    });

    if (this.props.onAddonChosed) {
      this.props.onAddonChosed(this.props.index, !this.state.chosed);
    }
  }

  render() {
    const chosed = this.state.chosed ? " chosed" : "";
    const addOnProduct = this.props.addOnProduct || {};

    return (
      <DivButton
        className={`${preCls}${chosed}`}
        onTouchEnd={this.handleTouchEnd}
      >
        <div className={`${preCls}-info`}>
          <div className={`${preCls}-imgframe`}>
            <img
              className={`${preCls}-img`}
              src={srcProductImage(addOnProduct.productName)}
              alt={`addon-${this.props.index}`}
            />
          </div>
          <div className={`${preCls}-baseinfo`}>
            <p className={`${preCls}-name`}>{addOnProduct.productChName}</p>
            <p className={`${preCls}-price`}>{`${addOnProduct.price - addOnProduct.discount}元`}</p>
          </div>
        </div>

        <div className={`${preCls}-discount`}>
          <p className={`${preCls}-normal-price`}>{`${addOnProduct.price}元`}</p>
          <p className={`${preCls}-reduction`}>{`省${addOnProduct.discount}元`}</p>
        </div>
        <div className={`${preCls}-choice`}>
          <i className={`${preCls}-flag fa fa-check-square-o fa-2x fa-inverse`} />
        </div>
      </DivButton>
    );
  }
}

AddOnProduct.propTypes = {
  addOnProduct: PropTypes.object,
  index: PropTypes.number,
  onAddonChosed: PropTypes.func,
}

export default AddOnProduct;