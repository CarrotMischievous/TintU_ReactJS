import React from "react";
import PropTypes from "prop-types";

class DivButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      touched: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    //console.log(nextProps);
    /* 外部可以更新一下内部的state给刷成不是touched */
    if (false === nextProps.isChosed &&
        this.state.touched) {
      this.setState({
        touched: false
      });
    }
  }

  handleTouchStart = () => {
    this.moved = false;

    /* 原来为touch则清空，*/
    this.setState({
      touched: true,
    });

    if (this.props.onTouchStart) {
      this.props.onTouchStart();
    }
  }

  handleTouchMove = () => {
    this.moved = true;

    if (this.props.onTouchMove) {
      this.props.onTouchMove();
    }
  }

  handleTouchEnd = () => {
    if (this.moved) {
      this.setState({
        touched: false,
      });
      this.moved = false;
      return;
    }

    if (this.props.onTouchEnd) {
      this.props.onTouchEnd();
    }
  }

  handleTouchCancel = () => {
    this.setState({
      touched: false,
    });

    if (this.props.onTouchCancel) {
      this.props.onTouchCancel();
    }
  }

  render() {
    const combinedClassName = this.props.className ? {
      className: `${this.props.className || ""}${this.state.touched ? " touch" : ""}`
    } : {};

    return (
      <div
        style={this.props.style}
        {...combinedClassName}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
        onTouchCancel={this.handleTouchCancel}
        onTouchMove={this.handleTouchMove}
      >
        {this.props.children}
      </div>
    );
  }
}

DivButton.propTypes = {
  className: PropTypes.string,
}

export default DivButton;