import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import UserFetcher from "../../server/UserFetcher.js";
import InfoTextInput from "../../components/UserInput/InfoTextInput.jsx";
import InfoTelephone from "../../components/UserInput/InfoTelephone.jsx";
import InfoCheckBox from "../../components/UserInput/InfoCheckBox.jsx";
import InfoVerificationCode from "../../components/UserInput/InfoVerificationCode.jsx";
import { helpGeneraStyle, helpGetWidthByPer } from "../../helper/cssStyles.js";
import * as Actions from "../../store/actions.js";
import "./styles/personalInfo.css";

class PersonalInfo extends React.Component {
  // 组件刷新需要获取Server端的用户信息
  componentWillMount() {
    UserFetcher.fetchByPhone("18512542541", this.handleServerData);
  }

  // 从Server获取数据通过redux刷新
  handleServerData = (serverUser) => {
    if (this.props.updateUser) {
      this.props.updateUser(serverUser[0]);
    }
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
    const noneStyle = this.props.userInfo.vCodeApplied ? {} : {
      display: "none",
    };
    const userInfo = this.props.userInfo;

    return (
      <div className="person-infos">
        <InfoTextInput
          definedStyle={helpGetWidthByPer("50%")}
          title="你的名字"
          contents={[
            userInfo.user.name
          ]}
          onTextChanged={this.handleUserNameChange.bind(this)}
        />
        <InfoCheckBox
          definedStyle={helpGetWidthByPer("50%")}
          title="你的性别"
          contents={[
            userInfo.user.sex
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
          contents={[
            userInfo.user.phone
          ]}
          onIdentityCodeApply={this.handleVCodeApply.bind(this)}
          onTextChanged={this.handleUserTelephoneChange.bind(this)} />
        <InfoVerificationCode
          definedStyle={helpGeneraStyle(helpGetWidthByPer("30%"), noneStyle)}
          title="验证码"
          contents={[
            userInfo.verificationCode
          ]}
          onTextChanged={this.handleVerificationCodeChange.bind(this)}
        />
        <InfoTextInput
          definedStyle={helpGetWidthByPer("100%")}
          title="你的邮箱"
          contents={[
            userInfo.user.email
          ]}
          onTextChanged={this.handleUserEmailChange.bind(this)}
        />
        <p className="person-infos-notice">修改信息需要手机验证码<br/>获取并输入正确验证码后点击保存</p>
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
    userInfo: state.userInfo,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => {
      dispatch(Actions.updateUser(user));
    },
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
