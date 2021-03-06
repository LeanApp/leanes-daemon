"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

// This file is part of leanes-daemon.
//
// leanes-daemon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-daemon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with leanes-daemon.  If not, see <https://www.gnu.org/licenses/>.
var _default = Module => {
  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _init, _init2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _temp;

  const {
    Record,
    TimestampsRecordMixin,
    initialize,
    partOf,
    meta,
    nameBy,
    mixin,
    attribute
  } = Module.NS;
  let RequestResultRecord = (_dec = partOf(Module), _dec2 = mixin(TimestampsRecordMixin), _dec3 = attribute({
    type: 'string'
  }), _dec4 = attribute({
    type: 'json'
  }), _dec5 = attribute({
    type: 'number'
  }), _dec6 = attribute({
    type: 'string'
  }), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class RequestResultRecord extends Record {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "body", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "headers", _descriptor2, this);
      (0, _initializerDefineProperty2.default)(this, "status", _descriptor3, this);
      (0, _initializerDefineProperty2.default)(this, "message", _descriptor4, this);
    }

  }, _class3.__filename = __filename, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
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
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "body", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "headers", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "status", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "message", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class2)) || _class) || _class) || _class);
};

exports.default = _default;