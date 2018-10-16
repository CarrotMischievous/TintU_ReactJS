import React from "react";
import PropTypes from "prop-types";
import InfoPopupWrapper from "./InfoPopupWrapper.jsx";
import { transDateToDisplay } from "../../helper/DateCalculator.js";
import AppFooter from "../../components/AppFooter/AppFooter.jsx";
import "./styles/schedulesurepopup.css";

const preCls = "schedule-popup";

class ScheduleSurePopup extends React.Component {
  handlePopupQuit = () => {
    if (this.props.onHandlePopupQuit) {
      this.props.onHandlePopupQuit(); 
    }
  }

  handleScheduleSure = () => {
    if (this.props.onHandleScheduleSure) {
      this.props.onHandleScheduleSure();
    }
  }

  render() {
    const isAnimation = this.props.isAnimation;
    const fadeStyle = !this.props.isHidden ? "fadein" : (isAnimation ? "fadeout" : "");
    const schedule = this.props.schedule || {};

    return (
      <div className={`${preCls} ${fadeStyle}`}>
        <div className={`${preCls}-photo`}>
          <i className="fa fa-calendar fa-fw fa-inverse fa-3x"/>
        </div>
        <div className={`${preCls}-infos`}>
          <p>你选择的档期是</p>
          <p>{schedule.product.productChName}</p>
          <p>{transDateToDisplay(schedule.date, schedule.time)}</p>
          <p>{schedule.storeInfo.name}</p>
          <p>是否确认</p>
        </div>
        <AppFooter
          footerConf={{
            items:[
              {
                title: "取消",
                onItemClicked: this.handlePopupQuit,
              },
              {
                title: "确认",
                onItemClicked: this.handleScheduleSure,
              },
            ]
          }
          }
        />
      </div>
    );
  }
}

ScheduleSurePopup.propTypes = {
  onHandlePopupQuit: PropTypes.func,
  onHandleScheduleSure: PropTypes.func,
  isHidden: PropTypes.bool,
  isAnimation: PropTypes.bool,
  schedule: PropTypes.object,
}

export default InfoPopupWrapper(ScheduleSurePopup);