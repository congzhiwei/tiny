module.exports = function tiny(string) {
  if (typeof string !== "string") throw new TypeError("Tiny wants a string1!");
  return string.replace(/\s/g, "");
};
