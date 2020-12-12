"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _flowRuntime = _interopRequireDefault(require("flow-runtime"));

// This file is part of leanes-daemon.
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// Software distributed under the License is distributed on an "AS IS" basis,
// WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for
// the specific language governing rights and limitations under the License.
var _default = Module => {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  const {
    Configuration,
    initialize,
    partOf,
    meta,
    property,
    nameBy,
    mixin
  } = Module.NS;
  const {
    FETCH_URL
  } = process.env;
  let MainConfiguration = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("MainConfiguration", _flowRuntime.default.extends(Configuration), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("url", _flowRuntime.default.return(_flowRuntime.default.string())), _flowRuntime.default.method("manifestPath", _flowRuntime.default.return(_flowRuntime.default.string())), _flowRuntime.default.method("configPath", _flowRuntime.default.return(_flowRuntime.default.string())))), _dec2 = partOf(Module), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class MainConfiguration extends Configuration {
    get url() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.string());

      return _returnType.assert(FETCH_URL);
    }

    get manifestPath() {
      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.string());

      return _returnType2.assert('../package.json');
    }

    get configPath() {
      const _returnType3 = _flowRuntime.default.return(_flowRuntime.default.string());

      return _returnType3.assert(`../configs/${this.environment}`);
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "url", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "url"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "manifestPath", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "manifestPath"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "configPath", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "configPath"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3hpZXMvTWFpbkNvbmZpZ3VyYXRpb24uanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiQ29uZmlndXJhdGlvbiIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtZXRhIiwicHJvcGVydHkiLCJuYW1lQnkiLCJtaXhpbiIsIk5TIiwiRkVUQ0hfVVJMIiwicHJvY2VzcyIsImVudiIsIk1haW5Db25maWd1cmF0aW9uIiwidXJsIiwibWFuaWZlc3RQYXRoIiwiY29uZmlnUGF0aCIsImVudmlyb25tZW50IiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7ZUFFZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLGFBREk7QUFFSkMsSUFBQUEsVUFGSTtBQUVRQyxJQUFBQSxNQUZSO0FBRWdCQyxJQUFBQSxJQUZoQjtBQUVzQkMsSUFBQUEsUUFGdEI7QUFFZ0NDLElBQUFBLE1BRmhDO0FBRXdDQyxJQUFBQTtBQUZ4QyxNQUdGUCxNQUFNLENBQUNRLEVBSFg7QUFLRixRQUFNO0FBQ0pDLElBQUFBO0FBREksTUFFRkMsT0FBTyxDQUFDQyxHQUZaO0FBTjJCLE1BWW5CQyxpQkFabUIseUNBVXpCLDZFQUVnQ1gsYUFGaEMsR0FHRSw2RUFIRixFQUlFLHlFQUpGLEVBTUUsK0RBQW1CLDZCQUFuQixFQU5GLEVBVUUsd0VBQTRCLDZCQUE1QixFQVZGLEVBY0Usc0VBQTBCLDZCQUExQixFQWRGLENBVnlCLFdBV3hCRSxNQUFNLENBQUNILE1BQUQsQ0FYa0IsZ0JBVXhCRSxVQVZ3Qix1REFVekIsTUFFTVUsaUJBRk4sU0FFZ0NYLGFBRmhDLENBRThDO0FBSTVDLFFBQWNZLEdBQWQsR0FBNEI7QUFBQSxzREFBUCw2QkFBTzs7QUFDMUIsZ0NBQU9KLFNBQVA7QUFDRDs7QUFFRCxRQUFjSyxZQUFkLEdBQXFDO0FBQUEsdURBQVAsNkJBQU87O0FBQ25DLGlDQUFPLGlCQUFQO0FBQ0Q7O0FBRUQsUUFBY0MsVUFBZCxHQUFtQztBQUFBLHVEQUFQLDZCQUFPOztBQUNqQyxpQ0FBUSxjQUFhLEtBQUtDLFdBQVksRUFBdEM7QUFDRDs7QUFkMkMsR0FackIsVUFhUEMsVUFiTyxHQWFNQSxVQWJOLFVBY1ZDLE1BZFUsR0FjRCxFQWRDLDJFQWF0QlosTUFic0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFjdEJGLElBZHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUZBZ0J0QkMsUUFoQnNCLDhKQW9CdEJBLFFBcEJzQixxS0F3QnRCQSxRQXhCc0I7QUE0QjFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtZGFlbW9uLlxuLy9cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbi8vIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuLy9cbi8vIFNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBiYXNpcyxcbi8vIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3Jcbi8vIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcmlnaHRzIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgQ29uZmlndXJhdGlvbixcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIHByb3BlcnR5LCBuYW1lQnksIG1peGluXG4gIH0gPSBNb2R1bGUuTlM7XG5cbmNvbnN0IHtcbiAgRkVUQ0hfVVJMLFxufSA9IHByb2Nlc3MuZW52O1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBjbGFzcyBNYWluQ29uZmlndXJhdGlvbiBleHRlbmRzIENvbmZpZ3VyYXRpb24ge1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBAcHJvcGVydHkgZ2V0IHVybCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIEZFVENIX1VSTDtcbiAgICB9XG5cbiAgICBAcHJvcGVydHkgZ2V0IG1hbmlmZXN0UGF0aCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICcuLi9wYWNrYWdlLmpzb24nO1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eSBnZXQgY29uZmlnUGF0aCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGAuLi9jb25maWdzLyR7dGhpcy5lbnZpcm9ubWVudH1gO1xuICAgIH1cbiAgfVxufVxuIl19