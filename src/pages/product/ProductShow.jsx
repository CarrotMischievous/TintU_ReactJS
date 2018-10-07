import React from "react";
import "./styles/productshow.css";

const preCls = "ser-de-show";

class ProductShow extends React.Component {
  render() {
    return (
      <div className={`${preCls}`}>
        <span>服务展示</span>
      </div>
    );
  }
}

export default ProductShow;