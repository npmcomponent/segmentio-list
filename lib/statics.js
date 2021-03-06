
var Emitter = require('segmentio-emitter');


/**
 * Mixin emitter.
 */

Emitter(exports);


/**
 * Use a given `plugin`.
 *
 * @param {Function} plugin
 */

exports.use = function (plugin) {
  plugin(this);
  return this;
};