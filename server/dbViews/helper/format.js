function formatParams(paramList) {
  const props = paramList.map((param) => {
      return `${param} = ?`;
    });
  return props.join(",");
}

module.exports = {
  formatParams,
}