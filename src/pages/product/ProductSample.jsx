import React from "react";
import PropTypes from "prop-types";
import "./styles/productsample.css";

const preCls = "ser-de-sample";

class ProductSample extends React.Component {
  render() {
    const quotes = this.props.quotes || [];

    return (
      <div className={`${preCls}`}>
        <div className={`${preCls}-quote`}>
          {
            quotes.map((quote, index) => {
              return (<span key={index}>{quote}</span>);
            })
          }
        </div>
        <div className={`${preCls}-case`}>
          <span>拍摄案例</span>
          <img src={this.props.sampleImage} alt="sample"></img>
          <span>图片来自天真蓝，测试使用</span>
        </div>
      </div>
    );
  }
}

ProductSample.propTypes = {
  quotes: PropTypes.array,
  sampleImage: PropTypes.string,
}

export default ProductSample;