goog.provide('rf.passgen');

goog.require('rf.passgen.view.PassgenView');

/**
 * Initialize passgen application with element identified by selector.
 *
 * @param {String} selector the selector of the dom element where application is initialized.
 * @return {undefined}
 */
rf.passgen.init = function(selector) {
  var element = document.querySelector(selector);
  if (element) {
    var view = new rf.passgen.view.PassgenView();

    //"Decoration" is the way that closure library updates existing dom structure
    view.decorate(element);
  }
};
