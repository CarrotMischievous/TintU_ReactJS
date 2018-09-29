import React from "react";
import "./styles/infocheckbox.css";
import InfoBlocker from "./InfoBlocker.jsx";
import { Checkbox } from "antd-mobile";

const AgreeItem = Checkbox.AgreeItem;
const preCls = "icheckbox";

class InfoCheckBox extends React.Component {
  render() {
    return (
      <div className="info-checkbox">
        <AgreeItem
          className={`${preCls}-woman`}
          onChange={undefined}
        >
          女士
        </AgreeItem>
        <AgreeItem
          className={`${preCls}-man`}
          onChange={undefined}
        >
          先生
        </AgreeItem>
      </div>
    );
  }
}

export default InfoBlocker(InfoCheckBox);