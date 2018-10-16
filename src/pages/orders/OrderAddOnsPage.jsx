import React from "react";
import StoreEntry from "../../components/Store/StoreEntry.jsx";
import ScheduleSelector from "../../components/ScheduleSelector/ScheduleSelector.jsx";
import ProductSelector from "../../components/ScheduleSelector/ProductSelector.jsx";
import DateSelector from "../../components/ScheduleSelector/DateSelector.jsx";
import TimeSelector from "../../components/ScheduleSelector/TimeSelector.jsx";
import AddOnProduct from "./AddOnProduct.jsx";
import AppWrapper from "../../components/AppWrapper/AppWrapper.jsx";
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

    /* 默认一个附加产品都木有 */
    this.addOns = [];
  }

  componentsWillUpdate() {
    /* 页面刷新清空记录 */
    this.addOns = [];
  }

  handleAddonsNext = () => {
    alert(this.addOns);
  }

  handleAddonChosed = (index, chosed) => {
    if (chosed) {
      this.addOns.push(index);
    } else {
      const position = this.addOns.indexOf(index);
      if (-1 !== position) {
        this.addOns.splice(position, 1);
      }
    }
    console.log(this.addOns, index, chosed);
  }

  render() {
    return (
      <div className={`${preCls} page-frame`}>
        <StoreEntry storeId={0} />
        <ScheduleSelector>
          <ProductSelector
            key="product"
            onSelectedItemNone={undefined}
            onChangeSelectedItem={undefined} />
          <DateSelector
            key="date"
            onSelectedItemNone={undefined}
            onChangeSelectedItem={undefined} />
          <TimeSelector
            key="time"
            onSelectedItemNone={undefined}
            onChangeSelectedItem={undefined} />
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
              productName: "identification",
              productChName: "证件照",
              price: 150,
              discount: 30,
            }}
            onAddonChosed={this.handleAddonChosed}
          />
          <AddOnProduct
            index={3}
            addOnProduct={{
              productName: "identification",
              productChName: "证件照",
              price: 150,
              discount: 30,
            }}
            onAddonChosed={this.handleAddonChosed}
          />
        </div>
        <p className={`${preCls}-notice`}>可以点击第二栏“已选择”项目返回对应页面进行重选</p>
      </div>
    );
  }
}

export default AppWrapper(OrderAddOnsPage);