import React from "react";
import { Icon } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import { PAGE_SERVE } from "../../routes/userRoutes.js";
import AppWrapper from "../../components/AppWrapper/AppWrapper.jsx";
import "./styles/servicedetailpage.css";

const preCls = "ser-detail";

class ServiceDetailPage extends React.Component {
  componentWillMount() {
    const urlParams = new URLSearchParams(this.props.location.search);

    // 通知Wrapper header的配置
    if (this.props.setHeaderConfiguration) {
      this.props.setHeaderConfiguration({
        title: urlParams.get("product"),
        explain: "请仔细阅读拍摄服务说明",
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

  handleReselectProduct() {
    this.props.history.push(PAGE_SERVE);
  }

  handleNextStep() {

  }

  render() {
    return (
      <div className="service-detail-page flex-container page-frame">
        <div className={`${preCls}-brief`}>
          <div className={`${preCls}-img-frame`}>
            <div className={`${preCls}-img-wrapper`}>
              <img src={require(`../../img/serviceitems/identification.png`)} alt="identity" />
            </div>
            <span>证件照</span>
          </div>
          <span className={`${preCls}-brief-price`}>￥150</span>
          <Icon className={`${preCls}-icon`} type="check-circle" size="xxs" />
          <span className={`${preCls}-brief-store`}>南京玄武店</span>
        </div>
        <div className={`${preCls}-items`}>
          <div className={`${preCls}-items-equipment`}>
            <span className={`${preCls}-items-title`}>包含项目</span>
            <p className={`${preCls}-items-cloth`}><span style={{fontWeight: "bold"}}>服装:</span></p>
          </div>
          <div className={`${preCls}-items-apply`}>

          </div>
          <div className={`${preCls}-items-description`}>
          </div>
        </div>
        <div className={`${preCls}-template`}>
          <div className={`${preCls}-template-quote`}>
          </div>
          <div className={`${preCls}-template-case`}>
          </div>
        </div>
        <div className={`${preCls}-show`}>
        </div>
      </div>
    );
  }
}

export default withRouter(AppWrapper(ServiceDetailPage));