goog.provide('rf.weather.presenter.WeatherPresenter');

goog.require('goog.events');
goog.require('rf.weather.model.WeatherModel');
goog.require('rf.weather.view.WeatherView');

/**
 * @constructor
 * @param {rf.weather.model.WeatherModel} model
 * @param {rf.weather.view.WeatherView} view
 * @returns {rf.weather.presenter.WeatherPresenter}
 */
rf.weather.presenter.WeatherPresenter = function(model, view) {
  /** @private {rf.weather.model.WeatherModel} */
  this.model_ = model;
  /** @private {rf.weather.view.WeatherView} */
  this.view_ = view;

  goog.events.listen(this.model_, rf.weather.model.WeatherModel.EventType.UPDATE, this.onModelUpdate_, false, this);

  this.model_.update({ 'location': 'Melbourne', 'description': 'Cold', 'temperature': 6 });
};

/**
 * @private
 */
rf.weather.presenter.WeatherPresenter.prototype.onModelUpdate_ = function() {
  this.view_.setLocation(this.model_.getLocation());
  this.view_.setDescription(this.model_.getDescription());
  this.view_.setTemperature(this.model_.getTemperature());
};
