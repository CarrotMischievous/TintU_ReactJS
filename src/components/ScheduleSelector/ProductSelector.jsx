import React from "react";
import { connect } from 'react-redux';
import { PAGE_SERVE } from "../../routes/userRoutes.js";
import BaseSelector from "./BaseSelector.jsx";

class ProductSelector extends React.Component {
  render() {
    const product = this.props.product || {};
    // console.log(this.props);
    return (
      <BaseSelector
        title={`项目`}
        content={product.ch_name}
        reselectRoute={PAGE_SERVE}
        reselectData={this.props.product}
      />
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    product: state.product,
  };
}

export default connect(mapStateToProps)(ProductSelector);