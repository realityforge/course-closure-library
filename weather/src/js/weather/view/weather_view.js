goog.provide('rf.weather.view.WeatherView');

goog.require('goog.events.KeyHandler');
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
  /** @private {null|Element} */
  this.locationInputElement_ = null;
  /** @private {null|goog.events.KeyHandler} */
  this.keyHandler_ = null;
};

goog.inherits(rf.weather.view.WeatherView, goog.ui.Component);

/** @inheritDoc */
rf.weather.view.WeatherView.prototype.createDom = function() {
  this.locationElement_ = goog.dom.createDom('div', { 'class': 'location' });
  this.descriptionElement_ = goog.dom.createDom('div', { 'class': 'description' });
  this.temperatureElement_ = goog.dom.createDom('div', { 'class': 'temperature' });
  this.locationInputElement_ = goog.dom.createDom('input', { 'type': 'text' });
  this.keyHandler_ = new goog.events.KeyHandler(this.locationInputElement_);

  var element =
    goog.dom.createDom('div',
      { 'class': 'weather' },
      this.locationElement_,
      this.descriptionElement_,
      this.temperatureElement_);
  this.setElementInternal(element);
};

/** @inheritDoc */
rf.weather.view.WeatherView.prototype.enterDocument = function() {
  //Call super method
  goog.base(this, 'enterDocument');

  //enterDocument is called after createDom so elements exist
  goog.events.listen(this.temperatureElement_, goog.events.EventType.CLICK, this.onTemperatureClick_, false, this);
  goog.events.listen(this.locationElement_, goog.events.EventType.CLICK, this.onLocationClick_, false, this);
  goog.events.listen(this.keyHandler_, goog.events.KeyHandler.EventType.KEY, this.onLocationInput_, false, this);
  goog.events.listen(this.locationInputElement_, goog.events.EventType.BLUR, this.onLocationInputBlur, false, this);
};

/** @private */
rf.weather.view.WeatherView.prototype.onLocationInput_ = function(e) {
  if (e.keyCode === 27) {
    this.locationInputElement_.blur();
  }

  if (e.keyCode === 13) {
    var event =
      new goog.events.Event(rf.weather.view.WeatherView.EventType.UPDATE_DATA, this.locationInputElement_.value);
    this.dispatchEvent(event);
    this.locationInputElement_.blur();
  }
};

/** @private */
rf.weather.view.WeatherView.prototype.onLocationInputBlur = function() {
  this.getElement().removeChild(this.locationInputElement_);
  this.getElement().insertBefore(this.locationElement_, this.descriptionElement_);
};

/** @private */
rf.weather.view.WeatherView.prototype.onLocationClick_ = function() {
  this.locationInputElement_.value = this.locationElement_.innerHTML;

  this.getElement().removeChild(this.locationElement_);
  this.getElement().insertBefore(this.locationInputElement_, this.descriptionElement_);

  this.locationInputElement_.focus();
};

/**
 * @private
 */
rf.weather.view.WeatherView.prototype.onTemperatureClick_ = function() {
  this.dispatchEvent(rf.weather.view.WeatherView.EventType.TOGGLE_UNIT);
};

/**
 * @param {null|string} location
 * @returns {rf.weather.view.WeatherView}
 */
rf.weather.view.WeatherView.prototype.setLocation = function(location) {
  if (this.locationElement_) {
    this.locationElement_.innerHTML = location;
  }
  return this;
};

/**
 * @param {null|string} description
 * @returns {rf.weather.view.WeatherView}
 */
rf.weather.view.WeatherView.prototype.setDescription = function(description) {
  if (this.descriptionElement_) {
    this.descriptionElement_.innerHTML = description;
  }
  return this;
};

/**
 * @param {null|number} temperature
 * @returns {rf.weather.view.WeatherView}
 */
rf.weather.view.WeatherView.prototype.setTemperature = function(temperature) {
  if (this.temperatureElement_) {
    this.temperatureElement_.innerHTML = temperature;
  }
  return this;
};

/**
 * @enum {string}
 */
rf.weather.view.WeatherView.EventType = {
  TOGGLE_UNIT: 'view.toggle_unit',
  UPDATE_DATA: 'view.update_data'
};
