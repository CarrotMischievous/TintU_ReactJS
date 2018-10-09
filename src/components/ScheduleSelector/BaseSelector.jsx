import React from "react";
import PropTypes from "prop-types";
import "./styles/baseselector.css";

const preCls = "schedule-selector";

class BaseSelector extends React.Component {
  render() {
    return (
      <div className={`${preCls}`}>
        <p className={`${preCls}-title`}>{this.props.title}</p>
        <p className={`${preCls}-content`}>{this.props.content}</p>
      </div>
    );
  }
}

BaseSelector.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}

export default BaseSelector;