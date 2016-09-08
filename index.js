

/**
 * [exports description]
 * @param  {[type]} el [description]
 * @param  {[type]}    [description]
 * @return {[type]}    [description]
 */
module.exports = function(el, value) {
  el.appendChild(document.createTextNode(value))
}