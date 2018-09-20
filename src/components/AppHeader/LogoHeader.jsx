import React from 'react';
import logo from '../../img/logo.png';

// 界面顶端带有Logo的横条
class LogoHeader extends React.Component {
  render() {
    return (
      <div className="app-header">
        <img className="app-logo" src={logo} alt="AppLogo" />
      </div>
    );
  }
}

export default LogoHeader;