import React from "react";
import PropTypes from "prop-types";
import "./styles/infoblocker.css";

const InfoBlocker = (InfoComponent) => {
  class InfoBlock extends React.Component {
    render() {
      return (
        <div className="info-block" style={this.props.definedStyle}>
          <span className="iblock-title">{`*${this.props.title || ""}`}</span>
          <InfoComponent 
            text={this.props.contents}
            { ...this.props } />
        </div>
      );
    }
  }

  InfoBlock.propTypes = {
    contents: PropTypes.array,
  }

  return InfoBlock;
}

export default InfoBlocker;