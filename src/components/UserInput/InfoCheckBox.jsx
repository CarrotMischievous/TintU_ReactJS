import React from "react";
import "./styles/infocheckbox.css";
import InfoBlocker from "./InfoBlocker.jsx";
import { Checkbox } from "antd-mobile";
import PropTypes from "prop-types";
import { CBOX_LEFT, CBOX_RIGHT, CBOX_NONE, SEX_MAN, SEX_WOMAN } from "../../helper/constants.js";

const AgreeItem = Checkbox.AgreeItem;
const preCls = "icheckbox-item";

class InfoCheckBox extends React.Component {
  translateSex2CheckItem(sex) {
    //console.log(sex);
    if (SEX_MAN === sex) {
      return CBOX_RIGHT;
    } else if (SEX_WOMAN === sex) {
      return CBOX_LEFT;
    }

    return CBOX_NONE;
  }

  handleLeftCheckBoxSelected() {
    if (this.props.onItemSelected) {
      this.props.onItemSelected(SEX_WOMAN);
    }
  }

  handleRightCheckBoxSelected() {
    if (this.props.onItemSelected) {
      this.props.onItemSelected(SEX_MAN);
    }
  }

  render() {
    const selectedItem = this.translateSex2CheckItem(this.props.text && this.props.text[0]);
    const leftPostfix = (CBOX_LEFT === selectedItem) ? "-checked" : "";
    const rightPostfix = (CBOX_RIGHT === selectedItem) ? "-checked" : "";

    return (
      <div className="info-checkbox">
        <AgreeItem
          className={`${preCls}${leftPostfix}`}
          onChange={this.handleLeftCheckBoxSelected.bind(this)}
          checked={CBOX_LEFT === selectedItem}
        >
          {this.props.leftCheck.title}
        </AgreeItem>
        <AgreeItem
          className={`${preCls}${rightPostfix}`}
          onChange={this.handleRightCheckBoxSelected.bind(this)}
          checked={CBOX_RIGHT === selectedItem}
        >
          {this.props.rightCheck.title}
        </AgreeItem>
      </div>
    );
  }
}

InfoCheckBox.propTypes = {
  leftCheck: PropTypes.object,
  rightCheck: PropTypes.object,
  onItemSelected: PropTypes.func
};

export default InfoBlocker(InfoCheckBox);
