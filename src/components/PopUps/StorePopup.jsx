import React from "react";
import PropTypes from "prop-types";
import InfoPopupWrapper from "./InfoPopupWrapper.jsx";
import "./styles/storepopup.css";

const preCls = "store-popup";

class StorePopup extends React.Component {
  handlePopupQuit = () => {
    if (this.props.onHandlePopupQuit) {
      this.props.onHandlePopupQuit(); 
    }
  }

  render() {
    const isAnimation = this.props.isAnimation;
    const fadeStyle = !this.props.isHidden ? "fadein" : (isAnimation ? "fadeout" : "");
    const store = this.props.store || {};

    return (
      <div className={`${preCls} ${fadeStyle}`}>
        <i
          className={`${preCls}-close fa fa-close fa-fw fa-inverse fa-2x`}
          onTouchEnd={this.handlePopupQuit}
        />
        <div className={`${preCls}-photo`}>
          <i className="fa fa-map fa-fw fa-inverse fa-3x"/>
          <p>{store.name}</p>
        </div>
        <div className={`${preCls}-infos`}>
          <p><i className="fa fa-map-marker fa-fw fa-inverse"/>{store.address}</p>
          <p><i className="fa fa-phone-square fa-fw fa-inverse"/>{store.phone}</p>
          <p><i className="fa fa-envelope fa-fw fa-inverse"/>{store.email}</p>
          <p><i className="fa fa-subway fa-fw fa-inverse"/>{store.path}</p>
        </div>
      </div>
    );
  }
}

StorePopup.propTypes = {
  onHandlePopupQuit: PropTypes.func,
  isHidden: PropTypes.bool,
  isAnimation: PropTypes.bool,
  store: PropTypes.object,
}

export default InfoPopupWrapper(StorePopup);