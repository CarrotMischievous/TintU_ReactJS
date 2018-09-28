import React from "react";
import PersonalInfo from "./PersonalInfo.jsx";
import AppHeaderWrapper from "../../components/AppHeaderWrapper/AppHeaderWrapper.jsx";

class MyInfoPage extends React.Component {
  render() {
    return (
      <div className="left-container myinfo-page">
        <PersonalInfo className='myinfo-flex' />
      </div>
    );
  }
}

export default AppHeaderWrapper(MyInfoPage);
