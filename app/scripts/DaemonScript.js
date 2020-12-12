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
  var _dec, _dec2, _dec3, _dec4, _class, _class2, _init, _init2, _descriptor, _descriptor2, _class3, _temp;

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
  let DaemonScript = (_dec = partOf(Module), _dec2 = mixin(ConfigurableMixin), _dec3 = inject(`Factory<${REQUEST_RESULTS}>`), _dec4 = inject(`Factory<${MIGRATIONS}>`), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class DaemonScript extends Script {
    get _results() {
      return this._resultsFactory();
    }

    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "_resultsFactory", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "_migrationsFactory", _descriptor2, this);
    }

    get _migrations() {
      return this._migrationsFactory();
    }

    async checkSchemaVersion() {
      const migrationNames = this.ApplicationModule.NS.MIGRATION_NAMES;
      const [lastMigration] = slice.call(migrationNames, -1);
      if (lastMigration == null) return true;
      return await this._migrations.includes(lastMigration);
    }

    async body(data) {
      if (!(await this.checkSchemaVersion())) return;
      const result = await request("GET", this.configs.url);
      await this._results.create({
        body: result.body,
        headers: result.headers,
        status: result.status,
        message: result.message
      });
      return 'compleated';
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
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_resultsFactory", [_dec3, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_results", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_results"), _class2.prototype), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_migrationsFactory", [_dec4, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_migrations", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_migrations"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "checkSchemaVersion", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "checkSchemaVersion"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "body", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "body"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;