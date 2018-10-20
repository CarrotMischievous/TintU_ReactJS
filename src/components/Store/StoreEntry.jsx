import React from "react";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import DivButton from "../../components/DivButton/DivButton.jsx";
import { PAGE_INDEX } from "../../routes/userRoutes.js";
import { routeTraverse } from "../../helper/RouteHelper.js";
import StorePopup from "../../components/PopUps/StorePopup.jsx";
import "./styles/storeentry.css";

const preCls = "store";

class StoreEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopUpHidden: true,
    }
  }

  componentWillMount() {
    if (!this.props.storeInfo) {
      routeTraverse(this.props.history, PAGE_INDEX);
    }
  }

  handleStoreInfo = () => {
    this.setState({
      isPopUpHidden: false,
    });
  }

  handleStoreClosed = () => {
    this.setState({
      isPopUpHidden: true,
    });
  }

  render() {
    const storeInfo = this.props.storeInfo || {};

    return (
      <div className={`${preCls}`}>
        <p className={`${preCls}-name`}>{storeInfo.name}</p>
        <StorePopup
          store={storeInfo}
          isHidden={this.state.isPopUpHidden}
          onPopUpHidden={this.handleStoreClosed}
        />
        <DivButton 
          onTouchEnd={this.handleStoreInfo}>
          <p className={`${preCls}-detail`}
          ><i className="fa fa-map-marker fa-inverse" />门店信息</p>
        </DivButton>
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

export default withRouter(connect(mapStateToProps)(StoreEntry));