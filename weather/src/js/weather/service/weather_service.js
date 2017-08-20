goog.provide('rf.weather.service.WeatherService');

goog.require('goog.net.XhrIo');
goog.require('goog.events');
goog.require('goog.Uri');

/**
 * @constructor
 * @param {!string} apiKey
 * @returns {rf.weather.service.WeatherService}
 */
rf.weather.service.WeatherService = function(apiKey) {
  /** @private {string} */
  this.url_ = 'http://api.openweathermap.org/data/2.5/weather';
  /** @private {string} */
  this.apiKey_ = apiKey;
  /** @private {rf.weather.model.WeatherModel} */
  this.model_ = null;
  /** @private {goog.net.XhrIo} */
  this.xhr_ = new goog.net.XhrIo();

  goog.events.listen(this.xhr_, goog.net.EventType.SUCCESS, this.onSuccessResponse_, false, this);
  goog.events.listen(this.xhr_, goog.net.EventType.ERROR, this.onErrorResponse_, false, this);
};

/**
 * @param {string} location
 * @param {rf.weather.model.WeatherModel} model
 * @returns {undefined}
 */
rf.weather.service.WeatherService.prototype.updateWeather = function(location, model) {
  this.model_ = model;

  var uri = new goog.Uri(this.url_);
  uri.getQueryData().add('appid', this.apiKey_).add('units', 'imperial').add('q', location);

  this.xhr_.abort();
  this.xhr_.send(uri);
};

/**
 * @param {goog.events.Event} event
 * @private
 */
rf.weather.service.WeatherService.prototype.onSuccessResponse_ = function(event) {
  var response = event.target.getResponseJson();

  var data = {};
  switch (response['cod']) {
    case '404':
      data = {
        'location': 'Error',
        'description': 'Location Not Found',
        'temperature': null
      };
      break;
    case 200:
      data = {
        'location': response['name'] + ', ' + response['sys']['country'],
        'description': response['weather'][0]['description'],
        'temperature': response['main']['temp']
      };
      break;
  }

  if (this.model_) {
    this.model_.update(data);
  }
};

/** @private */
rf.weather.service.WeatherService.prototype.onErrorResponse_ = function(event) {
  var error = event.target.getLastError();

  var data = {
    'location': 'Weather Service Error',
    'description': error,
    'temperature': null
  };

  if (this.model_) {
    this.model_.update(data);
  }
};
