import React from "react";
import logo from "../../img/logo.png";
import { Icon } from 'antd-mobile';
import "./styles/appheader.css";

// 顶端提示当前页面内容，包括Logo
class AppHeader extends React.Component {
  render() {
    const urlTitle = this.props.headerConf.title || "";
    const urlExplain = this.props.headerConf.explain || "";
    const classNameExp = urlExplain ? "app-header-title-exp" : "";

    return (
      <div className="app-header">
        <img className="app-header-img" src={logo} alt="logo" />
        <div className={`app-header-title ${classNameExp}`}>
          <Icon type="check-circle-o" size="xs" />
          <span className="app-header-content">{urlTitle}</span>
          <span className="app-header-explain">{urlExplain}</span>
        </div>
      </div>
    );
  }
}

export default AppHeader;