import React from "react";
import PropTypes from "prop-types";
import InfoBlocker from "./InfoBlocker.jsx";
import "./styles/infotextinput.css";

class InfoTextInput extends React.Component {
  constructor(props) {
    super(props);

    //console.log("textInput:", this.props);
    this.state = {
      textFocus: false,
      clearFocus: false, /* 置位后表示当前Blur由clear导致，不失焦 */
    };
  }

  handleInfoTextInput(event) {
    if (this.props.textCheck) {
      if (!this.props.textCheck(event.target.value)) {
        return;
      }
    }

    if (this.props.onTextChanged) {
      this.props.onTextChanged(event.target.value);
    }
  }

  handleTextInputFocus() {
    this.setState({
      textFocus: true
    });
  }

  handleTextInputBlur(event) {
    this.setState({
      textFocus: false
    });
  }

  handleClearText(event) {
    const textContent = (this.props.text && this.props.text[0]) || "";

    /* 值不为空清0才有效 */
    if (textContent) {
      if (this.props.onTextChanged) {
        this.props.onTextChanged("");
      }
    }
  }

  render() {
    const textContent = (this.props.text && this.props.text[0]) || "";
    const hidden = this.state.textFocus ? "" : "-hidden";

    return (
      <div className="itext-inputclear">
        <input
          ref={(input) => this.textInput = input}
          className={`itext-input itext-input${hidden}`}
          onChange={this.handleInfoTextInput.bind(this)}
          onFocus={this.handleTextInputFocus.bind(this)}
          onBlur={this.handleTextInputBlur.bind(this)}
          value={textContent}
          placeholder={this.props.placeholder || ""}
        />
        <div
          className={`itext-clear-wrapper${hidden}`}
          onTouchEnd={this.handleClearText.bind(this)}>
          <div className={`itext-clear${hidden}`} />
        </div>
      </div>
    );
  }
}

InfoTextInput.propTypes = {
  onTextChanged: PropTypes.func,
  textCheck: PropTypes.func
};

// 导入基础TextInput，不封装Wrapper
exports.SimpleInfoTextInput = InfoTextInput;

export default InfoBlocker(InfoTextInput);
