import React from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Actions from "../../store/actions.js";
import { PAGE_SERVE } from "../../routes/userRoutes.js";
import StoreBrief from "./StoreBrief.jsx";
import AppWrapper from "../../components/AppWrapper/AppWrapper.jsx";
import "./styles/storechoosepage.css";

const preCls = "store-choose-page";

class StoreChoosePage extends React.Component {
  constructor(props) {
    super(props);

    /* 通知Wrapper header的配置 */
    if (this.props.setHeaderConfiguration) {
      this.props.setHeaderConfiguration({
        title: "分店选择",
        explain: "请选择一个最适合自己的分店进行预订",
      });
    }
  }

  componentWillUpdate() {
    /* 第一次挂载的时候store需要清空 */
    if (this.props.clearStoreInfo) {
      this.props.clearStoreInfo();
    }
  }

  handleStoreSelected = (storeInfo) => {
    if (this.props.updateStoreInfo && storeInfo) {
      this.props.updateStoreInfo(storeInfo);
    }

    /* 选择产品 */
    this.props.history.push(PAGE_SERVE);
  }

  render() {
    return (
      <div className={`${preCls} page-frame`}>
        <p className={`${preCls}-title`}>请选择一个分店</p>
        <StoreBrief
          storeInfo={{
            id: 1,
            name: "南京玄武店",
            address: "南京市鼓楼区中央路201号金茂汇6楼605",
            phone: "18512542541",
            email: "njtzl@gmail.com",
            path: "南京轨道交通一号线玄武门站（1号出口）",
          }}
          onStoreSelected={this.handleStoreSelected}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateStoreInfo: (storeInfo) => {
      dispatch(Actions.updateStoreInfo(storeInfo));
    },
    clearStoreInfo: () => {
      dispatch(Actions.clearStoreInfo());
    },
  }
}

export default AppWrapper(withRouter(connect(null, mapDispatchToProps)(StoreChoosePage)));