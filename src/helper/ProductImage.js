export const srcProductImage = (product) => {
  let imageSrc;

  try {
    imageSrc = require(`../img/serviceitems/${product}.png`);
  } catch(err) {
    return {};
  }

  return imageSrc;
}