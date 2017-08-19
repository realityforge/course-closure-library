goog.provide('rf.greeter');

goog.require('goog.dom');
goog.require('rf.greeter.greeting');

/**
 * Replace contents of element with specified id wit a greeting.
 *
 * @param {string} id the id of the dom element.
 * @return {undefined}
 * @export
 */
rf.greeter.greet = function(id) {
  var element = goog.dom.getElement(id);
  if (element) {
    element.innerHTML = rf.greeter.greeting() + ' from closure library';
    console.log('Message printed.');
  }
};

// This exports the symbol to ensure it will be present after compiler renaming
// however it has been commented out and replaced with @export jsdoc annotation
// above combined with the compiler option "--generate_exports"
//goog.exportSymbol('rf.greeter.greet', rf.greeter.greet);
