import React from "react";
import "./styles/copyright.css";
import { Checkbox, Button } from "antd-mobile";

const AgreeItem = Checkbox.AgreeItem;
const preCls = "copyright";

class CopyRight extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accepted: false, // 是否接受协议
      disabled: true // 预约按钮是否可用
    };
  }

  handleStartAppointment() {
    if (this.props.onStartAppointment) {
      this.props.onStartAppointment();
    }
  }

  handleAcceptEntries(event) {
    // 条款是否同意决定是否可以点击按钮
    this.setState({
      disabled: !event.target.checked,
      accepted: event.target.checked
    });
  }

  render() {
    return (
      <div className={preCls}>
        <AgreeItem
          className={`${preCls}-box-agree`}
          data-seed="logId"
          onChange={this.handleAcceptEntries.bind(this)}
        >
          我同意上述条款
        </AgreeItem>
        <Button
          size="small"
          icon="check-circle-o"
          className={`${preCls}-button-appoint`}
          disabled={this.state.disabled}
          onClick={this.handleStartAppointment.bind(this)}
        >
          开始预约
        </Button>
      </div>
    );
  }
}

export default CopyRight;
