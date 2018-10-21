import React from "react";
import { transDateToDisplay } from "../../helper/DateCalculator.js";
import "./styles/orderdetail.css";

const preCls = "orderde";

class OrderDetail extends React.Component {
  render() {
    const order = this.props.order || {};
    const store = order.store || {};

    const numbersNoNeed = order.numbers ? "" : " orderde-no-need";
    const statusNoNeed = order.orderStatus ? "" : " orderde-no-need";

    return (
      <div className="order-detail">
        <p className={`${preCls}-title`}>{this.props.title}</p>
        <div className={`${preCls}-numbers${numbersNoNeed}`}>
          <InfoHead title="订单编号:">
            <span>{order.number}</span>
          </InfoHead>
          <InfoHead title="创建时间:">
            <span>{order.createTime}</span>
          </InfoHead>
        </div>
        <div className={`${preCls}-infos`}>
          <div className={`${preCls}-schedule`}>
            <InfoHead title="拍摄信息" />
            <InfoLine title="姓&#12288;&#12288;名:" content={order.userName} />
            <InfoLine title="联系方式:" content={order.userPhone} />
            <InfoLine title="电子邮箱:" content={order.userEmail}  />
            <InfoLine title="拍摄日期:" content={transDateToDisplay(order.shotDate, order.shotTime)} />
            <InfoLine title="拍摄门店:" content={store.name} />
          </div>
          <div className={`${preCls}-products`}>
            <InfoBlock
              title="套餐信息"
              items={
                order.productList.map((productChName) => {
                  return `${productChName} x1份`;
                })
              }
              explain="套餐可至门店更改，以最终拍摄为准"
            />
            <InfoBlock
              title="预计耗时"
              items={[
                `约${order.takeTime * .5}小时`,
              ]}
              explain="时长仅供参考，请预留充足时间"
            />
          </div>
          <div className={`${preCls}-price`}>
            <div className={`${preCls}-total-price`}>
              <InfoHead title="订单金额">
                <span className={`${preCls}-cur-tprice`}>{`￥${order.totalPrice}`}</span>
              </InfoHead>
            </div>
            <div className={`${preCls}-front-price`}>
              <InfoHead title="需付定金">
                <span className={`${preCls}-cur-fprice`}>{`￥${order.frontMoney}`}</span>
              </InfoHead>
            </div>
          </div>
        </div>
        <div className={`${preCls}-status${statusNoNeed}`}>
          <InfoHead title="订单状态">
            <span className={`${preCls}-cur-status`}>{order.status}</span>
          </InfoHead>
        </div>
      </div>
    );
  }
}

const InfoHead = (props) => {
  return (
    <p className={`${preCls}-info-head`}>
      <span className={`${preCls}-head`}>{props.title}</span>
      {props.children}
    </p>
  );
}

const InfoLine = (props) => {
  return (
    <p className={`${preCls}-info-line`}>
      <span className={`${preCls}-line-title`}>{props.title}</span>
      <span className={`${preCls}-line-content`}>{props.content}</span>
    </p>
  );
}

const InfoBlock = (props) => {
  return (
    <div className={`${preCls}-info-block`}>
      <InfoHead title={props.title} />
      <div className={`${preCls}-block-detail`}>
        {
          props.items.map((item, index) => {
            return (<p className={`${preCls}-block-item`} key={index}>{item}</p>);
          })
        }
        <p className={`${preCls}-block-explain`}>{props.explain}</p>
      </div>
    </div>
  );
}

export default OrderDetail;