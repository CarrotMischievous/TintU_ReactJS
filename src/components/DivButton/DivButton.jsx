import React from "react";
import PropTypes from "prop-types";

class DivButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      touched: false,
    }
  }

  handleTouchStart = () => {
    this.moved = false;
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
    this.setState({
      touched: false,
    });

    if (this.moved) {
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
    return (
      <div
        className={`${this.props.className} ${this.state.touched ? "touch" : ""}`}
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