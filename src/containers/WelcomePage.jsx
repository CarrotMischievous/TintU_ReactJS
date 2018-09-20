import React from 'react';
import LogoHeader from '../components/AppHeader/LogoHeader.jsx';
import AppBar from '../components/AppBar/AppBar.jsx';
import Introduction from '../components/Introduction/Introduction.jsx';
import CopyRight from '../components/CopyRight/CopyRight.jsx';

class WelcomePage extends React.Component {
  render() {
    return (
      <div className="welcome-page">
        <LogoHeader />
        <Introduction />
        <CopyRight />
        <AppBar />
      </div>
    );
  }
}

export default WelcomePage;