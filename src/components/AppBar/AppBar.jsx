import React from 'react';
import { APP_BAR_ITEMS } from '../../helper/constants.js';
import AppBarItem from './AppBarItem.jsx';

// 底层可选项目BAR，可以选择不同信息界面（仿小程序）
class AppBar extends React.Component {
  constructor(props) {
    super(props);

    // 基于APP_BAR_ITEMS创建维护ITEM
    this.state = {
      itemList: APP_BAR_ITEMS.map((item, index) => {
        return {
          isSelected: false,
          itemName: item,
        }
      }),
    }
  }

  render() {
    return (
      <div className="app-bar">
        {
          this.state.itemList.map((item, index) => {
            return (
              <AppBarItem key={index}
                          isSelected={item.isSelected}
                          itemName={item.itemName} />
            );
          })
        }
      </div>
    );
  }
}

export default AppBar;