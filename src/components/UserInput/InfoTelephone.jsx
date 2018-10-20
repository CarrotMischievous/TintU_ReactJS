import React from "react";
import "./styles/infotelephone.css";
import InfoBlocker from "./InfoBlocker.jsx";
import { SimpleInfoTextInput } from "./InfoTextInput.jsx";
import { Button } from "antd-mobile";
import PropTypes from "prop-types";

const PHONE_LENGTH = 11;

class InfoTelephone extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPhoneInvalid: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    //console.log(nextProps.text);
    const nextText = nextProps.text[0] || "";
    this.validateVerificationCode(nextText.length);
  }

  handleGetIdentityCode() {
    if (this.props.onIdentityCodeApply) {
      this.props.onIdentityCodeApply();
    }
  }

  /* 联动验证码按钮可激活 */
  validateVerificationCode = (length) => {
    // 手机号码满足11位才允许发送验证码
    if (PHONE_LENGTH === length) {
      this.setState({
        isPhoneInvalid: true,
      });
    } else {
      this.setState({
        isPhoneInvalid: false,
      });
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
    if (this.props.onTextChanged) {
      this.props.onTextChanged(text);
    }

    this.validateVerificationCode(text.length);
  }

  render() {
    return (
      <div className="telephone">
        <div className="telephone-input">
          <SimpleInfoTextInput
            text={this.props.text}
            onTextChanged={this.handleTelephoneChange.bind(this)}
            textCheck={this.telephoneTextCheck.bind(this)} />
        </div>
        <Button
          className="telephone-apply-button"
          onClick={this.handleGetIdentityCode.bind(this)}
          disabled={!this.state.isPhoneInvalid}
        >
          获取验证码
        </Button>
      </div>
    );
  }
}

InfoTelephone.propTypes = {
  onTextChanged: PropTypes.func,
  onIdentityCodeApply: PropTypes.func,
}

export default InfoBlocker(InfoTelephone);