import React from "react";
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

  render() {
    return (
      <div className={`${preCls} page-frame`}>
        <p className={`${preCls}-title`}>请选择一个分店</p>
        <StoreBrief store={{
          id: 1,
          name: "南京玄武店",
          address: "南京市鼓楼区中央路201号金茂汇6楼605",
          phone: "18512542541",
          email: "njtzl@gmail.com",
          path: "南京轨道交通一号线玄武门站（1号出口）",
        }}/>
      </div>
    );
  }
}

export default AppWrapper(StoreChoosePage);