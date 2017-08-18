goog.provide('rf.greeter');

goog.require('goog.dom');

rf.greeter.greet = function(id) {
  var element = goog.dom.getElement(id);
  if (element) {
    element.innerHTML = 'Hello from closure library';
    console.log('Message printed.');
  }
};
