import React from 'react';

class CopyRight extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accepted: false, // 是否接受条款
      disabled: true,  // 预约按钮是否可用
    }
  }

  handleStartAppointment() {
    if (this.props.onStartAppointment) {
      this.props.onStartAppointment();
    }
  }

  handleAcceptEntries(event) {
    // 条款是否同意决定是否可以点击按钮
    this.setState({
      accepted: event.target.checked,
      disabled: !event.target.checked,
    });
  }

  render() {
    return (
      <div className='copyright'>
        <input className='copyright-checkbox' type='checkbox'
               checked={this.state.accepted}
               onChange={this.handleAcceptEntries.bind(this)}/>
        <span>我同意上述条款</span>
        <button className='copyright-start'
                disabled={this.state.disabled}
                onClick={this.handleStartAppointment.bind(this)}>
                开始预约
        </button>
      </div>
    );
  }
}

export default CopyRight;