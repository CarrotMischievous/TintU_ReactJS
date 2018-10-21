import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Toast } from 'antd-mobile';
import AppWrapper from "../../components/AppWrapper/AppWrapper.jsx";
import OrderDetail from "../../components/Order/OrderDetail.jsx";
import { PAGE_SCHEDULE_DATE, PAGE_ORDER } from "../../routes/userRoutes.js";
import { routeTraverseWithDelay } from "../../helper/RouteHelper.js";
import { generateOrderBySchedule } from "../../helper/OrderHelper.js";
import "./styles/orderconfirmpage.css";

const preCls = "order-confirm-page";

class OrderConfirmPage extends React.Component {
  constructor(props) {
    super(props);

    /* 通知Wrapper header的配置 */
    if (this.props.setHeaderConfiguration) {
      this.props.setHeaderConfiguration({
        title: "订单确认",
        explain: "请确认订单具体信息，确认后进行支付",
      });
    }

    /* 通知Wrapper footer的配置 */
    if (this.props.setFooterConfiguration) {
      this.props.setFooterConfiguration({
        items: [
          {
            title: "重选档期",
            onItemClicked: this.handleBackToPreStep,
          },
          {
            title: "确认并支付",
            onItemClicked: this.handleOrderConfirmed,
          },
        ]
      });
    }
  }

  handleOrderPaySuccess = () => {
    /* 进入我的订单页面 */
    routeTraverseWithDelay(this.props.history, PAGE_ORDER);
  }

  handleOrderConfirmed = () => {
    /* Toast延时 */
    const noticeDelay = 1;

    Toast.loading(`正在支付...`, 0);
    setTimeout(() => {
      Toast.hide();
      Toast.success("支付成功", noticeDelay, this.handleOrderPaySuccess);
    }, 2000);
  }

  handleBackToPreStep = () => {
    /* 重新选择日期 */
    routeTraverseWithDelay(this.props.history, PAGE_SCHEDULE_DATE);
  }

  render() {
    const order = generateOrderBySchedule(
      this.props.userInfo.user,
      [
        this.props.product
      ],
      this.props.schedule,
      this.props.storeInfo
    );

    return (
      <div className={`${preCls} page-frame`}>
        <OrderDetail
          title="确认订单"
          order={order}
        />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  //console.log(state.order.chosedAddons);
  return {
    chosedAddons: state.order.chosedAddons,
    product: state.product,
    schedule: state.schedule,
    storeInfo: state.storeInfo,
    userInfo: state.userInfo,
  };
}

export default withRouter(AppWrapper(connect(mapStateToProps)(OrderConfirmPage)));