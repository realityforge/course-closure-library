goog.provide('rf.passgen.model.PassgenModel');

/**
 * @constructor
 * @return {rf.passgen.model.PassgenModel}
 */
rf.passgen.model.PassgenModel = function() {};

/**
 * @public
 * @param {Number} length
 * @return {String}
 */
rf.passgen.model.PassgenModel.prototype.randomString = function(length) {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var result = '';
  for (var i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * (chars.length - 1))];
  }
  return result;
};

