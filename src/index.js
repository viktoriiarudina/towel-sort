
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return typeof matrix !== 'undefined' ? matrix.map((el, i) => i % 2 !== 0 ?  el.reverse() : el).flat() : [];
}
