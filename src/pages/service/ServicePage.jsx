import React from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Toast } from 'antd-mobile';
import * as Actions from "../../store/actions.js";
import { PAGE_PRODUCT } from "../../routes/userRoutes.js";
import { routeTraverseWithDelay } from "../../helper/RouteHelper.js";
import AppWrapper from "../../components/AppWrapper/AppWrapper.jsx";
import ServiceFrame from "../../components/ServiceItem/ServiceFrame.jsx";
import ProductFetcher from "../../server/ProductFetcher.js";
import "./styles/servicepage.css";

class ServicePage extends React.Component {
  constructor(props) {
    super(props);

    // 通知Wrapper header的配置
    if (this.props.setHeaderConfiguration) {
      this.props.setHeaderConfiguration({
        title: "拍摄服务",
        explain: "请选择需要预约的业务类型",
      });
    }

    /* 配置storeEntry */
    if (this.props.setStoreEntry) {
      this.props.setStoreEntry();
    }

    this.handleServiceItemSelected = this.handleServiceItemSelected.bind(this);
  }

  componentWillMount() {
    /* 页面刷新则product重选 */
    if (this.props.clearProduct) {
      this.props.clearProduct();
    }
  }

  handleServiceItemSelected(name) {
    /* 根据productName获取product全量信息 */
    ProductFetcher.fetchByName(name, (data) => {
      /* 通过redux刷新当前选择的product */
      if (this.props.updateProduct) {
        this.props.updateProduct(data[0]);
      }

      /* product更新，date不再有效 */
      if (this.props.clearScheduleDate) {
        this.props.clearScheduleDate();
      }

      routeTraverseWithDelay(this.props.history, PAGE_PRODUCT);
    }, () => {
      /* 产品信息不会找不到，直接提示网络错误 */
      Toast.offline("服务器暂时无法连接", 2);
    });
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
                name: "identification",
                title: "证件照",
              },
              {
                name: "portraits",
                title: "形象照",
              },
              {
                name: "couple",
                title: "结婚登记照",
              },
              {
                name: "degree",
                title: "学位照",
              },
            ]
          }
          onServiceItemSelected={this.handleServiceItemSelected}
        />
        <ServiceFrame
          title="外拍服务"
          frameStyle={{backgroundColor: "#FCEAB1"}}
          itemList={
            [
              {
                name: "single",
                title: "个人写真",
              },
              {
                name: "lovers",
                title: "情侣写真",
              },
              {
                name: "2friends",
                title: "好友写真",
              },
              {
                name: "class",
                title: "班级毕业照",
              },
            ]
          }
          onServiceItemSelected={this.handleServiceItemSelected}
        />
        <ServiceFrame
          title="租赁服务"
          frameStyle={{backgroundColor: "#DAE9AC"}}
          itemList={
            [
              {
                name: "formal",
                title: "正装租赁",
              },
              {
                name: "academicals",
                title: "学位服租赁",
              },
              {
                name: "studio",
                title: "影棚租赁",
              },
              {
                name: "equipment",
                title: "器材租赁",
              },
            ]
          }
          onServiceItemSelected={this.handleServiceItemSelected}
        />
        <ServiceFrame
          title="以下业务需电话预约"
          frameStyle={{backgroundColor: "#D7EDEC"}}
          itemList={
            [
              {
                name: "filmU",
                title: "FlimU系列",
              },
              {
                name: "follow",
                title: "活动跟拍",
              },
              {
                name: "videos",
                title: "视频制作",
              },
              {
                name: "flight",
                title: "航拍",
              },
            ]
          }
          onServiceItemSelected={this.handleServiceItemSelected}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateProduct: (product) => {
      dispatch(Actions.updateProduct(product));
    },
    clearProduct: () => {
      dispatch(Actions.clearProduct());
    },
    clearScheduleDate: () => {
      dispatch(Actions.clearScheduleDate());
    },
  }
}

export default withRouter(AppWrapper(connect(null, mapDispatchToProps)(ServicePage)));