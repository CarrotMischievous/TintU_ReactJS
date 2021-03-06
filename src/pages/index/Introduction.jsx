import React from "react";
import "./styles/introduction.css";

const introTitle = "预约项目说明";
const introEntries = [
  "预约成功后订单不可更改，如需取消将产生定金损失，退款规则如下：<br/>距拍摄时间24小时以上取消订单，可退全额定金<br/>距拍摄时间不足24小时取消订单，可退50%定金",
  "如未按预定时间到店，订单则视为放弃，定金将不予退还",
  "我们会提供精修后的.jpg格式底片，不提供原始拍摄文件<br/>除开个别套餐项目，不提供拍摄原片"
];

const IntroLine = (props) => {
  return (
    <div className="intro-line">
      <span className="intro-dot" />
      <p className="intro-line-content"
         dangerouslySetInnerHTML={{__html: props.content}}></p>
    </div>
  );
}

class Introduction extends React.Component {
  static defaultProps = {
    className: ""
  };

  render() {
    return (
      <div className={`intro ${this.props.className}`}>
        <p className="intro-title">{introTitle}</p>
          {introEntries.map((entry, index) => {
            return (
              <IntroLine
                key={index}
                className="intro-line"
                content={entry}
              />
            );
          })}
      </div>
    );
  }
}

export default Introduction;
