import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import fetch from "node-fetch";
import InfoTextInput from "../../components/UserInput/InfoTextInput.jsx";
import InfoTelephone from "../../components/UserInput/InfoTelephone.jsx";
import InfoCheckBox from "../../components/UserInput/InfoCheckBox.jsx";
import InfoVerificationCode from "../../components/UserInput/InfoVerificationCode.jsx";
import { helpGeneraStyle, helpGetWidthByPer } from "../../helper/cssStyles.js";
import * as Actions from "../../store/actions.js";
import "./styles/personalInfo.css";

const getPersonInfoUrl = "http://192.168.0.176:9001/personInfo/user/18512542541";

class PersonalInfo extends React.Component {
  // 组件刷新需要获取Server端的用户信息
  componentWillMount() {
    let errorState = false;

    fetch(getPersonInfoUrl, {
      method: 'GET',
    }).then((response) => {
      if(200 !== response.status){
        errorState = true;
      }
      return response.json();
    }).then((data) => {
      if(errorState){
        console.log("存在一个问题：" + data.error);
        return;
      }
      //console.log("data", data);
      this.handleServerData.apply(this, data);
    }).catch((err) => {
      console.log(err);
    });
  }

  // 从Server获取数据通过redux刷新
  handleServerData(user) {
    this.handleUserNameChange(user.name);
    this.handleCheckBoxSelected(user.sex);
    this.handleUserEmailChange(user.email);
    this.handleUserTelephoneChange(user.phone);
  }

  // 姓名感知
  handleUserNameChange(name) {
    if (this.props.updateUserName) {
      this.props.updateUserName(name);
    }
  }

  // 邮箱感知
  handleUserEmailChange(email) {
    if (this.props.updateUserEmail) {
      this.props.updateUserEmail(email);
    }
  }

  // 性别选择
  handleCheckBoxSelected(sex) {
    if (this.props.updateUserSex) {
      this.props.updateUserSex(sex);
    }
  }

  // 手机号感知
  handleUserTelephoneChange(phone) {
    if (this.props.updateUserPhone) {
      this.props.updateUserPhone(phone);
    }
  }

  // 验证码申请
  handleVCodeApply() {
    if (this.props.applyVeriCode) {
      this.props.applyVeriCode(true);
    }
  }

  // 验证码感知
  handleVerificationCodeChange(vCode) {
    if (this.props.updateVCode) {
      this.props.updateVCode(vCode);
    }
  }

  render() {
    const noneStyle = this.props.vCodeApplied ? {} : {
      display: "none",
    };

    return (
      <div className="person-infos">
        <InfoTextInput
          definedStyle={helpGetWidthByPer("50%")}
          title="你的名字"
          content={[
            "userName"
          ]}
          onTextChanged={this.handleUserNameChange.bind(this)}
        />
        <InfoCheckBox
          definedStyle={helpGetWidthByPer("50%")}
          title="你的性别"
          content={[
            "userSex"
          ]}
          leftCheck={{
            title: "女士"
          }}
          rightCheck={{
            title: "先生"
          }}
          onItemSelected={this.handleCheckBoxSelected.bind(this)}
        />
        <InfoTelephone
          definedStyle={helpGetWidthByPer("70%")}
          title="你的手机号"
          content={[
            "userPhone"
          ]}
          onIdentityCodeApply={this.handleVCodeApply.bind(this)}
          onTextChanged={this.handleUserTelephoneChange.bind(this)} />
        <InfoVerificationCode
          definedStyle={helpGeneraStyle(helpGetWidthByPer("30%"), noneStyle)}
          title="验证码"
          content={[
            "verificationCode"
          ]}
          onTextChanged={this.handleVerificationCodeChange.bind(this)}
        />
        <InfoTextInput
          definedStyle={helpGetWidthByPer("100%")}
          title="你的邮箱"
          content={[
            "userEmail"
          ]}
          onTextChanged={this.handleUserEmailChange.bind(this)}
        />
      </div>
    );
  }
}

PersonalInfo.propTypes = {
  updateUserSex: PropTypes.func,
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    vCodeApplied: state.personInfo.vCodeApplied,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserSex: (sex) => {
      dispatch(Actions.updateUserSex(sex));
    },
    applyVeriCode: (codeApplied) => {
      dispatch(Actions.applyVeriCode(codeApplied));
    },
    updateUserName: (name) => {
      dispatch(Actions.updateUserName(name));
    },
    updateUserEmail: (email) => {
      dispatch(Actions.updateUserEmail(email));
    },
    updateUserPhone: (phone) => {
      dispatch(Actions.updateUserPhone(phone));
    },
    updateVCode: (vCode) => {
      dispatch(Actions.updateVCode(vCode));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);
