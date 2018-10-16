import React from "react";
import PropTypes from "prop-types";
import DivButton from "../../components/DivButton/DivButton.jsx";
import "./styles/storebrief.css";

const preCls = "store-brief";

class StoreBrief extends React.Component {
  handleTouchEnd = () => {
    if (this.props.onStoreSelected) {
      this.props.onStoreSelected(this.props.storeInfo);
    }
  }

  render() {
    return (
      <DivButton
        className={`${preCls}`}
        onTouchEnd={this.handleTouchEnd}
      >
        <i className={`${preCls}-arrow left fa fa-angle-left fa-inverse`} />
        <p className={`${preCls}-name`}>{this.props.storeInfo.name}</p>
        <p className={`${preCls}-address`}>{this.props.storeInfo.address}</p>
        <i className={`${preCls}-arrow right fa fa-angle-right fa-inverse`} />
      </DivButton>
    );
  }
}

StoreBrief.propTypes = {
  storeInfo: PropTypes.object,
  onStoreSelected: PropTypes.func,
}

export default StoreBrief;