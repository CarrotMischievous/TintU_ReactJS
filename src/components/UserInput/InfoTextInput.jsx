import React from "react";
import "./styles/infotextinput.css";
import InfoBlocker from "./InfoBlocker.jsx";

class InfoTextInput extends React.Component {
  render() {
    return (
      <div className="info-text-input">
        <input className="itext-input"></input>
      </div>
    );
  }
}

export default InfoBlocker(InfoTextInput);