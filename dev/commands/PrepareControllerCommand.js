"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _NotificationInterface2 = require("../interfaces/NotificationInterface");

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
const NotificationInterface = _flowRuntime.default.tdz(() => _NotificationInterface2.NotificationInterface);

var _default = Module => {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  const {
    MIGRATE,
    ROLLBACK,
    MAKE_REQUEST,
    Command,
    initialize,
    partOf,
    meta,
    method,
    nameBy
  } = Module.NS;
  let PrepareControllerCommand = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("PrepareControllerCommand", _flowRuntime.default.extends(Command), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("execute", _fn => {
    const T = _fn.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

    return [_flowRuntime.default.param("note", _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T))), _flowRuntime.default.return(_flowRuntime.default.void())];
  }))), _dec2 = partOf(Module), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class PrepareControllerCommand extends Command {
    execute(note) {
      const T = _flowRuntime.default.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

      let _noteType = _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T));

      const _returnType = _flowRuntime.default.return(_flowRuntime.default.void());

      _flowRuntime.default.param("note", _noteType).assert(note);

      this.facade.addCommand(MIGRATE, 'MigrateCommand');
      this.facade.addCommand(ROLLBACK, 'RollbackCommand');
      this.facade.addCommand(MAKE_REQUEST, 'DaemonScript');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmRzL1ByZXBhcmVDb250cm9sbGVyQ29tbWFuZC5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJNSUdSQVRFIiwiUk9MTEJBQ0siLCJNQUtFX1JFUVVFU1QiLCJDb21tYW5kIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJtZXRob2QiLCJuYW1lQnkiLCJOUyIsIlByZXBhcmVDb250cm9sbGVyQ29tbWFuZCIsImV4ZWN1dGUiLCJub3RlIiwiZmFjYWRlIiwiYWRkQ29tbWFuZCIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQWVBOzs7O0FBZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O2VBSWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxPQURJO0FBQ0tDLElBQUFBLFFBREw7QUFDZUMsSUFBQUEsWUFEZjtBQUVKQyxJQUFBQSxPQUZJO0FBR0pDLElBQUFBLFVBSEk7QUFHUUMsSUFBQUEsTUFIUjtBQUdnQkMsSUFBQUEsSUFIaEI7QUFHc0JDLElBQUFBLE1BSHRCO0FBRzhCQyxJQUFBQTtBQUg5QixNQUlGVCxNQUFNLENBQUNVLEVBSlg7QUFEeUIsTUFTbkJDLHdCQVRtQix5Q0FPekIsb0ZBRXVDUCxPQUZ2QyxHQUdFLDZFQUhGLEVBSUUseUVBSkYsRUFNRTtBQUFBLGdEQUFvQiw4QkFBQywwQkFBRCxDQUFwQjs7QUFBQSwrQ0FBOEIsZ0RBQXdCLGdDQUF4QixDQUE5QiwrQkFBeUQsMkJBQXpEO0FBQUEsSUFORixDQVB5QixXQVF4QkUsTUFBTSxDQUFDTixNQUFELENBUmtCLGdCQU94QkssVUFQd0IsdURBT3pCLE1BRU1NLHdCQUZOLFNBRXVDUCxPQUZ2QyxDQUUrQztBQUlyQ1EsSUFBQUEsT0FBUixDQUEwQkMsSUFBMUIsRUFBZ0U7QUFBQSxtRUFBNUMsOEJBQUMsMEJBQUQsQ0FBNEM7O0FBQUEsc0JBQWxDLGdEQUF3QixnQ0FBeEIsQ0FBa0M7O0FBQUEsc0RBQUwsMkJBQUs7O0FBQUE7O0FBQzlELFdBQUtDLE1BQUwsQ0FBWUMsVUFBWixDQUF1QmQsT0FBdkIsRUFBZ0MsZ0JBQWhDO0FBQ0EsV0FBS2EsTUFBTCxDQUFZQyxVQUFaLENBQXVCYixRQUF2QixFQUFpQyxpQkFBakM7QUFDQSxXQUFLWSxNQUFMLENBQVlDLFVBQVosQ0FBdUJaLFlBQXZCLEVBQXFDLGNBQXJDO0FBQ0Q7O0FBUjRDLEdBVHRCLFVBVVBhLFVBVk8sR0FVTUEsVUFWTixVQVdWQyxNQVhVLEdBV0QsRUFYQywyRUFVdEJSLE1BVnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBV3RCRixJQVhzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVGQWF0QkMsTUFic0I7QUFtQjFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtZGFlbW9uLlxuLy9cbi8vIGxlYW5lcy1kYWVtb24gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuLy8gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyBsZWFuZXMtZGFlbW9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4vLyBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuLy8gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuLy8gR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4vL1xuLy8gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4vLyBhbG9uZyB3aXRoIGxlYW5lcy1kYWVtb24uICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5pbXBvcnQgdHlwZSB7IE5vdGlmaWNhdGlvbkludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvTm90aWZpY2F0aW9uSW50ZXJmYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgTUlHUkFURSwgUk9MTEJBQ0ssIE1BS0VfUkVRVUVTVCxcbiAgICBDb21tYW5kLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgbWV0aG9kLCBuYW1lQnlcbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgY2xhc3MgUHJlcGFyZUNvbnRyb2xsZXJDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBtZXRob2QgZXhlY3V0ZTxUID0gP2FueT4obm90ZTogTm90aWZpY2F0aW9uSW50ZXJmYWNlPFQ+KTogdm9pZCB7XG4gICAgICB0aGlzLmZhY2FkZS5hZGRDb21tYW5kKE1JR1JBVEUsICdNaWdyYXRlQ29tbWFuZCcpO1xuICAgICAgdGhpcy5mYWNhZGUuYWRkQ29tbWFuZChST0xMQkFDSywgJ1JvbGxiYWNrQ29tbWFuZCcpO1xuICAgICAgdGhpcy5mYWNhZGUuYWRkQ29tbWFuZChNQUtFX1JFUVVFU1QsICdEYWVtb25TY3JpcHQnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==