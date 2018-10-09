import React from "react";
import StoreEntry from "../../components/Store/StoreEntry.jsx";
import ScheduleSelector from "../../components/ScheduleSelector/ScheduleSelector.jsx";
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
        <ScheduleSelector
          selectedItems={[
            {
              title: "已选择项目",
              content: "证件照",
            },
            {
              title: "已选择日期",
              content: "2018年10月9日（周二）",
            }
          ]}
        />
      </div>
    );
  }
}

export default AppWrapper(OrderAddOnsPage);