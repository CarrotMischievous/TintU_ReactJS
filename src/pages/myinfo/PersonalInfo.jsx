import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import InfoTextInput from "../../components/UserInput/InfoTextInput.jsx";
import IdentityCode from "../../components/UserInput/IdentityCode.jsx";
import InfoCheckBox from "../../components/UserInput/InfoCheckBox.jsx";
import { helpGeneraStyle, helpGetWidthByPer } from "../../helper/cssStyles.js";
import * as Actions from "../../store/actions.js";
import "./styles/personalInfo.css";

class PersonalInfo extends React.Component {
  // 组件刷新需要获取Server端的用户信息
  componentWillMount() {
    
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
  handleIdentityCodeApply() {
    if (this.props.applyVeriCode) {
      this.props.applyVeriCode(true);
    }
  }

  // 验证码感知
  handleIdentityCodeChange(vCode) {
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
          onTextChanged={this.handleUserNameChange.bind(this)}
        />
        <InfoCheckBox
          definedStyle={helpGetWidthByPer("50%")}
          title="你的性别"
          leftCheck={{
            title: "女士"
          }}
          rightCheck={{
            title: "先生"
          }}
          onItemSelected={this.handleCheckBoxSelected.bind(this)}
        />
        <IdentityCode
          definedStyle={helpGetWidthByPer("70%")}
          title="你的手机号"
          onIdentityCodeApply={this.handleIdentityCodeApply.bind(this)}
          onTextChanged={this.handleUserTelephoneChange.bind(this)} />
        <InfoTextInput
          definedStyle={helpGeneraStyle(helpGetWidthByPer("30%"), noneStyle)}
          title="验证码"
          onTextChanged={this.handleIdentityCodeChange.bind(this)}
        />
        <InfoTextInput
          definedStyle={helpGetWidthByPer("100%")}
          title="你的邮箱"
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
