import React from "react";
import { connect } from 'react-redux';
import { PAGE_SERVE } from "../../routes/userRoutes.js";
import * as Actions from "../../store/actions.js";
import BaseSelector from "./BaseSelector.jsx";

class ProductSelector extends React.Component {
  render() {
    const product = this.props.product || {};
    // console.log(this.props);
    return (
      <BaseSelector
        title={`项目`}
        content={product.productChName}
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

const mapDispatchToProps = (dispatch) => {
  return {
    clearProductName: () => {
      dispatch(Actions.clearProductName());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductSelector);