import React from "react";
import { withRouter } from 'react-router-dom';
import Introduction from "../components/Introduction/Introduction.jsx";
import CopyRight from "../components/CopyRight/CopyRight.jsx";
import "../style/welcomepage.css";

class WelcomePage extends React.Component {
  handleStartAppoinment() {
    this.props.history.push('/service');
  }

  render() {
    return (
      <div className="welcome-page">
        <Introduction className="intro-flex" />
        <CopyRight onStartAppointment={this.handleStartAppoinment.bind(this)}/>
      </div>
    );
  }
}

export default withRouter(WelcomePage);
