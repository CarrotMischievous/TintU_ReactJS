import React from "react";
import "./styles/infoblocker.css";

const InfoBlocker = (InfoComponent) => {
  return class InfoBlock extends React.Component {
    render() {
      const contentSize = this.props.size ? 
                      `info-block-${this.props.size}` : "";
      return (
        <div className={`info-block ${contentSize}`}>
          <span className="iblock-title">{`*${this.props.title || ""}`}</span>
          <InfoComponent {...this.props} />
        </div>
      );
    }
  }
}

export default InfoBlocker;