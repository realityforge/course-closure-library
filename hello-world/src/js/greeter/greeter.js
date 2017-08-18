goog.provide('rf.greeter');

goog.require('goog.dom');

/**
 * Replace contents of element with specified id wit a greeting.
 *
 * @param {String} id the id of the dom element.
 * @return {undefined}
 */
rf.greeter.greet = function(id) {
  var element = goog.dom.getElement(id);
  if (element) {
    element.innerHTML = 'Hello from closure library';
    console.log('Message printed.');
  }
};
