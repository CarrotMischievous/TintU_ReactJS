import React from "react";
import "./styles/infoblocker.css";

const InfoBlocker = (InfoComponent) => {
  return class InfoBlock extends React.Component {
    render() {
      return (
        <div className="info-block" style={this.props.definedStyle}>
          <span className="iblock-title">{`*${this.props.title || ""}`}</span>
          <InfoComponent {...this.props} />
        </div>
      );
    }
  }
}

export default InfoBlocker;