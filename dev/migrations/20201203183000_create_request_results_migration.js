"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

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
  var _dec, _class, _class2, _init, _class3, _temp;

  const {
    BaseMigration,
    initialize,
    partOf,
    nameBy,
    meta,
    method
  } = Module.NS;
  let CreateRequestResultsMigration = (_dec = partOf(Module), initialize(_class = _dec(_class = (_class2 = (_temp = _class3 = class CreateRequestResultsMigration extends BaseMigration {
    static change() {
      const name = 'request_results';
      this.createCollection(name);
      this.addField(name, 'id', 'string');
      this.addField(name, 'type', 'string');
      this.addTimestamps(name);
      this.addField(name, 'body', 'string');
      this.addField(name, 'headers', 'json');
      this.addField(name, 'status', 'number');
      this.addField(name, 'message', 'string');
      this.addIndex(name, ['id'], {
        type: 'hash',
        unique: true
      });
    }

  }, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "object", [meta], (_init = Object.getOwnPropertyDescriptor(_class2, "object"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init;
    }
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2, "change", [method], Object.getOwnPropertyDescriptor(_class2, "change"), _class2)), _class2)) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZ3JhdGlvbnMvMjAyMDEyMDMxODMwMDBfY3JlYXRlX3JlcXVlc3RfcmVzdWx0c19taWdyYXRpb24uanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiQmFzZU1pZ3JhdGlvbiIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJuYW1lQnkiLCJtZXRhIiwibWV0aG9kIiwiTlMiLCJDcmVhdGVSZXF1ZXN0UmVzdWx0c01pZ3JhdGlvbiIsImNoYW5nZSIsIm5hbWUiLCJjcmVhdGVDb2xsZWN0aW9uIiwiYWRkRmllbGQiLCJhZGRUaW1lc3RhbXBzIiwiYWRkSW5kZXgiLCJ0eXBlIiwidW5pcXVlIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBRWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxhQURJO0FBRUpDLElBQUFBLFVBRkk7QUFFUUMsSUFBQUEsTUFGUjtBQUVnQkMsSUFBQUEsTUFGaEI7QUFFd0JDLElBQUFBLElBRnhCO0FBRThCQyxJQUFBQTtBQUY5QixNQUdGTixNQUFNLENBQUNPLEVBSFg7QUFEeUIsTUFRbkJDLDZCQVJtQixXQU94QkwsTUFBTSxDQUFDSCxNQUFELENBUGtCLEVBTXhCRSxVQU53QixzREFNekIsTUFFTU0sNkJBRk4sU0FFNENQLGFBRjVDLENBRTBEO0FBRXhELFdBQWVRLE1BQWYsR0FBd0I7QUFDdEIsWUFBTUMsSUFBSSxHQUFHLGlCQUFiO0FBQ0EsV0FBS0MsZ0JBQUwsQ0FBc0JELElBQXRCO0FBQ0EsV0FBS0UsUUFBTCxDQUFjRixJQUFkLEVBQW9CLElBQXBCLEVBQTBCLFFBQTFCO0FBQ0EsV0FBS0UsUUFBTCxDQUFjRixJQUFkLEVBQW9CLE1BQXBCLEVBQTRCLFFBQTVCO0FBQ0EsV0FBS0csYUFBTCxDQUFtQkgsSUFBbkI7QUFFQSxXQUFLRSxRQUFMLENBQWNGLElBQWQsRUFBb0IsTUFBcEIsRUFBNEIsUUFBNUI7QUFDQSxXQUFLRSxRQUFMLENBQWNGLElBQWQsRUFBb0IsU0FBcEIsRUFBK0IsTUFBL0I7QUFDQSxXQUFLRSxRQUFMLENBQWNGLElBQWQsRUFBb0IsUUFBcEIsRUFBOEIsUUFBOUI7QUFDQSxXQUFLRSxRQUFMLENBQWNGLElBQWQsRUFBb0IsU0FBcEIsRUFBK0IsUUFBL0I7QUFFQSxXQUFLSSxRQUFMLENBQWNKLElBQWQsRUFBb0IsQ0FBQyxJQUFELENBQXBCLEVBQTRCO0FBQUNLLFFBQUFBLElBQUksRUFBRSxNQUFQO0FBQWVDLFFBQUFBLE1BQU0sRUFBRTtBQUF2QixPQUE1QjtBQUNEOztBQWZ1RCxHQVJqQyxVQVNWQyxNQVRVLEdBU0QsRUFUQyx1RUFTdEJaLElBVHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBVXRCQyxNQVZzQjtBQXlCMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1kYWVtb24uXG4vL1xuLy8gbGVhbmVzLWRhZW1vbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1kYWVtb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLWRhZW1vbi4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIEJhc2VNaWdyYXRpb24sXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBuYW1lQnksIG1ldGEsIG1ldGhvZFxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBjbGFzcyBDcmVhdGVSZXF1ZXN0UmVzdWx0c01pZ3JhdGlvbiBleHRlbmRzIEJhc2VNaWdyYXRpb24ge1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcbiAgICBAbWV0aG9kIHN0YXRpYyBjaGFuZ2UoKSB7XG4gICAgICBjb25zdCBuYW1lID0gJ3JlcXVlc3RfcmVzdWx0cydcbiAgICAgIHRoaXMuY3JlYXRlQ29sbGVjdGlvbihuYW1lKVxuICAgICAgdGhpcy5hZGRGaWVsZChuYW1lLCAnaWQnLCAnc3RyaW5nJylcbiAgICAgIHRoaXMuYWRkRmllbGQobmFtZSwgJ3R5cGUnLCAnc3RyaW5nJylcbiAgICAgIHRoaXMuYWRkVGltZXN0YW1wcyhuYW1lKVxuXG4gICAgICB0aGlzLmFkZEZpZWxkKG5hbWUsICdib2R5JywgJ3N0cmluZycpXG4gICAgICB0aGlzLmFkZEZpZWxkKG5hbWUsICdoZWFkZXJzJywgJ2pzb24nKVxuICAgICAgdGhpcy5hZGRGaWVsZChuYW1lLCAnc3RhdHVzJywgJ251bWJlcicpXG4gICAgICB0aGlzLmFkZEZpZWxkKG5hbWUsICdtZXNzYWdlJywgJ3N0cmluZycpXG5cbiAgICAgIHRoaXMuYWRkSW5kZXgobmFtZSwgWydpZCddLCB7dHlwZTogJ2hhc2gnLCB1bmlxdWU6IHRydWV9KVxuICAgIH1cbiAgfVxufVxuIl19