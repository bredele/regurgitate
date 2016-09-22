

/**
 * Transform any kind of value into a node
 * that can be inserted into the passed element.
 *
 * @param  {Element} el
 * @param  {Any}
 * @api public
 */

module.exports = function(el, value) {
  return el.appendChild(transform(value))
}


/**
 * Transform value.
 *
 * @param  {Any|Function|Promise} value
 * @return {Element}
 * @api private
 */

function transform(value) {
	if(typeof value === 'function') value = value()
  if(value instanceof Array) {
    var el = document.createDocumentFragment()
    value.map(item => el.appendChild(transform(item)))
    value = el
  } else if(typeof value === 'object') {
		if(typeof value.then === 'function') {
			var tmp = document.createTextNode('')
			value.then(function(data) {
				tmp.parentElement.replaceChild(transform(data), tmp)
			})
			value = tmp
		} else if(typeof value.on === 'function') {
			var tmp = document.createTextNode('')
			value.on('data', function(data) {
				// need to transform? Streams are only text?
				tmp.parentElement.insertBefore(document.createTextNode(data), tmp)
			})
			value = tmp
		}
	} else value = document.createTextNode(value)
	return value
}
