import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Toast } from 'antd-mobile';
import UserFetcher from "../../server/UserFetcher.js";
import { PAGE_STORE_CHOOSE, PAGE_SELF } from "../../routes/userRoutes.js";
import { routeTraverseWithDelay } from "../../helper/RouteHelper.js";
import Introduction from "./Introduction.jsx";
import CopyRight from "./CopyRight.jsx";
import AppWrapper from "../../components/AppWrapper/AppWrapper.jsx";
import * as Actions from "../../store/actions.js";
import "./styles/welcomepage.css";

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);

    /* 通知Wrapper header的配置 */
    if (this.props.setHeaderConfiguration) {
      this.props.setHeaderConfiguration({
        title: "欢迎来到TintU影像实验室",
      });
    }
  }

  handleStartAppoinment = () => {
    /* 先确认下用户存不存在，不存在跳转到用户注册，存在着更新到redux，然后开始预订 */
    Toast.loading("获取用户信息...", 0);
    UserFetcher.fetchByPhone("18512542541", this.handleServerData, this.handleNoServerData);
  }

  /* 从Server获取数据通过redux刷新 */
  handleServerData = (user) => {
    if (this.props.updateUser) {
      this.props.updateUser(user[0]);
    }

    /* 跳转到预订页面 */
    routeTraverseWithDelay(this.props.history, PAGE_STORE_CHOOSE);
    Toast.hide();
  }

  /* 获取不到用户跳转到用户信息页面 */
  handleNoServerData = (resCode) => {
    /* 服务器错误不跳转 */
    if (500 === resCode) {
      Toast.hide();
      Toast.offline("服务器暂时无法连接", 2);
      return;
    }

    routeTraverseWithDelay(this.props.history, PAGE_SELF);
    Toast.hide();
    Toast.info("请先注册", 2);
  }

  render() {
    return (
      <div className="flex-container welcome-page page-frame">
        <Introduction className="intro-flex" />
        <CopyRight onStartAppointment={this.handleStartAppoinment}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => {
      dispatch(Actions.updateUser(user));
    },
  }
}

export default withRouter(AppWrapper(connect(null, mapDispatchToProps)(WelcomePage)));
