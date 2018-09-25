import React from 'react';
import LogoHeader from '../components/AppHeader/LogoHeader.jsx';
import Introduction from '../components/Introduction/Introduction.jsx';
import CopyRight from '../components/CopyRight/CopyRight.jsx';
import '../style/welcomepage.css';

class WelcomePage extends React.Component {
  render() {
    return (
      <div className='welcome-page'>
        <LogoHeader />
        <Introduction />
        <CopyRight />
      </div>
    );
  }
}

export default WelcomePage;