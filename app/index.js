"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _leanes = _interopRequireDefault(require("@leansdk/leanes"));

var _leanesFsUtilsAddon = _interopRequireDefault(require("@leansdk/leanes-fs-utils-addon"));

var _leanesConfigurableAddon = _interopRequireDefault(require("@leansdk/leanes-configurable-addon"));

var _leanesMapperAddon = _interopRequireWildcard(require("@leansdk/leanes-mapper-addon"));

var _leanesMongoAddon = _interopRequireDefault(require("@leansdk/leanes-mongo-addon"));

var _leanesQueryableAddon = _interopRequireDefault(require("@leansdk/leanes-queryable-addon"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _init, _init2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3, _temp;

const {
  initialize,
  meta,
  nameBy,
  resolver,
  constant,
  plugin,
  loadFiles
} = _leanes.default.NS;
let DaemonApp = (_dec = plugin(_leanesQueryableAddon.default), _dec2 = plugin(_leanesMongoAddon.default), _dec3 = plugin(_leanesMapperAddon.MigratableModule), _dec4 = plugin(_leanesMapperAddon.default), _dec5 = plugin(_leanesConfigurableAddon.default), _dec6 = plugin(_leanesFsUtilsAddon.default), _dec7 = resolver(require, name => require(name)), initialize(_class = loadFiles(_class = (0, _leanesMapperAddon.loadMigrations)(_class = _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = (_class2 = (_temp = _class3 = class DaemonApp extends _leanes.default {
  constructor(...args) {
    super(...args);
    (0, _initializerDefineProperty2.default)(this, "ROOT", _descriptor, this);
    (0, _initializerDefineProperty2.default)(this, "MAKE_REQUEST", _descriptor2, this);
    (0, _initializerDefineProperty2.default)(this, "MIGRATIONS_ADAPTER", _descriptor3, this);
    (0, _initializerDefineProperty2.default)(this, "REQUEST_RESULTS_ADAPTER", _descriptor4, this);
    (0, _initializerDefineProperty2.default)(this, "REQUEST_RESULTS", _descriptor5, this);
    (0, _initializerDefineProperty2.default)(this, "SIGNALS_GENERATOR", _descriptor6, this);
  }

}, _class3.__filename = 'DaemonApp', _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function () {
    return _init;
  }
}), _class2), (0, _applyDecoratedDescriptor2.default)(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function () {
    return _init2;
  }
}), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "ROOT", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return __dirname;
  }
}), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "MAKE_REQUEST", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'MAKE_REQUEST';
  }
}), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "MIGRATIONS_ADAPTER", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'MigrationsAdapter';
  }
}), _descriptor4 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "REQUEST_RESULTS_ADAPTER", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'RequestResultsAdapter';
  }
}), _descriptor5 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "REQUEST_RESULTS", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'RequestResultsCollection';
  }
}), _descriptor6 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "SIGNALS_GENERATOR", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'SignalsGenerator';
  }
})), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = DaemonApp;
exports.default = _default;