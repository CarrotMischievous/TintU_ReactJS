import React from "react";
import PersonalInfo from "./PersonalInfo.jsx";
import AppHeaderWrapper from "../../components/AppHeaderWrapper/AppHeaderWrapper.jsx";
import AppFooter from "../../components/AppFooter/AppFooter.jsx";
import "./styles/myinfo.css";

class MyInfoPage extends React.Component {
  render() {
    return (
      <div className="flex-container myinfo-page">
        <PersonalInfo className='myinfo-flex' />
        <AppFooter />
      </div>
    );
  }
}

export default AppHeaderWrapper(MyInfoPage);
