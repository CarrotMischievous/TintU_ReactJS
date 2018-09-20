import React from 'react';
import PropTypes from 'prop-types';

// AppBar由多个选项构成，具体选项抽象组件，外层可以构造任意个
class AppBarItem extends React.Component {
  static propTypes = {
    isSelected: PropTypes.bool,
    itemName: PropTypes.string,
  }

  handleAppBarItemSelected() {
    if (this.props.onAppBarItemSelected) {
      this.props.onAppBarItemSelected();
    }
  }

  render() {
    return (
      <button className="app-bar-item" 
              onClick={this.handleAppBarItemSelected.bind(this)}>
        {this.props.itemName}
      </button>
    );
  }
}

export default AppBarItem;