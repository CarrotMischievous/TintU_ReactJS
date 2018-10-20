import React from "react";
import { connect } from 'react-redux';
import OrderBrief from "../../components/Order/OrderBrief.jsx";
import OrderDetail from "../../components/Order/OrderDetail.jsx";
import AppWrapper from "../../components/AppWrapper/AppWrapper.jsx";
import { generateOrderBySchedule } from "../../helper/OrderHelper.js";
import "./styles/orderconfirmpage.css";

const preCls = "my-order-page";

class MyOrderPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orderDetailed: false,
    }

    /* 通知Wrapper header的配置 */
    if (this.props.setHeaderConfiguration) {
      this.props.setHeaderConfiguration({
        title: "我的订单",
      });
    }
  }

  handleBackToMyOrders = () => {
    this.setState({
      orderDetailed: false,
    });

    /* 修改Header */
    if (this.props.setHeaderConfiguration) {
      this.props.setHeaderConfiguration({
        title: "我的订单",
      });
    }

    /* 修改Footer */
    if (this.props.setFooterConfiguration) {
      this.props.setFooterConfiguration({});
    }
  }

  handleGetOrderDetail = (index) => {
    this.setState({
      orderDetailed: true,
    });

    /* 修改Header */
    if (this.props.setHeaderConfiguration) {
      this.props.setHeaderConfiguration({
        title: "",
      });
    }

    /* 修改Footer */
    if (this.props.setFooterConfiguration) {
      this.props.setFooterConfiguration({
        items: [
          {
            title: "返回我的订单",
            onItemClicked: this.handleBackToMyOrders,
          },
        ]
      });
    }
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
    order.status = "已取消";

    return (
      <div className={`${preCls} page-frame`}>
        {
          this.state.orderDetailed ?
          <OrderDetail
            title="订单详情"
            order={order}
          />
          :
          <OrderBrief
            order={order}
            onGetOrderDetail={this.handleGetOrderDetail}
          />
        }
        
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

export default AppWrapper(connect(mapStateToProps)(MyOrderPage));