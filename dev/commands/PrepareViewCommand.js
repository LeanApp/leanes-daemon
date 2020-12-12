"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _NotificationInterface2 = require("../interfaces/NotificationInterface");

var _ApplicationInterface2 = require("../interfaces/ApplicationInterface");

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
const ApplicationInterface = _flowRuntime.default.tdz(() => _ApplicationInterface2.ApplicationInterface);

const NotificationInterface = _flowRuntime.default.tdz(() => _NotificationInterface2.NotificationInterface);

var _default = Module => {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  const {
    APPLICATION_MEDIATOR,
    SHELL,
    LOGGER_MODULE,
    SIGNALS_GENERATOR,
    Command,
    initialize,
    partOf,
    meta,
    method,
    nameBy
  } = Module.NS;
  let PrepareViewCommand = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("PrepareViewCommand", _flowRuntime.default.extends(Command), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("execute", _fn => {
    const T = _fn.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

    return [_flowRuntime.default.param("note", _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T))), _flowRuntime.default.return(_flowRuntime.default.void())];
  }))), _dec2 = partOf(Module), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class PrepareViewCommand extends Command {
    execute(note) {
      const T = _flowRuntime.default.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

      let _noteType = _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T));

      const _returnType = _flowRuntime.default.return(_flowRuntime.default.void());

      _flowRuntime.default.param("note", _noteType).assert(note);

      const app = _flowRuntime.default.ref(ApplicationInterface).assert(note.getBody());

      this.facade.addMediator(LOGGER_MODULE, 'LoggerModuleMediator');
      this.facade.addMediator(SHELL, 'ShellJunctionMediator');
      this.facade.addMediator(APPLICATION_MEDIATOR, 'ApplicationMediator', app);
      this.facade.activateMediator(APPLICATION_MEDIATOR);
      this.facade.activateMediator(LOGGER_MODULE);
      this.facade.activateMediator(SHELL);

      if (!app.isLightweight) {
        this.facade.addMediator(SIGNALS_GENERATOR, 'SignalsMediator');
        this.facade.activateMediator(SIGNALS_GENERATOR);
      }
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "execute", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "execute"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmRzL1ByZXBhcmVWaWV3Q29tbWFuZC5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJBUFBMSUNBVElPTl9NRURJQVRPUiIsIlNIRUxMIiwiTE9HR0VSX01PRFVMRSIsIlNJR05BTFNfR0VORVJBVE9SIiwiQ29tbWFuZCIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtZXRhIiwibWV0aG9kIiwibmFtZUJ5IiwiTlMiLCJQcmVwYXJlVmlld0NvbW1hbmQiLCJleGVjdXRlIiwibm90ZSIsImdldEJvZHkiLCJmYWNhZGUiLCJhZGRNZWRpYXRvciIsImFwcCIsImFjdGl2YXRlTWVkaWF0b3IiLCJpc0xpZ2h0d2VpZ2h0IiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBZUE7O0FBQ0E7Ozs7QUFoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7ZUFLZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLG9CQURJO0FBQ2tCQyxJQUFBQSxLQURsQjtBQUN5QkMsSUFBQUEsYUFEekI7QUFDd0NDLElBQUFBLGlCQUR4QztBQUVKQyxJQUFBQSxPQUZJO0FBR0pDLElBQUFBLFVBSEk7QUFHUUMsSUFBQUEsTUFIUjtBQUdnQkMsSUFBQUEsSUFIaEI7QUFHc0JDLElBQUFBLE1BSHRCO0FBRzhCQyxJQUFBQTtBQUg5QixNQUlGVixNQUFNLENBQUNXLEVBSlg7QUFEeUIsTUFTbkJDLGtCQVRtQix5Q0FPekIsOEVBRWlDUCxPQUZqQyxHQUdFLDZFQUhGLEVBSUUseUVBSkYsRUFNRTtBQUFBLGdEQUFvQiw4QkFBQywwQkFBRCxDQUFwQjs7QUFBQSwrQ0FBOEIsZ0RBQXdCLGdDQUF4QixDQUE5QiwrQkFBeUQsMkJBQXpEO0FBQUEsSUFORixDQVB5QixXQVF4QkUsTUFBTSxDQUFDUCxNQUFELENBUmtCLGdCQU94Qk0sVUFQd0IsdURBT3pCLE1BRU1NLGtCQUZOLFNBRWlDUCxPQUZqQyxDQUV5QztBQUkvQlEsSUFBQUEsT0FBUixDQUEwQkMsSUFBMUIsRUFBZ0U7QUFBQSxtRUFBNUMsOEJBQUMsMEJBQUQsQ0FBNEM7O0FBQUEsc0JBQWxDLGdEQUF3QixnQ0FBeEIsQ0FBa0M7O0FBQUEsc0RBQUwsMkJBQUs7O0FBQUE7O0FBQzlELGtCQUFTLDhDQUFULFFBQWtDQSxJQUFJLENBQUNDLE9BQUwsRUFBbEM7O0FBRUEsV0FBS0MsTUFBTCxDQUFZQyxXQUFaLENBQXdCZCxhQUF4QixFQUF1QyxzQkFBdkM7QUFDQSxXQUFLYSxNQUFMLENBQVlDLFdBQVosQ0FBd0JmLEtBQXhCLEVBQStCLHVCQUEvQjtBQUNBLFdBQUtjLE1BQUwsQ0FBWUMsV0FBWixDQUF3QmhCLG9CQUF4QixFQUE4QyxxQkFBOUMsRUFBcUVpQixHQUFyRTtBQUVBLFdBQUtGLE1BQUwsQ0FBWUcsZ0JBQVosQ0FBNkJsQixvQkFBN0I7QUFDQSxXQUFLZSxNQUFMLENBQVlHLGdCQUFaLENBQTZCaEIsYUFBN0I7QUFDQSxXQUFLYSxNQUFMLENBQVlHLGdCQUFaLENBQTZCakIsS0FBN0I7O0FBRUEsVUFBSSxDQUFDZ0IsR0FBRyxDQUFDRSxhQUFULEVBQXdCO0FBQ3RCLGFBQUtKLE1BQUwsQ0FBWUMsV0FBWixDQUF3QmIsaUJBQXhCLEVBQTJDLGlCQUEzQztBQUNBLGFBQUtZLE1BQUwsQ0FBWUcsZ0JBQVosQ0FBNkJmLGlCQUE3QjtBQUNEO0FBQ0Y7O0FBbkJzQyxHQVRoQixVQVVQaUIsVUFWTyxHQVVNQSxVQVZOLFVBV1ZDLE1BWFUsR0FXRCxFQVhDLDJFQVV0QlosTUFWc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFXdEJGLElBWHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUZBYXRCQyxNQWJzQjtBQThCMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1kYWVtb24uXG4vL1xuLy8gbGVhbmVzLWRhZW1vbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1kYWVtb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLWRhZW1vbi4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmltcG9ydCB0eXBlIHsgTm90aWZpY2F0aW9uSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Ob3RpZmljYXRpb25JbnRlcmZhY2UnO1xuaW1wb3J0IHR5cGUgeyBBcHBsaWNhdGlvbkludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvQXBwbGljYXRpb25JbnRlcmZhY2UnO1xuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBBUFBMSUNBVElPTl9NRURJQVRPUiwgU0hFTEwsIExPR0dFUl9NT0RVTEUsIFNJR05BTFNfR0VORVJBVE9SLFxuICAgIENvbW1hbmQsXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBtZXRob2QsIG5hbWVCeVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBjbGFzcyBQcmVwYXJlVmlld0NvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcbiAgICBAbmFtZUJ5IHN0YXRpYyAgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgQG1ldGhvZCBleGVjdXRlPFQgPSA/YW55Pihub3RlOiBOb3RpZmljYXRpb25JbnRlcmZhY2U8VD4pOiB2b2lkIHtcbiAgICAgIGNvbnN0IGFwcDogQXBwbGljYXRpb25JbnRlcmZhY2UgPSBub3RlLmdldEJvZHkoKTtcblxuICAgICAgdGhpcy5mYWNhZGUuYWRkTWVkaWF0b3IoTE9HR0VSX01PRFVMRSwgJ0xvZ2dlck1vZHVsZU1lZGlhdG9yJyk7XG4gICAgICB0aGlzLmZhY2FkZS5hZGRNZWRpYXRvcihTSEVMTCwgJ1NoZWxsSnVuY3Rpb25NZWRpYXRvcicpO1xuICAgICAgdGhpcy5mYWNhZGUuYWRkTWVkaWF0b3IoQVBQTElDQVRJT05fTUVESUFUT1IsICdBcHBsaWNhdGlvbk1lZGlhdG9yJywgYXBwKTtcblxuICAgICAgdGhpcy5mYWNhZGUuYWN0aXZhdGVNZWRpYXRvcihBUFBMSUNBVElPTl9NRURJQVRPUik7XG4gICAgICB0aGlzLmZhY2FkZS5hY3RpdmF0ZU1lZGlhdG9yKExPR0dFUl9NT0RVTEUpO1xuICAgICAgdGhpcy5mYWNhZGUuYWN0aXZhdGVNZWRpYXRvcihTSEVMTCk7XG5cbiAgICAgIGlmICghYXBwLmlzTGlnaHR3ZWlnaHQpIHtcbiAgICAgICAgdGhpcy5mYWNhZGUuYWRkTWVkaWF0b3IoU0lHTkFMU19HRU5FUkFUT1IsICdTaWduYWxzTWVkaWF0b3InKTtcbiAgICAgICAgdGhpcy5mYWNhZGUuYWN0aXZhdGVNZWRpYXRvcihTSUdOQUxTX0dFTkVSQVRPUik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=