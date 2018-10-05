import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PersonalInfo from "./PersonalInfo.jsx";
import AppWrapper from "../../components/AppWrapper/AppWrapper.jsx";
import "./styles/myinfo.css";

class MyInfoPage extends React.Component {
  componentWillMount() {
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
            style: {
              backgroundColor: "white",
              color: "#FC8531",
              borderColor: "#FC8531",
            },
          },
          {
            title: "保存",
            onItemClicked: this.handleUserSave.bind(this),
          },
        ]
      });
    }
  }

  handleUserCancel() {
    this.props.history.goBack();
  }

  handleUserSave() {

  }

  render() {
    //console.log("infoPage: ", this.props.personInfo);
    return (
      <div className="flex-container myinfo-page page-frame">
        <PersonalInfo className='myinfo-flex' />
      </div>
    );
  }
}

MyInfoPage.propTypes = {
  personInfo: PropTypes.object,
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    personInfo: state.personInfo,
  };
}

export default withRouter(AppWrapper(connect(mapStateToProps)(MyInfoPage)));