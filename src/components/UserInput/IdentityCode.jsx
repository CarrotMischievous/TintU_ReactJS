import React from "react";
import "./styles/identitycode.css";
import InfoBlocker from "./InfoBlocker.jsx";
import { SimpleInfoTextInput } from "./InfoTextInput.jsx";
import { Button } from "antd-mobile";
import PropTypes from "prop-types";

const PHONE_LENGTH = 11;

class IdentityCode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userTelephone: "",
      isPhoneInvalid: false,
    }
  }

  handleGetIdentityCode() {
    if (this.props.onIdentityCodeApply) {
      this.props.onIdentityCodeApply();
    }
  }

  // 手机号码不允许超过11位
  telephoneTextCheck(text) {
    if (text && PHONE_LENGTH < text.length) {
      return false;
    }

    return true;
  }

  handleTelephoneChange(text) {
    this.setState({
      userTelephone: text,
    });

    if (this.props.onTextChanged) {
      this.props.onTextChanged(text);
    }

    // 手机号码满足11位才允许发送验证码
    if (PHONE_LENGTH === text.length) {
      this.setState({
        isPhoneInvalid: true,
      });
    } else {
      this.setState({
        isPhoneInvalid: false,
      });
    }
  }

  render() {
    return (
      <div className="identity-code">
        <div className="identity-phone">
          <SimpleInfoTextInput
            onTextChanged={this.handleTelephoneChange.bind(this)}
            textCheck={this.telephoneTextCheck.bind(this)} />
        </div>
        <Button
          className="identity-button"
          onClick={this.handleGetIdentityCode.bind(this)}
          disabled={!this.state.isPhoneInvalid}
        >
          获取验证码
        </Button>
      </div>
    );
  }
}

IdentityCode.propTypes = {
  onTextChanged: PropTypes.func,
  onIdentityCodeApply: PropTypes.func,
}

export default InfoBlocker(IdentityCode);