"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _index = _interopRequireDefault(require("@leansdk/leanes/lib/index.dev"));

var _index2 = _interopRequireDefault(require("@leansdk/leanes-fs-utils-addon/lib/index.dev"));

var _index3 = _interopRequireDefault(require("@leansdk/leanes-configurable-addon/lib/index.dev"));

var _index4 = _interopRequireWildcard(require("@leansdk/leanes-mapper-addon/lib/index.dev"));

var _index5 = _interopRequireDefault(require("@leansdk/leanes-mongo-addon/lib/index.dev"));

var _index6 = _interopRequireDefault(require("@leansdk/leanes-queryable-addon/lib/index.dev"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _init, _init2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3, _temp;

const {
  initialize,
  meta,
  nameBy,
  resolver,
  constant,
  plugin,
  loadFiles
} = _index.default.NS;
let DaemonApp = (_dec = plugin(_index6.default), _dec2 = plugin(_index5.default), _dec3 = plugin(_index4.MigratableModule), _dec4 = plugin(_index4.default), _dec5 = plugin(_index3.default), _dec6 = plugin(_index2.default), _dec7 = resolver(require, name => require(name)), initialize(_class = loadFiles(_class = (0, _index4.loadMigrations)(_class = _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = (_class2 = (_temp = _class3 = class DaemonApp extends _index.default {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImluaXRpYWxpemUiLCJtZXRhIiwibmFtZUJ5IiwicmVzb2x2ZXIiLCJjb25zdGFudCIsInBsdWdpbiIsImxvYWRGaWxlcyIsIkxlYW5FUyIsIk5TIiwiRGFlbW9uQXBwIiwiUXVlcnlhYmxlQWRkb24iLCJNb25nb0FkZG9uIiwiTWlncmF0YWJsZU1vZHVsZSIsIk1hcHBlckFkZG9uIiwiQ29uZmlndXJhYmxlQWRkb24iLCJGc1V0aWxzQWRkb24iLCJyZXF1aXJlIiwibmFtZSIsImxvYWRNaWdyYXRpb25zIiwiX19maWxlbmFtZSIsIm9iamVjdCIsIl9fZGlybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBQ0E7Ozs7QUFFQSxNQUFNO0FBQUVBLEVBQUFBLFVBQUY7QUFBY0MsRUFBQUEsSUFBZDtBQUFvQkMsRUFBQUEsTUFBcEI7QUFBNEJDLEVBQUFBLFFBQTVCO0FBQXNDQyxFQUFBQSxRQUF0QztBQUFnREMsRUFBQUEsTUFBaEQ7QUFBd0RDLEVBQUFBO0FBQXhELElBQXNFQyxlQUFPQyxFQUFuRjtJQVlNQyxTLFdBUExKLE1BQU0sQ0FBQ0ssZUFBRCxDLFVBQ05MLE1BQU0sQ0FBQ00sZUFBRCxDLFVBQ05OLE1BQU0sQ0FBQ08sd0JBQUQsQyxVQUNOUCxNQUFNLENBQUNRLGVBQUQsQyxVQUNOUixNQUFNLENBQUNTLGVBQUQsQyxVQUNOVCxNQUFNLENBQUNVLGVBQUQsQyxVQUNOWixRQUFRLENBQUNhLE9BQUQsRUFBVUMsSUFBSSxJQUFJRCxPQUFPLENBQUNDLElBQUQsQ0FBekIsQyxFQVRSakIsVSxVQUNBTSxTLGNBQ0FZLHNCLGlKQUZELE1BVU1ULFNBVk4sU0FVd0JGLGNBVnhCLENBVStCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLEMsVUFDYlksVSxHQUFhLFcsVUFDaEJDLE0sR0FBUyxFLDJFQURyQmxCLE07Ozs7Ozs7MEVBQ0FELEk7Ozs7Ozs7Z0dBQ0FHLFE7Ozs7O1dBQWdCaUIsUzs7K0ZBQ2hCakIsUTs7Ozs7V0FBd0IsYzs7cUdBQ3hCQSxROzs7OztXQUE4QixtQjs7MEdBQzlCQSxROzs7OztXQUFtQyx1Qjs7a0dBQ25DQSxROzs7OztXQUEyQiwwQjs7b0dBQzNCQSxROzs7OztXQUE2QixrQjs7O2VBR2pCSyxTIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLWRhZW1vbi5cbi8vXG4vLyBsZWFuZXMtZGFlbW9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLWRhZW1vbiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtZGFlbW9uLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuaW1wb3J0IExlYW5FUyBmcm9tICdAbGVhbnNkay9sZWFuZXMvbGliL2luZGV4LmRldic7XG5pbXBvcnQgRnNVdGlsc0FkZG9uIGZyb20gJ0BsZWFuc2RrL2xlYW5lcy1mcy11dGlscy1hZGRvbi9saWIvaW5kZXguZGV2JztcbmltcG9ydCBDb25maWd1cmFibGVBZGRvbiBmcm9tICdAbGVhbnNkay9sZWFuZXMtY29uZmlndXJhYmxlLWFkZG9uL2xpYi9pbmRleC5kZXYnO1xuaW1wb3J0IHtcbiAgZGVmYXVsdCBhcyBNYXBwZXJBZGRvbiwgTWlncmF0YWJsZU1vZHVsZSwgbG9hZE1pZ3JhdGlvbnNcbn0gZnJvbSAnQGxlYW5zZGsvbGVhbmVzLW1hcHBlci1hZGRvbi9saWIvaW5kZXguZGV2JztcbmltcG9ydCBNb25nb0FkZG9uIGZyb20gJ0BsZWFuc2RrL2xlYW5lcy1tb25nby1hZGRvbi9saWIvaW5kZXguZGV2JztcbmltcG9ydCBRdWVyeWFibGVBZGRvbiBmcm9tICdAbGVhbnNkay9sZWFuZXMtcXVlcnlhYmxlLWFkZG9uL2xpYi9pbmRleC5kZXYnO1xuXG5jb25zdCB7IGluaXRpYWxpemUsIG1ldGEsIG5hbWVCeSwgcmVzb2x2ZXIsIGNvbnN0YW50LCBwbHVnaW4sIGxvYWRGaWxlcyB9ID0gTGVhbkVTLk5TO1xuXG5AaW5pdGlhbGl6ZVxuQGxvYWRGaWxlc1xuQGxvYWRNaWdyYXRpb25zXG5AcGx1Z2luKFF1ZXJ5YWJsZUFkZG9uKVxuQHBsdWdpbihNb25nb0FkZG9uKVxuQHBsdWdpbihNaWdyYXRhYmxlTW9kdWxlKVxuQHBsdWdpbihNYXBwZXJBZGRvbilcbkBwbHVnaW4oQ29uZmlndXJhYmxlQWRkb24pXG5AcGx1Z2luKEZzVXRpbHNBZGRvbilcbkByZXNvbHZlcihyZXF1aXJlLCBuYW1lID0+IHJlcXVpcmUobmFtZSkpXG5jbGFzcyBEYWVtb25BcHAgZXh0ZW5kcyBMZWFuRVMge1xuICBAbmFtZUJ5IHN0YXRpYyAgX19maWxlbmFtZSA9ICdEYWVtb25BcHAnO1xuICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG4gIEBjb25zdGFudCBST09UID0gX19kaXJuYW1lO1xuICBAY29uc3RhbnQgTUFLRV9SRVFVRVNUID0gJ01BS0VfUkVRVUVTVCc7XG4gIEBjb25zdGFudCBNSUdSQVRJT05TX0FEQVBURVIgPSAnTWlncmF0aW9uc0FkYXB0ZXInO1xuICBAY29uc3RhbnQgUkVRVUVTVF9SRVNVTFRTX0FEQVBURVIgPSAnUmVxdWVzdFJlc3VsdHNBZGFwdGVyJztcbiAgQGNvbnN0YW50IFJFUVVFU1RfUkVTVUxUUyA9ICdSZXF1ZXN0UmVzdWx0c0NvbGxlY3Rpb24nO1xuICBAY29uc3RhbnQgU0lHTkFMU19HRU5FUkFUT1IgPSAnU2lnbmFsc0dlbmVyYXRvcic7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhZW1vbkFwcDtcbiJdfQ==