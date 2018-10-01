import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import PersonalInfo from "./PersonalInfo.jsx";
import AppHeaderWrapper from "../../components/AppHeaderWrapper/AppHeaderWrapper.jsx";
import AppFooter from "../../components/AppFooter/AppFooter.jsx";
import "./styles/myinfo.css";

class MyInfoPage extends React.Component {
  handleUserCancel() {

  }

  handleUserSave() {

  }

  render() {
    //console.log(this.props.personInfo);
    return (
      <div className="flex-container myinfo-page">
        <PersonalInfo className='myinfo-flex' />
        <AppFooter
          content={
            [
              {
                title: "取消",
                onItemClicked: this.handleUserCancel.bind(this),
              },
              {
                title: "保存",
                onItemClicked: this.handleUserSave.bind(this),
              },
            ]
          }/>
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

export default AppHeaderWrapper(connect(mapStateToProps)(MyInfoPage));
