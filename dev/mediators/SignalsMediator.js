"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _cron = require("cron");

var _flowRuntime = _interopRequireDefault(require("flow-runtime"));

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
  var _dec, _dec2, _class, _class2, _init, _init2, _descriptor, _class3, _temp;

  const {
    MAKE_REQUEST,
    Mediator,
    initialize,
    partOf,
    meta,
    nameBy,
    method,
    property,
    mixin
  } = Module.NS;
  let SignalsMediator = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("SignalsMediator", _flowRuntime.default.extends(Mediator), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.property("_job", _flowRuntime.default.any()), _flowRuntime.default.method("onRegister", _flowRuntime.default.return(_flowRuntime.default.void())), _flowRuntime.default.method("onRemove", _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void()))))), _dec2 = partOf(Module), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class SignalsMediator extends Mediator {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "_job", _descriptor, this);
    }

    onRegister() {
      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.void());

      super.onRegister();
      this._job = new _cron.CronJob('*/7 * * * * *', async () => {
        const result = await this.run(MAKE_REQUEST); // console.log(`Result from script: "${result}"`);
      }, null, true, 'America/Los_Angeles');

      this._job.start();
    }

    async onRemove() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.union(_flowRuntime.default.void(), _flowRuntime.default.ref("Promise", _flowRuntime.default.void())));

      await super.onRemove();

      this._job.stop();
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
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_job", [property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "onRegister", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "onRegister"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "onRemove", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "onRemove"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhdG9ycy9TaWduYWxzTWVkaWF0b3IuanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiTUFLRV9SRVFVRVNUIiwiTWVkaWF0b3IiLCJpbml0aWFsaXplIiwicGFydE9mIiwibWV0YSIsIm5hbWVCeSIsIm1ldGhvZCIsInByb3BlcnR5IiwibWl4aW4iLCJOUyIsIlNpZ25hbHNNZWRpYXRvciIsIm9uUmVnaXN0ZXIiLCJfam9iIiwiQ3JvbkpvYiIsInJlc3VsdCIsInJ1biIsInN0YXJ0Iiwib25SZW1vdmUiLCJzdG9wIiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWVBOzs7O0FBZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQUlnQkEsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsWUFESTtBQUVKQyxJQUFBQSxRQUZJO0FBR0pDLElBQUFBLFVBSEk7QUFHUUMsSUFBQUEsTUFIUjtBQUdnQkMsSUFBQUEsSUFIaEI7QUFHc0JDLElBQUFBLE1BSHRCO0FBRzhCQyxJQUFBQSxNQUg5QjtBQUdzQ0MsSUFBQUEsUUFIdEM7QUFHZ0RDLElBQUFBO0FBSGhELE1BSUZULE1BQU0sQ0FBQ1UsRUFKWDtBQUR5QixNQVNuQkMsZUFUbUIseUNBT3pCLDJFQUU4QlQsUUFGOUIsR0FHRSw2RUFIRixFQUlFLHlFQUpGLEVBTUUsaUVBTkYsRUFRRSxzRUFBb0IsMkJBQXBCLEVBUkYsRUFpQkUsb0VBQXdCLG9DQUFVLDJCQUFWLENBQXhCLEVBakJGLENBUHlCLFdBUXhCRSxNQUFNLENBQUNKLE1BQUQsQ0FSa0IsZ0JBT3hCRyxVQVB3Qix1REFPekIsTUFFTVEsZUFGTixTQUU4QlQsUUFGOUIsQ0FFdUM7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNN0JVLElBQUFBLFVBQVIsR0FBNEI7QUFBQSx1REFBTiwyQkFBTTs7QUFDMUIsWUFBTUEsVUFBTjtBQUNBLFdBQUtDLElBQUwsR0FBWSxJQUFJQyxhQUFKLENBQVksZUFBWixFQUE2QixZQUFZO0FBQ25ELGNBQU1DLE1BQU0sR0FBRyxNQUFNLEtBQUtDLEdBQUwsQ0FBU2YsWUFBVCxDQUFyQixDQURtRCxDQUVuRDtBQUNELE9BSFcsRUFHVCxJQUhTLEVBR0gsSUFIRyxFQUdHLHFCQUhILENBQVo7O0FBSUEsV0FBS1ksSUFBTCxDQUFVSSxLQUFWO0FBQ0Q7O0FBRUQsVUFBY0MsUUFBZCxHQUF3QztBQUFBLGlGQUFOLDJCQUFNLEVBQWQsb0NBQVEsMkJBQVIsQ0FBYzs7QUFDdEMsWUFBTSxNQUFNQSxRQUFOLEVBQU47O0FBQ0EsV0FBS0wsSUFBTCxDQUFVTSxJQUFWO0FBQ0Q7O0FBbEJvQyxHQVRkLFVBVVBDLFVBVk8sR0FVTUEsVUFWTixVQVdWQyxNQVhVLEdBV0QsRUFYQywyRUFVdEJmLE1BVnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBV3RCRCxJQVhzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtHQWF0QkcsUUFic0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYU4sSUFiTTtBQUFBO0FBQUEsZ0ZBZXRCRCxNQWZzQixpS0F3QnRCQSxNQXhCc0I7QUE2QjFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtZGFlbW9uLlxuLy9cbi8vIGxlYW5lcy1kYWVtb24gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuLy8gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyBsZWFuZXMtZGFlbW9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4vLyBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuLy8gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuLy8gR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4vL1xuLy8gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4vLyBhbG9uZyB3aXRoIGxlYW5lcy1kYWVtb24uICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5pbXBvcnQgeyBDcm9uSm9iIH0gZnJvbSAnY3Jvbic7XG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIE1BS0VfUkVRVUVTVCxcbiAgICBNZWRpYXRvcixcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIG5hbWVCeSwgbWV0aG9kLCBwcm9wZXJ0eSwgbWl4aW5cbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgY2xhc3MgU2lnbmFsc01lZGlhdG9yIGV4dGVuZHMgTWVkaWF0b3Ige1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBAcHJvcGVydHkgX2pvYiA9IG51bGw7XG5cbiAgICBAbWV0aG9kIG9uUmVnaXN0ZXIoKTogdm9pZCAge1xuICAgICAgc3VwZXIub25SZWdpc3RlcigpO1xuICAgICAgdGhpcy5fam9iID0gbmV3IENyb25Kb2IoJyovNyAqICogKiAqIConLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucnVuKE1BS0VfUkVRVUVTVCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBSZXN1bHQgZnJvbSBzY3JpcHQ6IFwiJHtyZXN1bHR9XCJgKTtcbiAgICAgIH0sIG51bGwsIHRydWUsICdBbWVyaWNhL0xvc19BbmdlbGVzJyk7XG4gICAgICB0aGlzLl9qb2Iuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBAbWV0aG9kIGFzeW5jIG9uUmVtb3ZlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgYXdhaXQgc3VwZXIub25SZW1vdmUoKTtcbiAgICAgIHRoaXMuX2pvYi5zdG9wKCk7XG4gICAgfVxuICB9XG59XG4iXX0=