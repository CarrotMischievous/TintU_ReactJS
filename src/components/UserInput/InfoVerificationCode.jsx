import React from "react";
import "./styles/infoverificationcode.css";
import InfoBlocker from "./InfoBlocker.jsx";
import { SimpleInfoTextInput } from "./InfoTextInput.jsx";
import PropTypes from "prop-types";

const VCODE_MAX_LENGTH = 4;

class InfoVerificationCode extends React.Component {
  // 验证码最多只能4位
  verificationCodeCheck(text) {
    if (text && VCODE_MAX_LENGTH < text.length) {
      return false;
    }

    return true;
  }

  handleVCodeChange(text) {
    if (this.props.onTextChanged) {
      this.props.onTextChanged(text);
    }
  }

  render() {
    return (
      <div className="identity-code">
        <SimpleInfoTextInput
          text={this.props.text}
          onTextChanged={this.handleVCodeChange.bind(this)}
          textCheck={this.verificationCodeCheck.bind(this)} />
      </div>
    );
  }
}

InfoVerificationCode.propTypes = {
  onTextChanged: PropTypes.func,
}

export default InfoBlocker(InfoVerificationCode);