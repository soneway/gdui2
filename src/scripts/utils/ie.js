/**
 * 判断是否为IE某个版本
 * @param ver IE版本
 * @returns {boolean}
 */
function isIE (ver) {
  var b = document.createElement('b');
  b.innerHTML = `<!--[if IE ${ver}]><i></i><![endif]-->`;
  return b.getElementsByTagName('i').length === 1;
}

// IE9特殊处理
if (isIE(9)) {
  const bodyEl = document.body;
  bodyEl.className += ' IE9';
}

export {
  isIE,
};
