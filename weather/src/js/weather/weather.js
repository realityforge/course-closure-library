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
    var model = new rf.weather.model.WeatherModel();
    var view = new rf.weather.view.WeatherView();
    // Initial render
    view.render(element);

    new rf.weather.presenter.WeatherPresenter(model, view);
  }
};
