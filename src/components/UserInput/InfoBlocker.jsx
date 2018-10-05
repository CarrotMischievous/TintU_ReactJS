import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import "./styles/infoblocker.css";

const InfoBlocker = (InfoComponent) => {
  class InfoBlock extends React.Component {
    render() {
      const InfoContent = (this.props.content || []).map((content) => {
        return this.props.personInfo[content];
      });
      // redux数据不暴露给下层组件
      const props = {
        ...this.props,
        personInfo: {},
        content: {},
      };

      return (
        <div className="info-block" style={this.props.definedStyle}>
          <span className="iblock-title">{`*${this.props.title || ""}`}</span>
          <InfoComponent 
            text={InfoContent}
            { ...props } />
        </div>
      );
    }
  }

  InfoBlock.propTypes = {
    personInfo: PropTypes.object,
    content: PropTypes.array,
  }

  const mapStateToProps = (state) => {
    //console.log(state);
    return {
      personInfo: state.personInfo,
    };
  }

  return connect(mapStateToProps)(InfoBlock);
}

export default InfoBlocker;