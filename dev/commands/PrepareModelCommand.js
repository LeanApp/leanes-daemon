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
    APPLICATION_PROXY,
    CONFIGURATION,
    MIGRATIONS_ADAPTER,
    REQUEST_RESULTS_ADAPTER,
    MIGRATIONS,
    REQUEST_RESULTS,
    Command,
    initialize,
    partOf,
    meta,
    method,
    nameBy
  } = Module.NS;
  let PrepareModelCommand = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("PrepareModelCommand", _flowRuntime.default.extends(Command), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("execute", _fn => {
    const T = _fn.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

    return [_flowRuntime.default.param("note", _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T))), _flowRuntime.default.return(_flowRuntime.default.void())];
  }))), _dec2 = partOf(Module), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class PrepareModelCommand extends Command {
    execute(note) {
      const T = _flowRuntime.default.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

      let _noteType = _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T));

      const _returnType = _flowRuntime.default.return(_flowRuntime.default.void());

      _flowRuntime.default.param("note", _noteType).assert(note);

      const app = _flowRuntime.default.ref(ApplicationInterface).assert(note.getBody());

      this.facade.addProxy(APPLICATION_PROXY, 'ApplicationProxy', app.initialState);
      this.facade.addProxy(CONFIGURATION, 'MainConfiguration', this.Module.NS.ROOT);
      this.facade.addAdapter(MIGRATIONS_ADAPTER, 'MongoAdapter');
      this.facade.addAdapter(REQUEST_RESULTS_ADAPTER, 'MongoAdapter');
      this.facade.addProxy(MIGRATIONS, 'MigrationsCollection', {
        delegate: 'BaseMigration',
        adapter: MIGRATIONS_ADAPTER
      });
      this.facade.addProxy(REQUEST_RESULTS, 'MainCollection', {
        delegate: 'RequestResultRecord',
        adapter: REQUEST_RESULTS_ADAPTER
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmRzL1ByZXBhcmVNb2RlbENvbW1hbmQuanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiQVBQTElDQVRJT05fUFJPWFkiLCJDT05GSUdVUkFUSU9OIiwiTUlHUkFUSU9OU19BREFQVEVSIiwiUkVRVUVTVF9SRVNVTFRTX0FEQVBURVIiLCJNSUdSQVRJT05TIiwiUkVRVUVTVF9SRVNVTFRTIiwiQ29tbWFuZCIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtZXRhIiwibWV0aG9kIiwibmFtZUJ5IiwiTlMiLCJQcmVwYXJlTW9kZWxDb21tYW5kIiwiZXhlY3V0ZSIsIm5vdGUiLCJnZXRCb2R5IiwiZmFjYWRlIiwiYWRkUHJveHkiLCJhcHAiLCJpbml0aWFsU3RhdGUiLCJST09UIiwiYWRkQWRhcHRlciIsImRlbGVnYXRlIiwiYWRhcHRlciIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQWVBOztBQUNBOzs7O0FBaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O2VBS2dCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxpQkFESTtBQUNlQyxJQUFBQSxhQURmO0FBQzhCQyxJQUFBQSxrQkFEOUI7QUFDa0RDLElBQUFBLHVCQURsRDtBQUMyRUMsSUFBQUEsVUFEM0U7QUFDdUZDLElBQUFBLGVBRHZGO0FBRUpDLElBQUFBLE9BRkk7QUFHSkMsSUFBQUEsVUFISTtBQUdRQyxJQUFBQSxNQUhSO0FBR2dCQyxJQUFBQSxJQUhoQjtBQUdzQkMsSUFBQUEsTUFIdEI7QUFHOEJDLElBQUFBO0FBSDlCLE1BSUZaLE1BQU0sQ0FBQ2EsRUFKWDtBQUR5QixNQVNuQkMsbUJBVG1CLHlDQU96QiwrRUFFa0NQLE9BRmxDLEdBR0UsNkVBSEYsRUFJRSx5RUFKRixFQU1FO0FBQUEsZ0RBQW9CLDhCQUFDLDBCQUFELENBQXBCOztBQUFBLCtDQUE4QixnREFBd0IsZ0NBQXhCLENBQTlCLCtCQUF5RCwyQkFBekQ7QUFBQSxJQU5GLENBUHlCLFdBUXhCRSxNQUFNLENBQUNULE1BQUQsQ0FSa0IsZ0JBT3hCUSxVQVB3Qix1REFPekIsTUFFTU0sbUJBRk4sU0FFa0NQLE9BRmxDLENBRTBDO0FBSWhDUSxJQUFBQSxPQUFSLENBQTBCQyxJQUExQixFQUFnRTtBQUFBLG1FQUE1Qyw4QkFBQywwQkFBRCxDQUE0Qzs7QUFBQSxzQkFBbEMsZ0RBQXdCLGdDQUF4QixDQUFrQzs7QUFBQSxzREFBTCwyQkFBSzs7QUFBQTs7QUFDOUQsa0JBQVMsOENBQVQsUUFBa0NBLElBQUksQ0FBQ0MsT0FBTCxFQUFsQzs7QUFDQSxXQUFLQyxNQUFMLENBQVlDLFFBQVosQ0FBcUJsQixpQkFBckIsRUFBd0Msa0JBQXhDLEVBQTREbUIsR0FBRyxDQUFDQyxZQUFoRTtBQUNBLFdBQUtILE1BQUwsQ0FBWUMsUUFBWixDQUFxQmpCLGFBQXJCLEVBQW9DLG1CQUFwQyxFQUF5RCxLQUFLRixNQUFMLENBQVlhLEVBQVosQ0FBZVMsSUFBeEU7QUFDQSxXQUFLSixNQUFMLENBQVlLLFVBQVosQ0FBdUJwQixrQkFBdkIsRUFBMkMsY0FBM0M7QUFDQSxXQUFLZSxNQUFMLENBQVlLLFVBQVosQ0FBdUJuQix1QkFBdkIsRUFBZ0QsY0FBaEQ7QUFDQSxXQUFLYyxNQUFMLENBQVlDLFFBQVosQ0FBcUJkLFVBQXJCLEVBQWlDLHNCQUFqQyxFQUF5RDtBQUN2RG1CLFFBQUFBLFFBQVEsRUFBRSxlQUQ2QztBQUV2REMsUUFBQUEsT0FBTyxFQUFFdEI7QUFGOEMsT0FBekQ7QUFJQSxXQUFLZSxNQUFMLENBQVlDLFFBQVosQ0FBcUJiLGVBQXJCLEVBQXNDLGdCQUF0QyxFQUF3RDtBQUN0RGtCLFFBQUFBLFFBQVEsRUFBRSxxQkFENEM7QUFFdERDLFFBQUFBLE9BQU8sRUFBRXJCO0FBRjZDLE9BQXhEO0FBSUQ7O0FBbEJ1QyxHQVRqQixVQVVQc0IsVUFWTyxHQVVNQSxVQVZOLFVBV1ZDLE1BWFUsR0FXRCxFQVhDLDJFQVV0QmYsTUFWc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFXdEJGLElBWHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUZBYXRCQyxNQWJzQjtBQTZCMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1kYWVtb24uXG4vL1xuLy8gbGVhbmVzLWRhZW1vbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1kYWVtb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLWRhZW1vbi4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmltcG9ydCB0eXBlIHsgTm90aWZpY2F0aW9uSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Ob3RpZmljYXRpb25JbnRlcmZhY2UnO1xuaW1wb3J0IHR5cGUgeyBBcHBsaWNhdGlvbkludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvQXBwbGljYXRpb25JbnRlcmZhY2UnO1xuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBBUFBMSUNBVElPTl9QUk9YWSwgQ09ORklHVVJBVElPTiwgTUlHUkFUSU9OU19BREFQVEVSLCBSRVFVRVNUX1JFU1VMVFNfQURBUFRFUiwgTUlHUkFUSU9OUywgUkVRVUVTVF9SRVNVTFRTLFxuICAgIENvbW1hbmQsXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBtZXRob2QsIG5hbWVCeVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBjbGFzcyBQcmVwYXJlTW9kZWxDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBtZXRob2QgZXhlY3V0ZTxUID0gP2FueT4obm90ZTogTm90aWZpY2F0aW9uSW50ZXJmYWNlPFQ+KTogdm9pZCB7XG4gICAgICBjb25zdCBhcHA6IEFwcGxpY2F0aW9uSW50ZXJmYWNlID0gbm90ZS5nZXRCb2R5KCk7XG4gICAgICB0aGlzLmZhY2FkZS5hZGRQcm94eShBUFBMSUNBVElPTl9QUk9YWSwgJ0FwcGxpY2F0aW9uUHJveHknLCBhcHAuaW5pdGlhbFN0YXRlKTtcbiAgICAgIHRoaXMuZmFjYWRlLmFkZFByb3h5KENPTkZJR1VSQVRJT04sICdNYWluQ29uZmlndXJhdGlvbicsIHRoaXMuTW9kdWxlLk5TLlJPT1QpO1xuICAgICAgdGhpcy5mYWNhZGUuYWRkQWRhcHRlcihNSUdSQVRJT05TX0FEQVBURVIsICdNb25nb0FkYXB0ZXInKTtcbiAgICAgIHRoaXMuZmFjYWRlLmFkZEFkYXB0ZXIoUkVRVUVTVF9SRVNVTFRTX0FEQVBURVIsICdNb25nb0FkYXB0ZXInKTtcbiAgICAgIHRoaXMuZmFjYWRlLmFkZFByb3h5KE1JR1JBVElPTlMsICdNaWdyYXRpb25zQ29sbGVjdGlvbicsIHtcbiAgICAgICAgZGVsZWdhdGU6ICdCYXNlTWlncmF0aW9uJyxcbiAgICAgICAgYWRhcHRlcjogTUlHUkFUSU9OU19BREFQVEVSXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZmFjYWRlLmFkZFByb3h5KFJFUVVFU1RfUkVTVUxUUywgJ01haW5Db2xsZWN0aW9uJywge1xuICAgICAgICBkZWxlZ2F0ZTogJ1JlcXVlc3RSZXN1bHRSZWNvcmQnLFxuICAgICAgICBhZGFwdGVyOiBSRVFVRVNUX1JFU1VMVFNfQURBUFRFUlxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=