goog.provide('rf.weather');

goog.require('rf.weather.model.WeatherModel');
goog.require('rf.weather.view.WeatherView');
goog.require('rf.weather.presenter.WeatherPresenter');

/**
 * Replace the element specified by selector with the weather application.
 *
 * @param {string} selector the selector of the dom element.
 * @return {undefined}
 * @export
 */
rf.weather.init = function(selector) {
  var element = document.querySelector(selector);
  if (element) {
    // Setup application here
  }
};
