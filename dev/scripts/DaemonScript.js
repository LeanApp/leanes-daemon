"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _CollectionInterface2 = require("../interfaces/CollectionInterface");

var _RecordInterface2 = require("../interfaces/RecordInterface");

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
const RecordInterface = _flowRuntime.default.tdz(() => _RecordInterface2.RecordInterface);

const CollectionInterface = _flowRuntime.default.tdz(() => _CollectionInterface2.CollectionInterface);

const slice = [].slice;

var _default = Module => {
  let _t$TypeParametersSymb;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _init, _init2, _descriptor, _descriptor2, _class3, _temp;

  const {
    REQUEST_RESULTS,
    MIGRATIONS,
    Script,
    ConfigurableMixin,
    initialize,
    partOf,
    meta,
    method,
    property,
    nameBy,
    inject,
    mixin,
    Utils: {
      request
    }
  } = Module.NS;

  const _DaemonScriptTypeParametersSymbol = Symbol("DaemonScriptTypeParameters");

  let DaemonScript = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("DaemonScript", DaemonScript => {
    const D = DaemonScript.typeParameter("D", undefined, _flowRuntime.default.ref(RecordInterface));
    return [_flowRuntime.default.extends(Script), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.property("_resultsFactory", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, _flowRuntime.default.flowInto(D))))), _flowRuntime.default.method("_results", _flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, D))), _flowRuntime.default.property("_migrationsFactory", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, _flowRuntime.default.flowInto(D))))), _flowRuntime.default.method("constructor", _flowRuntime.default.param("args", _flowRuntime.default.any())), _flowRuntime.default.method("_migrations", _flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, D))), _flowRuntime.default.method("checkSchemaVersion", _flowRuntime.default.return(_flowRuntime.default.boolean())), _flowRuntime.default.method("body", _flowRuntime.default.param("data", _flowRuntime.default.nullable(_flowRuntime.default.any())), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.nullable(_flowRuntime.default.any()))))];
  })), _dec2 = partOf(Module), _dec3 = mixin(ConfigurableMixin), _dec4 = _flowRuntime.default.decorate(function () {
    return _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, _flowRuntime.default.flowInto(this[_DaemonScriptTypeParametersSymbol].D))));
  }), _dec5 = inject(`Factory<${REQUEST_RESULTS}>`), _dec6 = _flowRuntime.default.decorate(function () {
    return _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, _flowRuntime.default.flowInto(this[_DaemonScriptTypeParametersSymbol].D))));
  }), _dec7 = inject(`Factory<${MIGRATIONS}>`), _dec(_class = initialize(_class = _dec2(_class = _dec3(_class = (_class2 = (_temp = (_t$TypeParametersSymb = _flowRuntime.default.TypeParametersSymbol, _class3 = class DaemonScript extends Script {
    get _results() {
      const _returnType3 = _flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, this[_DaemonScriptTypeParametersSymbol].D));

      return _returnType3.assert(this._resultsFactory());
    }

    constructor(...args) {
      const _typeParameters = {
        D: _flowRuntime.default.typeParameter("D")
      };
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "_resultsFactory", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "_migrationsFactory", _descriptor2, this);
      this[_DaemonScriptTypeParametersSymbol] = _typeParameters;
    }

    get _migrations() {
      const _returnType4 = _flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, this[_DaemonScriptTypeParametersSymbol].D));

      return _returnType4.assert(this._migrationsFactory());
    }

    async checkSchemaVersion() {
      const _returnType5 = _flowRuntime.default.return(_flowRuntime.default.boolean());

      const migrationNames = this.ApplicationModule.NS.MIGRATION_NAMES;
      const [lastMigration] = slice.call(migrationNames, -1);
      if (lastMigration == null) return _returnType5.assert(true);
      return _returnType5.assert(await this._migrations.includes(lastMigration));
    }

    async body(data) {
      let _dataType = _flowRuntime.default.nullable(_flowRuntime.default.any());

      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.union(_flowRuntime.default.nullable(_flowRuntime.default.any()), _flowRuntime.default.ref("Promise", _flowRuntime.default.nullable(_flowRuntime.default.any()))));

      _flowRuntime.default.param("data", _dataType).assert(data);

      if (!(await this.checkSchemaVersion())) return _returnType2.assert();
      const result = await request("GET", this.configs.url);
      await this._results.create({
        body: result.body,
        headers: result.headers,
        status: result.status,
        message: result.message
      });
      return _returnType2.assert('compleated');
    }

  }), _class3[_t$TypeParametersSymb] = _DaemonScriptTypeParametersSymbol, _class3.__filename = __filename, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
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
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_resultsFactory", [_dec4, _dec5, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_results", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_results"), _class2.prototype), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_migrationsFactory", [_dec6, _dec7, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_migrations", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_migrations"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "checkSchemaVersion", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "checkSchemaVersion"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "body", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "body"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvRGFlbW9uU2NyaXB0LmpzIl0sIm5hbWVzIjpbInNsaWNlIiwiTW9kdWxlIiwiUkVRVUVTVF9SRVNVTFRTIiwiTUlHUkFUSU9OUyIsIlNjcmlwdCIsIkNvbmZpZ3VyYWJsZU1peGluIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJtZXRob2QiLCJwcm9wZXJ0eSIsIm5hbWVCeSIsImluamVjdCIsIm1peGluIiwiVXRpbHMiLCJyZXF1ZXN0IiwiTlMiLCJEYWVtb25TY3JpcHQiLCJfcmVzdWx0cyIsIl9yZXN1bHRzRmFjdG9yeSIsIl9taWdyYXRpb25zIiwiX21pZ3JhdGlvbnNGYWN0b3J5IiwiY2hlY2tTY2hlbWFWZXJzaW9uIiwibWlncmF0aW9uTmFtZXMiLCJBcHBsaWNhdGlvbk1vZHVsZSIsIk1JR1JBVElPTl9OQU1FUyIsImxhc3RNaWdyYXRpb24iLCJjYWxsIiwiaW5jbHVkZXMiLCJib2R5IiwiZGF0YSIsInJlc3VsdCIsImNvbmZpZ3MiLCJ1cmwiLCJjcmVhdGUiLCJoZWFkZXJzIiwic3RhdHVzIiwibWVzc2FnZSIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFlQTs7QUFDQTs7OztBQWhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBLE1BQU1BLEtBQUssR0FBRyxHQUFHQSxLQUFqQjs7ZUFFZ0JDLE1BQUQsSUFBWTtBQUFBOztBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLGVBREk7QUFDYUMsSUFBQUEsVUFEYjtBQUVKQyxJQUFBQSxNQUZJO0FBR0pDLElBQUFBLGlCQUhJO0FBSUpDLElBQUFBLFVBSkk7QUFJUUMsSUFBQUEsTUFKUjtBQUlnQkMsSUFBQUEsSUFKaEI7QUFJc0JDLElBQUFBLE1BSnRCO0FBSThCQyxJQUFBQSxRQUo5QjtBQUl3Q0MsSUFBQUEsTUFKeEM7QUFJZ0RDLElB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YU1BLFVBYk4sVUFjVkMsTUFkVSxHQWNELEVBZEMsMkVBYXRCNUIsTUFic0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFjdEJILElBZHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkhBaUJ0QkUsUUFqQnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4RUFrQnRCQSxRQWxCc0Isc01BdUJ0QkEsUUF2QnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpRkF3QnRCQSxRQXhCc0IsNEtBNEJ0QkQsTUE1QnNCLHFLQW9DdEJBLE1BcENzQjtBQWdEMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1kYWVtb24uXG4vL1xuLy8gbGVhbmVzLWRhZW1vbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1kYWVtb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLWRhZW1vbi4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmltcG9ydCB0eXBlIHsgQ29sbGVjdGlvbkludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvQ29sbGVjdGlvbkludGVyZmFjZSc7XG5pbXBvcnQgdHlwZSB7IFJlY29yZEludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvUmVjb3JkSW50ZXJmYWNlJztcblxuY29uc3Qgc2xpY2UgPSBbXS5zbGljZTtcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgUkVRVUVTVF9SRVNVTFRTLCBNSUdSQVRJT05TLFxuICAgIFNjcmlwdCxcbiAgICBDb25maWd1cmFibGVNaXhpbixcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIG1ldGhvZCwgcHJvcGVydHksIG5hbWVCeSwgaW5qZWN0LCBtaXhpbixcbiAgICBVdGlsczogeyByZXF1ZXN0IH1cbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgQG1peGluKENvbmZpZ3VyYWJsZU1peGluKVxuICBjbGFzcyBEYWVtb25TY3JpcHQ8IEQgPSBSZWNvcmRJbnRlcmZhY2UgPiBleHRlbmRzIFNjcmlwdCB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBpbmplY3QoYEZhY3Rvcnk8JHtSRVFVRVNUX1JFU1VMVFN9PmApXG4gICAgQHByb3BlcnR5IF9yZXN1bHRzRmFjdG9yeTogKCkgPT4gQ29sbGVjdGlvbkludGVyZmFjZTxEPjtcbiAgICBAcHJvcGVydHkgZ2V0IF9yZXN1bHRzKCk6IENvbGxlY3Rpb25JbnRlcmZhY2U8RD4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3Jlc3VsdHNGYWN0b3J5KClcbiAgICB9XG5cbiAgICBAaW5qZWN0KGBGYWN0b3J5PCR7TUlHUkFUSU9OU30+YClcbiAgICBAcHJvcGVydHkgX21pZ3JhdGlvbnNGYWN0b3J5OiAoKSA9PiBDb2xsZWN0aW9uSW50ZXJmYWNlPEQ+O1xuICAgIEBwcm9wZXJ0eSBnZXQgX21pZ3JhdGlvbnMoKTogQ29sbGVjdGlvbkludGVyZmFjZTxEPiB7XG4gICAgICByZXR1cm4gdGhpcy5fbWlncmF0aW9uc0ZhY3RvcnkoKTtcbiAgICB9XG5cbiAgICBAbWV0aG9kIGFzeW5jIGNoZWNrU2NoZW1hVmVyc2lvbigpOiBib29sZWFuIHtcbiAgICAgIGNvbnN0IG1pZ3JhdGlvbk5hbWVzID0gdGhpcy5BcHBsaWNhdGlvbk1vZHVsZS5OUy5NSUdSQVRJT05fTkFNRVM7XG4gICAgICBjb25zdCBbIGxhc3RNaWdyYXRpb24gXSA9IHNsaWNlLmNhbGwobWlncmF0aW9uTmFtZXMsIC0xKTtcbiAgICAgIGlmIChsYXN0TWlncmF0aW9uID09IG51bGwpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX21pZ3JhdGlvbnMuaW5jbHVkZXMobGFzdE1pZ3JhdGlvbik7XG4gICAgfVxuXG4gICAgQG1ldGhvZCBhc3luYyBib2R5KGRhdGE6ID9hbnkpOiBQcm9taXNlPD9hbnk+IHtcbiAgICAgIGlmICghIGF3YWl0IHRoaXMuY2hlY2tTY2hlbWFWZXJzaW9uKCkpIHJldHVybjtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcXVlc3QoXCJHRVRcIiwgdGhpcy5jb25maWdzLnVybCk7XG4gICAgICBhd2FpdCB0aGlzLl9yZXN1bHRzLmNyZWF0ZSh7XG4gICAgICAgIGJvZHk6IHJlc3VsdC5ib2R5LFxuICAgICAgICBoZWFkZXJzOiByZXN1bHQuaGVhZGVycyxcbiAgICAgICAgc3RhdHVzOiByZXN1bHQuc3RhdHVzLFxuICAgICAgICBtZXNzYWdlOiByZXN1bHQubWVzc2FnZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuICdjb21wbGVhdGVkJztcbiAgICB9XG4gIH1cbn1cbiJdfQ==