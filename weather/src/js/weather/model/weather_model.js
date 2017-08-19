goog.provide('rf.weather.model.WeatherModel');

goog.require('goog.dom');
goog.require('goog.events.EventTarget');

/**
 * @constructor
 * @extends {goog.events.EventTarget}
 * @returns {rf.weather.model.WeatherModel}
 */
rf.weather.model.WeatherModel = function() {
  // Chain to parent constructor
  goog.base(this);

  /** @private {string} */
  this.location_ = null;
  /** @private {string} */
  this.description_ = null;
  /** @private {Number} */
  this.temperature_ = null;
};

goog.inherits(rf.weather.model.WeatherModel, goog.events.EventTarget);

/**
 * @param {!Object} data
 */
rf.weather.model.WeatherModel.prototype.update = function(data) {
  if (data['location']) {
    this.location_ = data['location'];
  }
  if (data['description']) {
    this.description_ = data['description'];
  }
  if (data['temperature']) {
    this.temperature_ = data['temperature'];
  }

  this.dispatchEvent(rf.weather.model.WeatherModel.EventType.UPDATE);
};

/**
 * @returns {string}
 */
rf.weather.model.WeatherModel.prototype.getLocation = function() {
  return this.location_;
};

/**
 * @returns {string}
 */
rf.weather.model.WeatherModel.prototype.getDescription = function() {
  return this.description_;
};

/**
 * @returns {number}
 */
rf.weather.model.WeatherModel.prototype.getTemperature = function() {
  return this.temperature_;
};

/**
 * @enum {string}
 */
rf.weather.model.WeatherModel.EventType = {
  UPDATE: 'model.update'
};