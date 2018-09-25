import React from 'react';
import logo from '../../img/logo.png';
import { NavBar, Icon } from 'antd-mobile';
import './appheader.css';

// 界面顶端带有Logo的横条
class LogoHeader extends React.Component {
  render() {
    return (
      <div>
        <NavBar
          className='logo-nav-bar'
          mode="dark"
          rightContent={[
            <Icon key="0" type="ellipsis" />,
          ]}
        >TintU影像实验室
        </NavBar>
        <div className='logo-head'>
          <img src={logo} alt='logo'></img>
        </div>
      </div>
    );
  }
}

export default LogoHeader;