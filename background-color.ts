const camelize = (str) => {
  return str
    .split("-")
    .map((el, index) => (index == 0 ? el : el[0].toUpperCase() + el.slice(1)))
    .join("");
};
console.log(camelize("background-color"));
// == 'backgroundColor';
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
