goog.provide('rf.weather.service.StorageService');

goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.mechanismfactory');

/**
 * @constructor
 * @returns {rf.weather.service.StorageService}
 */
rf.weather.service.StorageService = function() {
  /** @private {null|goog.storage.Storage} */
  this.storage_ = null;

  var mechanism = goog.storage.mechanism.mechanismfactory.create('rf.weather');
  if (mechanism) {
    this.storage_ = new goog.storage.Storage(mechanism);
  }
};

/**
 * @param {string|null} value
 */
rf.weather.service.StorageService.prototype.setLocation = function(value) {
  if (this.storage_) {
    this.storage_.set('location', value);
  }
};

/**
 * @returns {string|null}
 */
rf.weather.service.StorageService.prototype.getLocation = function() {
  if (this.storage_) {
    return /** @type {string|null} */ (this.storage_.get('location'));
  } else {
    return null;
  }
};
