import React from "react";
import logo from "../../img/logo.png";
import { Icon } from 'antd-mobile';
import "./styles/appheader.css";
import * as routes from "../../routes/userRoutes.js";

const UrlHeader = {
  [routes.PAGE_INDEX]: {
    title: "欢迎来到TintU影像实验室",
    explain: "",
  },
  [routes.PAGE_SERVE]: {
    title: "拍摄服务",
    explain: "根据情况选择自己需要的业务",
  },
  [routes.PAGE_SELF]: {
    title: "个人信息",
    explain: "我们保证，绝不会向第三方透露您的资料信息",
  },
  [routes.PAGE_NOTIF]: {
    title: "",
    explain: "",
  },
  [routes.PAGE_ORDER]: {
    title: "",
    explain: "",
  },
};

// 顶端提示当前页面内容，包括Logo
export default function AppHeaderWrapper(WrappedComponent) {
  return class WrapAppHeader extends React.Component {
    render() {
      //console.log(this.props.match.url);
      const urlHeaderInfo = UrlHeader[this.props.match.url];
      const urlTitle = urlHeaderInfo.title;
      const urlExplain = urlHeaderInfo.explain;
      const classNameExp = urlExplain ? "app-header-title-exp" : "";

      return (
        <div className="app-content">
          <div className="app-header">
            <img className="app-header-img" src={logo} alt="logo" />
            <div className={`app-header-title ${classNameExp}`}>
              <Icon type="check-circle-o" size="xs" />
              <span className="app-header-content">{urlTitle}</span>
              <span className="app-header-explain">{urlExplain}</span>
            </div>
          </div>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }
}