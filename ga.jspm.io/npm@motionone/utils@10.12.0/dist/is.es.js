const isNumber = (value) => typeof value === "number";
const isString = (value) => typeof value === "string";
const isEasingGenerator = (easing) =>
  typeof easing === "object" && Boolean(easing.createAnimation);
const isCubicBezier = (easing) => Array.isArray(easing) && isNumber(easing[0]);
const isEasingList = (easing) => Array.isArray(easing) && !isNumber(easing[0]);

export { isCubicBezier, isEasingGenerator, isEasingList, isNumber, isString };
