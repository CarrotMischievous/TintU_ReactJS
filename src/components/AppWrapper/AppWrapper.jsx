import React from "react";
import StoreEntry from "../../components/Store/StoreEntry.jsx";
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
        storeEntry: false,
      }
    }

    handleStoreEntry = () => {
      this.setState({
        storeEntry: true,
      });
    }

    handleAppHeaderConfiguration = (headerConf) => {
      this.setState({
        headerConf
      });
    }

    handleAppFooterConfiguration = (footerConf) => {
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
          {this.state.storeEntry ? <StoreEntry /> : ""}
          <WrappedComponent
            {...this.props}
            setHeaderConfiguration={this.handleAppHeaderConfiguration}
            setFooterConfiguration={this.handleAppFooterConfiguration}
            setStoreEntry={this.handleStoreEntry} />
          {hasFooter ? <AppFooter footerConf={this.state.footerConf} /> : ""}
        </div>
      );
    }
  }
}