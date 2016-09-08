

/**
 * [exports description]
 * @param  {[type]} el [description]
 * @param  {[type]}    [description]
 * @return {[type]}    [description]
 */
module.exports = function(el, value) {
  if(typeof value === 'function') value = value()
  if(typeof value === 'object') {

  } else value = document.createTextNode(value)
  el.appendChild(value)
}