import React from "react";
import AppHeader from "../../components/AppHeader/AppHeader.jsx";
import AppFooter from "../../components/AppFooter/AppFooter.jsx";
import "./styles/appwrapper.css";

// 顶端提示当前页面内容，包括Logo
export default function AppWrapper(WrappedComponent) {
  return class WrapApp extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        headerConf: {},
        footerConf: {},
      }
    }

    handleAppHeaderConfiguration(headerConf) {
      this.setState({
        headerConf
      });
    }

    handleAppFooterConfiguration(footerConf) {
      this.setState({
        footerConf
      });
    }

    render() {
      //console.log(this.props.match.url);
      const hasFooter = this.state.footerConf.items;

      return (
        <div className="app-content">
          <AppHeader headerConf={this.state.headerConf} />
          <WrappedComponent
            {...this.props}
            setHeaderConfiguration={this.handleAppHeaderConfiguration.bind(this)}
            setFooterConfiguration={this.handleAppFooterConfiguration.bind(this)} />
          {hasFooter ? <AppFooter footerConf={this.state.footerConf} /> : ""}
        </div>
      );
    }
  }
}