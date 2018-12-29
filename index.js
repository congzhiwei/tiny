module.exports = function tiny(string) {
  if (typeof string !== "string") throw new TypeError("Tiny wants a string2!");
  return string.replace(/\s/g, "");
};
