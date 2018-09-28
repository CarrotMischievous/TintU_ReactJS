import React from "react";
import { withRouter } from 'react-router-dom';
import Introduction from "./Introduction.jsx";
import CopyRight from "./CopyRight.jsx";
import "./styles/welcomepage.css";

class WelcomePage extends React.Component {
  handleStartAppoinment() {
    this.props.history.push('/service');
  }

  render() {
    return (
      <div className="left-container welcome-page">
        <Introduction className="intro-flex" />
        <CopyRight onStartAppointment={this.handleStartAppoinment.bind(this)}/>
      </div>
    );
  }
}

export default withRouter(WelcomePage);
