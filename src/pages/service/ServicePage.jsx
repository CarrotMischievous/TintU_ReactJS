import React from "react";
import AppWrapper from "../../components/AppWrapper/AppWrapper.jsx";
import ServiceFrame from "../../components/ServiceItem/ServiceFrame.jsx";
import "./styles/servicepage.css";

class ServicePage extends React.Component {
  componentWillMount() {
    // 通知Wrapper header的配置
    if (this.props.setHeaderConfiguration) {
      this.props.setHeaderConfiguration({
        title: "拍摄服务",
        explain: "根据情况选择自己需要的业务",
      });
    }
  }

  render() {
    return (
      <div className="service-page flex-container page-frame">
        <ServiceFrame
          title="棚拍服务"
          frameStyle={{backgroundColor: "#FADCBE"}}
          itemList={
            [
              {
                productName: "identification",
                title: "证件照",
              },
              {
                productName: "portraits",
                title: "形象照",
              },
              {
                productName: "couple",
                title: "结婚登记照",
              },
              {
                productName: "degree",
                title: "学位照",
              },
            ]
          }
        />
        <ServiceFrame
          title="外拍服务"
          frameStyle={{backgroundColor: "#FCEAB1"}}
          itemList={
            [
              {
                productName: "single",
                title: "个人写真",
              },
              {
                productName: "lovers",
                title: "情侣写真",
              },
              {
                productName: "2friends",
                title: "好友写真",
              },
              {
                productName: "class",
                title: "班级毕业照",
              },
            ]
          }
        />
        <ServiceFrame
          title="租赁服务"
          frameStyle={{backgroundColor: "#DAE9AC"}}
          itemList={
            [
              {
                productName: "formal",
                title: "正装租赁",
              },
              {
                productName: "academicals",
                title: "学位服租赁",
              },
              {
                productName: "studio",
                title: "影棚租赁",
              },
              {
                productName: "equipment",
                title: "器材租赁",
              },
            ]
          }
        />
        <ServiceFrame
          title="以下业务需电话预约"
          frameStyle={{backgroundColor: "#D7EDEC"}}
          itemList={
            [
              {
                productName: "identification",
                title: "FlimU系列",
              },
              {
                productName: "portraits",
                title: "活动跟拍",
              },
              {
                productName: "couple",
                title: "视频制作",
              },
              {
                productName: "degree",
                title: "航拍",
              },
            ]
          }
        />
      </div>
    );
  }
}

export default AppWrapper(ServicePage);