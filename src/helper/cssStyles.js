// 根据百分比获取对应的width Style
export function helpGetWidthByPer(percentage) {
  return {
    width: percentage,
  };
}

// 整合多个对象成一个style
export function helpGeneraStyle(...styles) {
  let generaStyle = {};
  const length = styles.length;

  for(let index = 0; index < length; index++) {
    generaStyle = {
      ...generaStyle,
      ...styles[index],
    }
  }

  return generaStyle;
}