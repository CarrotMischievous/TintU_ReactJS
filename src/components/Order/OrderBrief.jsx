import React from "react";
import DivButton from "../../components/DivButton/DivButton.jsx";
import { transDateToDisplay } from "../../helper/DateCalculator.js";
import "./styles/orderbrief.css";

const preCls = "orderbr";

class OrderBrief extends React.Component {
  handleGetOrderDetail = () => {
    if (this.props.onGetOrderDetail) {
      this.props.onGetOrderDetail(this.props.index);
    }
  }

  render() {
    const order = this.props.order || {};
    const store = order.store || {};

    return (
      <DivButton
        className="order-brief"
        onTouchEnd={this.handleGetOrderDetail}>
        <p className={`${preCls}-keyinfo`}>
          {order.userName}
          <span className={`${preCls}-status`}>{order.status}</span>
        </p>
        <p className={`${preCls}-keyinfo`}>{transDateToDisplay(order.shotDate, order.shotTime)}</p>
        <p className={`${preCls}-keyinfo`}>{store.name}</p>
        <p className={`${preCls}-keyinfo`}>
          {
            order.productList.map((productChName, index) => {
              return <span className={`${preCls}-product-list`} key={index}>{productChName}</span>
            })
          }
        </p>
        <p className={`${preCls}-detail-button`}>查看订单详情 ></p>
      </DivButton>
    );
  }
}

export default OrderBrief;