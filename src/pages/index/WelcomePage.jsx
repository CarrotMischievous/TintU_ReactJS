import React from "react";
import { withRouter } from 'react-router-dom';
import { PAGE_SERVE } from "../../routes/userRoutes.js";
import Introduction from "./Introduction.jsx";
import CopyRight from "./CopyRight.jsx";
import AppHeaderWrapper from "../../components/AppHeaderWrapper/AppHeaderWrapper.jsx";
import "./styles/welcomepage.css";

class WelcomePage extends React.Component {
  handleStartAppoinment() {
    this.props.history.push(PAGE_SERVE);
  }

  render() {
    return (
      <div className="flex-container welcome-page">
        <Introduction className="intro-flex" />
        <CopyRight onStartAppointment={this.handleStartAppoinment.bind(this)}/>
      </div>
    );
  }
}

export default withRouter(AppHeaderWrapper(WelcomePage));
