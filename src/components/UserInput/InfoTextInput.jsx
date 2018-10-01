import React from "react";
import "./styles/infotextinput.css";
import InfoBlocker from "./InfoBlocker.jsx";
import PropTypes from "prop-types";

class InfoTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userText: "",
      textFocus: false
    };
  }

  handleInfoTextInput(event) {
    if (this.props.textCheck) {
      if (!this.props.textCheck(event.target.value)) {
        return;
      }
    }

    this.setState({
      userText: event.target.value
    });

    if (this.props.onTextChanged) {
      this.props.onTextChanged(event.target.value);
    }
  }

  handleTextInputFocus() {
    this.setState({
      textFocus: true,
    })
  }

  handleTextInputBlur() {
    this.setState({
      textFocus: false,
    })
  }

  handleClearText() {
    this.setState({
      userText: ""
    });
    
    if (this.props.onTextChanged) {
      this.props.onTextChanged("");
    }
  }

  render() {
    const hidden =
      "" !== this.state.userText && this.state.textFocus ? "" : "-hidden";

    return (
      <div className="itext-inputclear">
        <input
          className={`itext-input itext-input${hidden}`}
          onChange={this.handleInfoTextInput.bind(this)}
          onBlur={this.handleTextInputBlur.bind(this)}
          onFocus={this.handleTextInputFocus.bind(this)}
          value={this.state.userText}
        />
        <div
          className={`itext-clear${hidden}`}
          onTouchEnd={this.handleClearText.bind(this)} />
      </div>
    );
  }
}

InfoTextInput.propTypes = {
  onTextChanged: PropTypes.func,
  textCheck: PropTypes.func,
};

// 导入基础TextInput，不封装Wrapper
exports.SimpleInfoTextInput = InfoTextInput;

export default InfoBlocker(InfoTextInput);
