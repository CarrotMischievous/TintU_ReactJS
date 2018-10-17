import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { routeTraverseWithDelay } from "../../helper/RouteHelper.js";
import { PAGE_SERVE } from "../../routes/userRoutes.js";
import * as Actions from "../../store/actions.js";
import BaseSelector from "./BaseSelector.jsx";

class ProductSelector extends React.Component {
  componentWillMount() {
    if (!this.props.product) {
      routeTraverseWithDelay(this.props.history, PAGE_SERVE);
    }
  }

  render() {
    const product = this.props.product || {};
    // console.log(this.props);
    return (
      <BaseSelector
        title={`项目`}
        content={product.productChName}
        reselectRoute={PAGE_SERVE}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductSelector));