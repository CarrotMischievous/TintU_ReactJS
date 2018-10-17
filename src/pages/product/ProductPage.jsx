import React from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { PAGE_SCHEDULE_DATE } from "../../routes/userRoutes.js";
import StoreEntry from "../../components/Store/StoreEntry.jsx";
import AppWrapper from "../../components/AppWrapper/AppWrapper.jsx";
import ProductBrief from "./ProductBrief.jsx";
import ProductItems from "./ProductItems.jsx";
import ProductSample from "./ProductSample.jsx";
import ProductShow from "./ProductShow.jsx";
import { routeGoBackWithDelay, routeTraverseWithDelay } from "../../helper/RouteHelper.js";
import { ITEM_TEMPLATE, ITEM_STYLE, STYLES } from "../../helper/ServiceConstants.js";
import "./styles/productpage.css";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);

    // 通知Wrapper header的配置
    if (this.props.setHeaderConfiguration) {
      this.props.setHeaderConfiguration({
        title: "业务描述",
        explain: "请仔细阅读拍摄服务具体说明",
      });
    }

    // 通知Wrapper footer的配置
    if (this.props.setFooterConfiguration) {
      this.props.setFooterConfiguration({
        items: [
          {
            title: "重新拍摄类型",
            onItemClicked: this.handleReselectProduct.bind(this),
          },
          {
            title: "下一步",
            onItemClicked: this.handleNextStep.bind(this),
          },
        ]
      });
    }
  }

  componentWillMount() {
    // Service变更不会影响scroll位置，所以默认指向最开始
    window.scrollTo(0, 0);
  }

  /* 退回到产品选择 */
  handleReselectProduct() {
    routeGoBackWithDelay(this.props.history);
  }

  handleNextStep() {
    routeTraverseWithDelay(this.props.history, PAGE_SCHEDULE_DATE);
  }

  render() {
    const storeInfo = this.props.storeInfo || {};
    const product = this.props.product || {};

    return (
      <div className="service-detail-page flex-container page-frame">
        <StoreEntry />
        <ProductBrief
          product={product}
          productStore={storeInfo.name}
          imgBackgroundColor="#DAE9AC"
        />
        <ProductItems
          productItems={[
            {
              template: ITEM_TEMPLATE[ITEM_STYLE.MAKE],
              explain: "1个妆面造型",
            },
            {
              template: ITEM_TEMPLATE[ITEM_STYLE.SHOT],
              explain: "1种背景颜色",
            },
            {
              template: ITEM_TEMPLATE[ITEM_STYLE.TRIM],
              explain: "1张精修底片",
            },
            {
              template: ITEM_TEMPLATE[ITEM_STYLE.OUT],
              explain: "1种尺寸输出",
            },
          ]}
          extraNotices={[
            {
              head: "服装",
              content: "建议自带服装，店内仅提供部分正装和衬衫",
            },
          ]}
          plans={[
            {
              title: "预计耗时",
              style: STYLES.TIME,
              time: "3",
              unit: "小时",
            },
            {
              title: "看样时间",
              style: STYLES.PLAIN,
              content: "当场看样",
            },
            {
              title: "取件方式",
              style: STYLES.PLAIN,
              content: "当场可取、顺丰到付",
            }
          ]}
          descriptions={[
            {
              head: "用途",
              content: "求职简历、各国签证、考试报名、居住证、其他证件等。",
            },
            {
              head: "关于拍摄身份证/护照等照片的说明",
              content: "深圳店可拍摄：广东省身份证、护照、港澳、台湾通行证、社保卡照片等(回执单￥25/份；北京店可拍摄：北京护照、港澳、台湾通行证照片等；昆明店可拍摄：云南省护照照片等。其他地区能否自带身份证/护照等照片请咨询当地公安机关。特别提醒：公安机关规定，上传回执的照片不可做修图处理。",
            }
          ]}
        />
        <ProductSample
          quotes={[
            "证件照是你的名片，",
            "它必须展现你美好的一面。",
            "贴有照片的简历会更受青睐。",
            "它被放置在你的身份证、驾照、签证、员工卡...",
            "我们提供规范的仪态标准和自然的妆容。",
          ]}
          sampleImage={require(`../../img/serviceitems/identification_sample.jpg`)}
        />
        <ProductShow />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    product: state.product,
    storeInfo: state.storeInfo,
  };
}

export default withRouter(AppWrapper(connect(mapStateToProps)(ProductPage)));