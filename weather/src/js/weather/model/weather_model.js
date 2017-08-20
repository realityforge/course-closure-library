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

  /** @private {null|string} */
  this.location_ = null;
  /** @private {null|string} */
  this.description_ = null;
  /** @private {null|number} */
  this.temperature_ = null;
};

goog.inherits(rf.weather.model.WeatherModel, goog.events.EventTarget);

/**
 * @param {!Object} data
 */
rf.weather.model.WeatherModel.prototype.update = function(data) {
  let location = data['location'];
  if (location) {
    this.location_ = location;
  }
  let description = data['description'];
  if (description) {
    this.description_ = description;
  }
  let temperature = data['temperature'];
  if (temperature) {
    this.temperature_ = temperature;
  }

  this.dispatchEvent(rf.weather.model.WeatherModel.EventType.UPDATE);
};

/**
 * @returns {null|string}
 */
rf.weather.model.WeatherModel.prototype.getLocation = function() {
  return this.location_;
};

/**
 * @returns {null|string}
 */
rf.weather.model.WeatherModel.prototype.getDescription = function() {
  return this.description_;
};

/**
 * @param {string=} unit
 * @returns {null|number}
 */
rf.weather.model.WeatherModel.prototype.getTemperature = function(unit) {
  var /** @type {null|number} */ temperature = this.temperature_;
  if (temperature) {
    temperature =
      (unit === rf.weather.model.WeatherModel.Unit.C) ?
      Number.parseInt(((temperature - 32) * 5 / 9).toFixed(0), 10) :
      temperature;
  }
  return temperature;
};

/**
 * @enum {string}
 */
rf.weather.model.WeatherModel.EventType = {
  UPDATE: 'model.update'
};

/**
 * @enum {string}
 */
rf.weather.model.WeatherModel.Unit = {
  F: 'F',
  C: 'C'
};
