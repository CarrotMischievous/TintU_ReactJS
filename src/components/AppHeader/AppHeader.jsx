import React from "react";
import PropTypes from "prop-types";
import logo from "../../img/logo.png";
import "./styles/appheader.css";

// 顶端提示当前页面内容，包括Logo
class AppHeader extends React.Component {
  render() {
    const urlTitle = this.props.headerConf.title || "";
    const urlExplain = this.props.headerConf.explain || "";
    const noheader = !this.props.headerConf.title && !this.props.headerConf.explain ? " noheader" : "";
    const classNameExp = urlExplain ? " app-header-title-exp" : "";

    return (
      <div className="app-header">
        <img className="app-header-img" src={logo} alt="logo" />
        <div className={`app-header-title${noheader}${classNameExp}`}>
          <span className="app-header-content">{urlTitle}</span>
          <span className="app-header-explain">{urlExplain}</span>
        </div>
      </div>
    );
  }
}

AppHeader.propTypes = {
  headerConf: PropTypes.object,
}

export default AppHeader;