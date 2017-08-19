goog.provide('rf.weather.view.WeatherView');

goog.require('goog.ui.Component');
goog.require('goog.dom');

/**
 * @constructor
 * @extends {goog.ui.Component}
 * @returns {rf.weather.view.WeatherView}
 */
rf.weather.view.WeatherView = function() {
  goog.base(this);

  /** @private {null|Element} */
  this.locationElement_ = null;
  /** @private {null|Element} */
  this.descriptionElement_ = null;
  /** @private {null|Element} */
  this.temperatureElement_ = null;
};

goog.inherits(rf.weather.view.WeatherView, goog.ui.Component);

/** @inheritDoc */
rf.weather.view.WeatherView.prototype.render = function() {
  this.locationElement_ = goog.dom.createDom('div', { 'class': 'location' });
  this.descriptionElement_ = goog.dom.createDom('div', { 'class': 'description' });
  this.temperatureElement_ = goog.dom.createDom('div', { 'class': 'temperature' });

  var element =
    goog.dom.createDom('div',
      { 'class': 'weather' },
      this.locationElement_,
      this.descriptionElement_,
      this.temperatureElement_);
  this.setElementInternal(element);
};

/**
 * @param {string} location
 * @returns {rf.weather.view.WeatherView}
 */
rf.weather.view.WeatherView.prototype.setLocation = function(location) {
  if (this.locationElement_) {
    this.locationElement_.innerHTML = location;
  }
};

/**
 * @param {string} description
 * @returns {rf.weather.view.WeatherView}
 */
rf.weather.view.WeatherView.prototype.setDescription = function(description) {
  if (this.descriptionElement_) {
    this.descriptionElement_.innerHTML = description;
  }
};

/**
 * @param {number} temperature
 * @returns {rf.weather.view.WeatherView}
 */
rf.weather.view.WeatherView.prototype.setTemperature = function(temperature) {
  if (this.temperatureElement_) {
    this.temperatureElement_.innerHTML = temperature;
  }
};