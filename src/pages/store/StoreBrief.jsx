import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as Actions from "../../store/actions.js";
import "./styles/storebrief.css";

const preCls = "store-brief";

class StoreBrief extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      touched: false,
    }
  }

  handleTouchStart = () => {
    this.setState({
      touched: true,
    });
  }

  handleTouchEnd = () => {
    this.setState({
      touched: false,
    });

  }

  handleTouchCancel = () => {
    this.setState({
      touched: false,
    });
  }

  render() {
    return (
      <div
        className={`${preCls} ${this.state.touched ? "touch" : ""}`}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
        onTouchCancel={this.handleTouchCancel}
      >
        <i className={`${preCls}-arrow left fa fa-angle-left fa-inverse`} />
        <p className={`${preCls}-name`}>{this.props.store.name}</p>
        <p className={`${preCls}-address`}>{this.props.store.address}</p>
        <i className={`${preCls}-arrow right fa fa-angle-right fa-inverse`} />
      </div>
    );
  }
}

StoreBrief.propTypes = {
  store: PropTypes.object,
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateStore: (store) => {
      dispatch(Actions.updateStore(store));
    },
  }
}

export default connect(null, mapDispatchToProps)(StoreBrief);