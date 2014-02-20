
var bind = require('ianstormtaylor-bind');
var dom = require('component-dom');
var Emitter = require('segmentio-emitter');
var protos = require('./protos');
var statics = require('./statics');
var type = require('component-type');

/**
 * Expose `createList`.
 */

module.exports = createList;

/**
 * Create a `List` with the given `Item` constructor.
 *
 * @param {Function} Item
 */

function createList (Item) {

  /**
   * Initialize a new `List`.
   *
   * @param {Array} models
   * @param {Object} options (optional)
   *   @property {Boolean} prepend
   */

  function List (models, options) {
    if ('object' == type(models)) options = models, models = null;
    models = models || [];
    this.options = options || {};
    this.el = document.createElement('ul');
    this.items = {};
    this.list = dom([]);
    this.List.emit('construct', this);
    bind.all(this);
    this.Item = Item;

    for (var i = 0, model; model = models[i]; i++) this.add(model);
  }

  // statics & protos
  List.prototype.List = List;
  for (var key in statics) List[key] = statics[key];
  for (var key in protos) List.prototype[key] = protos[key];

  return List;
}