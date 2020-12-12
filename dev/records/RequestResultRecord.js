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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZHMvUmVxdWVzdFJlc3VsdFJlY29yZC5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJSZWNvcmQiLCJUaW1lc3RhbXBzUmVjb3JkTWl4aW4iLCJpbml0aWFsaXplIiwicGFydE9mIiwibWV0YSIsIm5hbWVCeSIsIm1peGluIiwiYXR0cmlidXRlIiwiTlMiLCJSZXF1ZXN0UmVzdWx0UmVjb3JkIiwidHlwZSIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBRWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxNQURJO0FBRUpDLElBQUFBLHFCQUZJO0FBR0pDLElBQUFBLFVBSEk7QUFHUUMsSUFBQUEsTUFIUjtBQUdnQkMsSUFBQUEsSUFIaEI7QUFHc0JDLElBQUFBLE1BSHRCO0FBRzhCQyxJQUFBQSxLQUg5QjtBQUdxQ0MsSUFBQUE7QUFIckMsTUFJRlIsTUFBTSxDQUFDUyxFQUpYO0FBRHlCLE1BVW5CQyxtQkFWbUIsV0FReEJOLE1BQU0sQ0FBQ0osTUFBRCxDQVJrQixVQVN4Qk8sS0FBSyxDQUFDTCxxQkFBRCxDQVRtQixVQWN0Qk0sU0FBUyxDQUFDO0FBQUVHLElBQUFBLElBQUksRUFBRTtBQUFSLEdBQUQsQ0FkYSxVQWV0QkgsU0FBUyxDQUFDO0FBQUVHLElBQUFBLElBQUksRUFBRTtBQUFSLEdBQUQsQ0FmYSxVQWdCdEJILFNBQVMsQ0FBQztBQUFFRyxJQUFBQSxJQUFJLEVBQUU7QUFBUixHQUFELENBaEJhLFVBaUJ0QkgsU0FBUyxDQUFDO0FBQUVHLElBQUFBLElBQUksRUFBRTtBQUFSLEdBQUQsQ0FqQmEsRUFPeEJSLFVBUHdCLHFFQU96QixNQUdNTyxtQkFITixTQUdrQ1QsTUFIbEMsQ0FHeUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxHQVZoQixVQVdQVyxVQVhPLEdBV01BLFVBWE4sVUFZVkMsTUFaVSxHQVlELEVBWkMsMkVBV3RCUCxNQVhzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQVl0QkQsSUFac0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtQjFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtZGFlbW9uLlxuLy9cbi8vIGxlYW5lcy1kYWVtb24gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuLy8gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyBsZWFuZXMtZGFlbW9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4vLyBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuLy8gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuLy8gR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4vL1xuLy8gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4vLyBhbG9uZyB3aXRoIGxlYW5lcy1kYWVtb24uICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBSZWNvcmQsXG4gICAgVGltZXN0YW1wc1JlY29yZE1peGluLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgbmFtZUJ5LCBtaXhpbiwgYXR0cmlidXRlXG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIEBtaXhpbihUaW1lc3RhbXBzUmVjb3JkTWl4aW4pXG4gIGNsYXNzIFJlcXVlc3RSZXN1bHRSZWNvcmQgZXh0ZW5kcyBSZWNvcmQge1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBAYXR0cmlidXRlKHsgdHlwZTogJ3N0cmluZycgfSkgYm9keTtcbiAgICBAYXR0cmlidXRlKHsgdHlwZTogJ2pzb24nIH0pIGhlYWRlcnM7XG4gICAgQGF0dHJpYnV0ZSh7IHR5cGU6ICdudW1iZXInIH0pIHN0YXR1cztcbiAgICBAYXR0cmlidXRlKHsgdHlwZTogJ3N0cmluZycgfSkgbWVzc2FnZTtcbiAgfVxufVxuIl19