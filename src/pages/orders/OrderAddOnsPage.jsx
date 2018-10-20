import React from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ScheduleSelector from "../../components/ScheduleSelector/ScheduleSelector.jsx";
import ProductSelector from "../../components/ScheduleSelector/ProductSelector.jsx";
import DateSelector from "../../components/ScheduleSelector/DateSelector.jsx";
import TimeSelector from "../../components/ScheduleSelector/TimeSelector.jsx";
import AddOnProduct from "../../components/Product/AddOnProduct.jsx";
import AppWrapper from "../../components/AppWrapper/AppWrapper.jsx";
import * as Actions from "../../store/actions.js";
import { PAGE_ORDER_CONFIRM } from "../../routes/userRoutes.js";
import { routeTraverseWithDelay } from "../../helper/RouteHelper.js";
import "./styles/orderaddonspage.css";

const preCls = "order-addon-page";

class OrderAddOnsPage extends React.Component {
  constructor(props) {
    super(props);

    /* 通知Wrapper header的配置 */
    if (this.props.setHeaderConfiguration) {
      this.props.setHeaderConfiguration({
        title: "附加产品",
        explain: "多个项目叠加预约更优惠",
      });
    }

    /* 通知Wrapper footer的配置 */
    if (this.props.setFooterConfiguration) {
      this.props.setFooterConfiguration({
        items: [
          {
            title: "下一步",
            onItemClicked: this.handleAddonsNext,
          },
        ]
      });
    }

    /* 配置storeEntry */
    if (this.props.setStoreEntry) {
      this.props.setStoreEntry();
    }
  }

  componentsWillUpdate() {
    if (this.props.clearChosedAddons) {
      this.props.clearChosedAddons();
    }
  }

  handleAddonsNext = () => {
    routeTraverseWithDelay(this.props.history, PAGE_ORDER_CONFIRM);
  }

  handleAddonChosed = (index, chosed) => {
    if (chosed) {
      if (this.props.updateChosedAddons) {
        this.props.updateChosedAddons(index);
      }
    } else {
      if (this.props.deleteChosedAddons) {
        this.props.deleteChosedAddons(index);
      }
    }
    //console.log(this.props.chosedAddons, index, chosed);
  }

  render() {
    return (
      <div className={`${preCls} page-frame`}>
        <ScheduleSelector>
          <ProductSelector key="product" />
          <DateSelector key="date" />
          <TimeSelector key="time" />
        </ScheduleSelector>
        <p className={`${preCls}-title`}>可附加项目</p>
        <div className={`${preCls}-addons`}>
          <AddOnProduct
            index={1}
            addOnProduct={{
              productName: "identification",
              productChName: "证件照",
              price: 150,
              discount: 30,
            }}
            onAddonChosed={this.handleAddonChosed}
          />
          <AddOnProduct
            index={2}
            addOnProduct={{
              productName: "class",
              productChName: "班级照",
              price: 300,
              discount: 60,
            }}
            onAddonChosed={this.handleAddonChosed}
          />
          <AddOnProduct
            index={3}
            addOnProduct={{
              productName: "portraits",
              productChName: "形象照",
              price: 120,
              discount: 20,
            }}
            onAddonChosed={this.handleAddonChosed}
          />
        </div>
        <p className={`${preCls}-notice`}>可以点击第二栏“已选择”项目返回对应页面进行重选</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state.order.chosedAddons);
  return {
    chosedAddons: state.order.chosedAddons,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateChosedAddons: (addon) => {
      dispatch(Actions.updateChosedAddons(addon));
    },
    deleteChosedAddons: (addon) => {
      dispatch(Actions.deleteChosedAddons(addon));
    },
    clearChosedAddons: () => {
      dispatch(Actions.clearChosedAddons());
    },
  }
}

export default withRouter(AppWrapper(connect(mapStateToProps, mapDispatchToProps)(OrderAddOnsPage)));