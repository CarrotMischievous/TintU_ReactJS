// plan计划里面的显示格式
export const STYLES = {
  TIME:  "TIME",
  PLAIN: "PLAIN",
};

// 具体项目的配置格式
export const ITEM_STYLE = {
  MAKE: 0,
  SHOT: 1,
  TRIM: 2,
  OUT:  3,
}

// Item的可选组合
export const ITEM_TEMPLATE = [
  {
    index: ITEM_STYLE.MAKE,
    title: "化妆",
    color: "#F2CCD1",
  },
  {
    index: ITEM_STYLE.SHOT,
    title: "拍摄",
    color: "#F3DF97",
  },
  {
    index: ITEM_STYLE.TRIM,
    title: "修图",
    color: "#AADCEC",
  },
  {
    index: ITEM_STYLE.OUT,
    title: "输出",
    color: "#ACE5D9",
  },
];