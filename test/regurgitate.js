/**
 * Test dependencies
 */

var regurgitate = require('..')
var tape = require('tape')

tape('should append a string', test => {
	test.plan(1)
	var el = document.createElement('div')
	regurgitate(el, 'hello')
	test.equal(el.outerHTML, '<div>hello</div>')
})


tape('should append a primitive', test => {
	test.plan(1)
	var el = document.createElement('div')
	regurgitate(el, 'hello')
	regurgitate(el, true)
	regurgitate(el, 10)
	test.equal(el.outerHTML, '<div>hellotrue10</div>')
})

tape('should append dom element', test => {
	test.plan(1)
	var el = document.createElement('div')
	var span = document.createElement('span')
	regurgitate(el, span)
	test.equal(el.outerHTML, '<div><span></span></div>')
})