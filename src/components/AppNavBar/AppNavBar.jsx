import React from "react";
import { NavBar, Icon, Popover } from "antd-mobile";
import { withRouter } from "react-router-dom";
import * as routes from "../../routes/userRoutes.js";
import "./styles/appnavbar.css";

const Item = Popover.Item;
const myImg = src => (
  <img
    src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`}
    className="am-icon am-icon-xs"
    alt=""
  />
);
const IconStyle = {
  height: "100%",
  padding: "0 15px",
  marginRight: "-15px",
  display: "flex",
  alignItems: "center"
};

// 界面顶端带有Logo的横条
class AppNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      selected: ""
    };
  }

  onSelect(opt) {
    this.setState({
      visible: false,
      selected: opt.props.value
    });

    // 路由切换
    this.props.history.push(opt.props.value);
  }

  handleVisibleChange(visible) {
    this.setState({
      visible
    });
  }

  render() {
    return (
      <div className="app-nav-bar">
        <NavBar
          className="logo-nav-bar"
          mode="dark"
          rightContent={
            <Popover
              mask
              overlayClassName="fortest"
              overlayStyle={{ color: "currentColor" }}
              visible={this.state.visible}
              overlay={[
                <Item
                  key="1"
                  value={routes.PAGE_INDEX}
                  icon={myImg("tOtXhkIWzwotgGSeptou")}
                >
                  开始预约
                </Item>,
                <Item
                  key="2"
                  value={routes.PAGE_ORDER}
                  icon={myImg("tOtXhkIWzwotgGSeptou")}
                >
                  我的订单
                </Item>,
                <Item
                  key="3"
                  value={routes.PAGE_SELF}
                  icon={myImg("PKAgAqZWJVNwKsAJSmXd")}
                >
                  个人资料
                </Item>,
                <Item
                  key="4"
                  value={routes.PAGE_NOTIF}
                  icon={myImg("uQIYTFeRrjPELImDRrPt")}
                >
                  拍摄须知
                </Item>
              ]}
              align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, 5]
              }}
              onVisibleChange={this.handleVisibleChange.bind(this)}
              onSelect={this.onSelect.bind(this)}
            >
              <div style={IconStyle}>
                <Icon type="ellipsis" />
              </div>
            </Popover>
          }
        >
          TintU影像实验室
        </NavBar>
      </div>
    );
  }
}

export default withRouter(AppNavBar);
