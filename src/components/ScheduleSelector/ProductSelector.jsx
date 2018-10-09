import React from "react";
import { connect } from 'react-redux';
import * as Actions from "../../store/actions.js";
import BaseSelector from "./BaseSelector.jsx";

class ProductSelector extends React.Component {
  render() {
    return (
      <BaseSelector
        title={`已选择项目`}
        content={this.props.productChName}
      />
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    productChName: state.product.productChName,
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