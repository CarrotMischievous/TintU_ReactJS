import React from "react";
import "./styles/personalInfo.css";
import InfoTextInput from "../../components/UserInput/InfoTextInput.jsx";
import InfoCheckBox from "../../components/UserInput/InfoCheckBox.jsx";

class PersonalInfo extends React.Component {
  render() {
    return (
      <div className="person-infos">
        <InfoTextInput
          size="small"
          title="你的姓名"/>
        <InfoCheckBox 
          size="small"
          title="你的性别"/>
        <InfoTextInput
          size="large"
          title="你的邮箱"/>
      </div>
    );
  }
}

export default PersonalInfo;