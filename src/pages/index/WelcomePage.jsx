import React from "react";
import { withRouter } from 'react-router-dom';
import { PAGE_SERVE } from "../../routes/userRoutes.js";
import Introduction from "./Introduction.jsx";
import CopyRight from "./CopyRight.jsx";
import AppWrapper from "../../components/AppWrapper/AppWrapper.jsx";
import "./styles/welcomepage.css";

class WelcomePage extends React.Component {
  componentWillMount() {
    // 通知Wrapper header的配置
    if (this.props.setHeaderConfiguration) {
      this.props.setHeaderConfiguration({
        title: "欢迎来到TintU影像实验室",
      });
    }
  }

  handleStartAppoinment() {
    this.props.history.push(PAGE_SERVE);
  }

  render() {
    return (
      <div className="flex-container welcome-page page-frame">
        <Introduction className="intro-flex" />
        <CopyRight onStartAppointment={this.handleStartAppoinment.bind(this)}/>
      </div>
    );
  }
}

export default withRouter(AppWrapper(WelcomePage));
