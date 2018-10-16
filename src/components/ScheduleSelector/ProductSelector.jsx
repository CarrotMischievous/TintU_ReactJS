import React from "react";
import { connect } from 'react-redux';
import * as Actions from "../../store/actions.js";
import BaseSelector from "./BaseSelector.jsx";

class ProductSelector extends React.Component {
  componentWillMount() {
    if (!this.props.product) {

    }
  }

  render() {
    // console.log(this.props);
    return (
      <BaseSelector
        title={`已选择项目`}
        content={this.props.product.productChName}
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