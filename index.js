

/**
 * [exports description]
 * @param  {[type]} el [description]
 * @param  {[type]}    [description]
 * @return {[type]}    [description]
 */
module.exports = function(el, value) {
  if(typeof value === 'function') value = value()
  if(typeof value === 'object') {
  	if(typeof value.then === 'function') {
  		var tmp = document.createTextNode('')
  		value.then(function(data) {
  			tmp.nodeValue = data
  		})
  		value = tmp
  	}
  } else value = document.createTextNode(value)
  el.appendChild(value)
}
