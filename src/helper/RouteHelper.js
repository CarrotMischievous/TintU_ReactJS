export const routeTraverseWithDelay = (history, destRoute) => {
  return setTimeout(() => {
    history.push(destRoute);
  }, 200);
}

export const routeTraverse = (history, destRoute) => {
  return history.push(destRoute);
}

export const routeGoBackWithDelay = (history) => {
  return setTimeout(() => {
    history.goBack();
  }, 200);
}