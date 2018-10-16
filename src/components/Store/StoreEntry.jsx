import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import StorePopup from "../../components/PopUps/StorePopup.jsx";
import "./styles/storeentry.css";

const preCls = "store";

class StoreEntry extends React.Component {
  render() {
    return (
      <div className={`${preCls}`}>
        <StorePopup
          store={this.props.storeInfo}
        />
        <p className={`${preCls}-name`}>{this.props.storeInfo.name}</p>
        <p className={`${preCls}-detail`}><i className="fa fa-map-marker fa-inverse" />门店信息</p>
      </div>
    );
  }
}

StoreEntry.propTypes = {
  storeInfo: PropTypes.object,
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    storeInfo: state.storeInfo,
  };
}

export default connect(mapStateToProps)(StoreEntry);