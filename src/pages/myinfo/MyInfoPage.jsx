import React from "react";
import PropTypes from "prop-types";
import { Toast } from 'antd-mobile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PersonalInfo from "./PersonalInfo.jsx";
import AppWrapper from "../../components/AppWrapper/AppWrapper.jsx";
import * as Actions from "../../store/actions.js";
import "./styles/myinfo.css";

class MyInfoPage extends React.Component {
  constructor(props) {
    super(props);

    // 通知Wrapper header的配置
    if (this.props.setHeaderConfiguration) {
      this.props.setHeaderConfiguration({
        title: "个人信息",
        explain: "我们保证，绝不会向第三方透露您的资料信息",
      });
    }

    // 通知Wrapper footer的配置
    if (this.props.setFooterConfiguration) {
      this.props.setFooterConfiguration({
        items: [
          {
            title: "取消",
            onItemClicked: this.handleUserCancel.bind(this),
          },
          {
            title: "保存",
            onItemClicked: this.handleUserSave.bind(this),
          },
        ]
      });
    }
  }

  componentWillUnmount() {
    /* 组件跳转时，如果没有保存则抛弃修改 */
    if (this.props.refreshUser) {
      this.props.refreshUser();
    }
  }

  /* 检查当前用户填写是否ok，不满足情况返回对应提示 */
  checkAllUserInfoSatisfied = () => {
    const result = {
      satisfied: false,
      hint: "",
    }
    const user = this.props.userInfo.user || {};

    if (!user.name) {
      result.hint = "请填写姓名";
      return result;
    }

    if (!user.sex) {
      result.hint = "请选择性别";
      return result;
    }

    if (!user.email) {
      result.hint = "请输入邮箱";
      return result;
    }

    if (!this.props.userInfo.vCodeApplied) {
      result.hint = "请获取验证码";
      return result;
    }

    if (!this.props.userInfo.verificationCode) {
      result.hint = "请输入验证码";
      return result;
    }

    result.satisfied = true;
    return result;
  }

  /* 当前用户满足要求，存到数据库 */
  handleSaveUserInfo(waitToast) {
    setTimeout(() => {
      /* 刷新LocalStorage */
      if (this.props.updateUser) {
        this.props.updateUser(this.props.userInfo.user);
      }

      Toast.hide();
      Toast.success("保存成功", 2);
    }, 2000);
  }

  handleUserCancel() {
    this.props.history.goBack();
  }

  handleUserSave() {
    /* Toast延时 */
    const noticeDelay = 1;
    const checkResult = this.checkAllUserInfoSatisfied();

    if (checkResult.satisfied) {
      /* Loading弹窗，调用server储存，等存储OK后才消除toast */
      Toast.loading("保存中...", 0);
      this.handleSaveUserInfo();
    } else {
      Toast.fail(checkResult.hint, noticeDelay);
    }
  }

  render() {
    //console.log("infoPage: ", this.props.userInfo);
    return (
      <div className="flex-container myinfo-page page-frame">
        <PersonalInfo className='myinfo-flex' />
      </div>
    );
  }
}

MyInfoPage.propTypes = {
  userInfo: PropTypes.object,
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    userInfo: state.userInfo,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => {
      dispatch(Actions.updateUser(user));
    },
    refreshUser: () => {
      dispatch(Actions.refreshUser());
    },
  }
}

export default withRouter(AppWrapper(connect(mapStateToProps, mapDispatchToProps)(MyInfoPage)));