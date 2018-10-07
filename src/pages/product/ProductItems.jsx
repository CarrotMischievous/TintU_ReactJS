import React from "react";
import PropTypes from "prop-types";
import { Icon } from 'antd-mobile';
import { STYLES } from "../../helper/ServiceConstants.js";
import "./styles/productitems.css";

const mainPreCls = "ser-detail";
const preCls = "ser-de-items";

class ProductItems extends React.Component {
  render() {
    const productItems = this.props.productItems || [];
    const extraNotices = this.props.extraNotices || [];
    const plans = this.props.plans || [];
    const descriptions = this.props.descriptions || [];

    return (
      <div className={`${preCls}`}>
        <div className={`${preCls}-equipment`}>
          <span className={`${preCls}-title`}>包含项目</span>
          <div className={`${preCls}-wrapper`}>
            {
              productItems.map((item) => {
                return (
                  <div className={`${preCls}-item`} key={item.template.index}>
                    <div className={`${preCls}-item-img-frame`} style={{backgroundColor: item.template.color}}>
                    </div>
                    <span>{item.template.title}</span>
                    <span>{item.explain}</span>
                  </div>
                );
              })
            }
          </div>
          {
            extraNotices.map((notice, index) => {
              return (
                <p key={index} className={`${preCls}-extra`}><span>{`${notice.head}: `}</span>{notice.content}</p>
              );
            })
          }
        </div>
        <div className={`${preCls}-apply`}>
          {
            plans.map((plan, index) => {
              return (
                <div key={index} className={`${preCls}-apply-plan`}>
                  <span>{plan.title}</span>
                  <div className={`${mainPreCls}-icon-frame items`}>
                    {(STYLES.PLAIN === plan.style) ? <Icon type="check-circle" size="xxs" /> : ""}
                    {
                      (STYLES.TIME === plan.style)
                        ? (<p>约<span>{plan.time}</span>{plan.unit}</p>)
                        : (<span>{plan.content}</span>)
                    }
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className={`${preCls}-descriptions`}>
          {
            descriptions.map((description, index) => {
              return (
                <div key={index} className={`${preCls}-description`}>
                  <span>{description.head}</span>
                  <p>{description.content}</p>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

ProductItems.propTypes = {
  productItems: PropTypes.array,
  extraNotices: PropTypes.array,
  plans: PropTypes.array,
  descriptions: PropTypes.array,
}

export default ProductItems;