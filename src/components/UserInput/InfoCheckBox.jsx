import React from "react";
import "./styles/infocheckbox.css";
import InfoBlocker from "./InfoBlocker.jsx";
import { Checkbox } from "antd-mobile";
import PropTypes from "prop-types";
import { CBOX_LEFT, CBOX_RIGHT, CBOX_NONE } from "../../helper/constants.js";

const AgreeItem = Checkbox.AgreeItem;
const preCls = "icheckbox";

class InfoCheckBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: CBOX_NONE
    };
  }

  handleLeftCheckBoxSelected() {
    this.setState({
      selectedItem: CBOX_LEFT
    });

    if (this.props.onItemSelected) {
      this.props.onItemSelected(CBOX_LEFT);
    }
  }

  handleRightCheckBoxSelected() {
    this.setState({
      selectedItem: CBOX_RIGHT
    });

    if (this.props.onItemSelected) {
      this.props.onItemSelected(CBOX_RIGHT);
    }
  }

  render() {
    return (
      <div className="info-checkbox">
        <AgreeItem
          className={`${preCls}-left ${this.props.leftCheck.className}`}
          onChange={this.handleLeftCheckBoxSelected.bind(this)}
          checked={CBOX_LEFT === this.state.selectedItem}
        >
          {this.props.leftCheck.title}
        </AgreeItem>
        <AgreeItem
          className={`${preCls}-right ${this.props.rightCheck.className}`}
          onChange={this.handleRightCheckBoxSelected.bind(this)}
          checked={CBOX_RIGHT === this.state.selectedItem}
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
