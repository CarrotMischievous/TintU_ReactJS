import React from "react";
import PropTypes from "prop-types";
import { Modal } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import { routeTraverse } from "../../helper/RouteHelper.js";
import DivButton from "../../components/DivButton/DivButton.jsx";
import "./styles/baseselector.css";

const preCls = "schedule-selector";
const alert = Modal.alert;

class BaseSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelectorCanceled: false,
    }
  }

  componentWillMount() {
    //console.log(this.props);
    if (typeof this.props.reselectData === "undefined" || null === this.props.reselectData) {
      routeTraverse(this.props.history, this.props.reselectRoute);
    }
  }

  handleSelectorChosed = () => {
    const alertInstance = alert(`重新选择${this.props.title}`, `${this.props.content}`, [
      { text: '取消', onPress: this.handleSelectCanceled, style: 'default' },
      { text: '确认', onPress: this.handleSelectOk, style: {color: "#FC8531"} },
    ]);

    setTimeout(() => {
      // 可以调用close方法以在外部close
      console.log('auto close');
      alertInstance.close();
    }, 300000);
  }

  handleSelectCanceled = () => {
    this.setState({
      isSelectorCanceled: true,
    });
  }

  handleSelectOk = () => {
    if (this.props.reselectRoute) {
      this.props.history.push(this.props.reselectRoute);
    }
  }

  render() {
    /* 当前需要取消chosed情况才通知到divbutton */
    const isSelectorTouched = this.state.isSelectorCanceled ? {
      isChosed: false
    } : {};

    return (
      <DivButton
        className={`${preCls}`}
        {...isSelectorTouched}
        onTouchEnd={this.handleSelectorChosed}
      >
        <p className={`${preCls}-title`}>{`已选择${this.props.title}`}</p>
        <p className={`${preCls}-content`}>{this.props.content}</p>
      </DivButton>
    );
  }
}

BaseSelector.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  reselectRoute: PropTypes.string,
}

export default withRouter(BaseSelector);