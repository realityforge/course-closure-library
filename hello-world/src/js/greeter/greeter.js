goog.require('goog.dom');

function greet(id) {
  var element = goog.dom.getElement(id);
  if (element) {
    element.innerHTML = 'Hello from closure library';
    console.log('Message printed.');
  }
}
