import React from "react";
import StoreEntry from "../../components/Store/StoreEntry.jsx";
import ScheduleSelector from "../../components/ScheduleSelector/ScheduleSelector.jsx";
import ProductSelector from "../../components/ScheduleSelector/ProductSelector.jsx";
import DateSelector from "../../components/ScheduleSelector/DateSelector.jsx";
import TimeSelector from "../../components/ScheduleSelector/TimeSelector.jsx";
import AppWrapper from "../../components/AppWrapper/AppWrapper.jsx";

const preCls = "order-addon-page";

class OrderAddOnsPage extends React.Component {
  constructor(props) {
    super(props);

    /* 通知Wrapper header的配置 */
    if (this.props.setHeaderConfiguration) {
      this.props.setHeaderConfiguration({
        title: "⑤附加产品",
        explain: "多个项目叠加选择更优惠",
      });
    }
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
      </div>
    );
  }
}

export default AppWrapper(OrderAddOnsPage);