"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.RecordInterface = void 0;

var _flowRuntime = _interopRequireDefault(require("flow-runtime"));

// This file is part of leanes-mapper-addon.
//
// leanes-mapper-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-mapper-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-mapper-addon.  If not, see <https://www.gnu.org/licenses/>.
// import type { CollectionInterface } from './CollectionInterface';
// import type { RecordStaticInterface } from './RecordStaticInterface';
const RecordInterface = _flowRuntime.default.type("RecordInterface", RecordInterface => {
  return _flowRuntime.default.object(_flowRuntime.default.property("parseRecordName", _flowRuntime.default.function(_flowRuntime.default.param("asName", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.tuple(_flowRuntime.default.string(), _flowRuntime.default.string())))), _flowRuntime.default.property("findRecordByName", _flowRuntime.default.function(_flowRuntime.default.param("asName", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.Class(_flowRuntime.default.existential())))), _flowRuntime.default.property("save", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", RecordInterface)))), _flowRuntime.default.property("create", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", RecordInterface)))), _flowRuntime.default.property("update", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", RecordInterface)))), _flowRuntime.default.property("delete", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.union(_flowRuntime.default.void(), RecordInterface))))), _flowRuntime.default.property("destroy", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void())))), _flowRuntime.default.property("attributes", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("object")))), _flowRuntime.default.property("clone", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", RecordInterface)))), _flowRuntime.default.property("copy", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", RecordInterface)))), _flowRuntime.default.property("decrement", _flowRuntime.default.function(_flowRuntime.default.param("asAttribute", _flowRuntime.default.string()), _flowRuntime.default.param("step", _flowRuntime.default.nullable(_flowRuntime.default.number())), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", RecordInterface)))), _flowRuntime.default.property("increment", _flowRuntime.default.function(_flowRuntime.default.param("asAttribute", _flowRuntime.default.string()), _flowRuntime.default.param("step", _flowRuntime.default.nullable(_flowRuntime.default.number())), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", RecordInterface)))), _flowRuntime.default.property("toggle", _flowRuntime.default.function(_flowRuntime.default.param("asAttribute", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", RecordInterface)))), _flowRuntime.default.property("updateAttribute", _flowRuntime.default.function(_flowRuntime.default.param("name", _flowRuntime.default.string()), _flowRuntime.default.param("value", _flowRuntime.default.nullable(_flowRuntime.default.any())), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", RecordInterface)))), _flowRuntime.default.property("updateAttributes", _flowRuntime.default.function(_flowRuntime.default.param("aoAttributes", _flowRuntime.default.ref("object")), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", RecordInterface)))), _flowRuntime.default.property("isNew", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.boolean())))), _flowRuntime.default.property("reload", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", RecordInterface)))), _flowRuntime.default.property("changedAttributes", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.object(_flowRuntime.default.indexer("key", _flowRuntime.default.string(), _flowRuntime.default.tuple(_flowRuntime.default.nullable(_flowRuntime.default.any()), _flowRuntime.default.nullable(_flowRuntime.default.any())))))))), _flowRuntime.default.property("resetAttribute", _flowRuntime.default.function(_flowRuntime.default.param("asAttribute", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void())))), _flowRuntime.default.property("rollbackAttributes", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void())))));
});

exports.RecordInterface = RecordInterface;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyZmFjZXMvUmVjb3JkSW50ZXJmYWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRU87QUFBQSxTQUEyQiw0QkFDaEMsK0VBQWdCLHFDQUFRLDZCQUFSLENBQWhCLDhCQUFpQywyQkFBQyw2QkFBRCxFQUFTLDZCQUFULENBQWpDLEdBRGdDLEVBRWhDLGdGQUFpQixxQ0FBUSw2QkFBUixDQUFqQiw4QkFBa0MsMkJBQU0sa0NBQU4sQ0FBbEMsR0FGZ0MsRUFJaEMsZ0dBQVEsb0NBQVEsZUFBUixDQUFSLEdBSmdDLEVBS2hDLGtHQUFVLG9DQUFRLGVBQVIsQ0FBVixHQUxnQyxFQU1oQyxrR0FBVSxvQ0FBUSxlQUFSLENBQVYsR0FOZ0MsRUFPaEMsa0dBQVksb0NBQVEsd0RBQU8sZUFBUCxDQUFSLENBQVosR0FQZ0MsRUFRaEMsbUdBQVcsb0NBQVEsMkJBQVIsQ0FBWCxHQVJnQyxFQVNoQyxzR0FBYyxrQ0FBZCxHQVRnQyxFQVVoQyxpR0FBUyxvQ0FBUSxlQUFSLENBQVQsR0FWZ0MsRUFXaEMsZ0dBQVEsb0NBQVEsZUFBUixDQUFSLEdBWGdDLEVBWWhDLHlFQUFVLDBDQUFhLDZCQUFiLENBQVYsRUFBK0IsbUNBQU0sOEJBQUMsNkJBQUQsQ0FBTixDQUEvQiw4QkFBK0Msb0NBQVEsZUFBUixDQUEvQyxHQVpnQyxFQWFoQyx5RUFBVSwwQ0FBYSw2QkFBYixDQUFWLEVBQStCLG1DQUFNLDhCQUFDLDZCQUFELENBQU4sQ0FBL0IsOEJBQStDLG9DQUFRLGVBQVIsQ0FBL0MsR0FiZ0MsRUFjaEMsc0VBQU8sMENBQWEsNkJBQWIsQ0FBUCw4QkFBNkIsb0NBQVEsZUFBUixDQUE3QixHQWRnQyxFQWdCaEMsK0VBQWdCLG1DQUFNLDZCQUFOLENBQWhCLEVBQThCLG9DQUFPLDhCQUFDLDBCQUFELENBQVAsQ0FBOUIsOEJBQTRDLG9DQUFRLGVBQVIsQ0FBNUMsR0FoQmdDLEVBaUJoQyxnRkFBaUIsMkNBQWMsa0NBQWQsQ0FBakIsOEJBQXdDLG9DQUFRLGVBQVIsQ0FBeEMsR0FqQmdDLEVBa0JoQyxpR0FBUyxvQ0FBUSw4QkFBUixDQUFULEdBbEJnQyxFQW1CaEMsa0dBQVUsb0NBQVEsZUFBUixDQUFWLEdBbkJnQyxFQW9CaEMsNkdBQXFCLG9DQUFRLDRCQUFDLG9DQUFNLDZCQUFOLEVBQWUsMkJBQUMsOEJBQUMsMEJBQUQsQ0FBRCxFQUFPLDhCQUFDLDBCQUFELENBQVAsQ0FBZixDQUFELENBQVIsQ0FBckIsR0FwQmdDLEVBcUJoQyw4RUFBZSwwQ0FBYSw2QkFBYixDQUFmLDhCQUFxQyxvQ0FBUSwyQkFBUixDQUFyQyxHQXJCZ0MsRUFzQmhDLDhHQUFzQixvQ0FBUSwyQkFBUixDQUF0QixHQXRCZ0MsQ0FBM0I7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1tYXBwZXItYWRkb24uXG4vL1xuLy8gbGVhbmVzLW1hcHBlci1hZGRvbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1tYXBwZXItYWRkb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLW1hcHBlci1hZGRvbi4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbi8vIGltcG9ydCB0eXBlIHsgQ29sbGVjdGlvbkludGVyZmFjZSB9IGZyb20gJy4vQ29sbGVjdGlvbkludGVyZmFjZSc7XG4vLyBpbXBvcnQgdHlwZSB7IFJlY29yZFN0YXRpY0ludGVyZmFjZSB9IGZyb20gJy4vUmVjb3JkU3RhdGljSW50ZXJmYWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBSZWNvcmRJbnRlcmZhY2UgIHtcbiAgcGFyc2VSZWNvcmROYW1lKGFzTmFtZTogc3RyaW5nKTogW3N0cmluZywgc3RyaW5nXTtcbiAgZmluZFJlY29yZEJ5TmFtZShhc05hbWU6IHN0cmluZyk6IENsYXNzPCo+O1xuXG4gIHNhdmUoKTogUHJvbWlzZTxSZWNvcmRJbnRlcmZhY2U+O1xuICBjcmVhdGUoKTogUHJvbWlzZTxSZWNvcmRJbnRlcmZhY2U+O1xuICB1cGRhdGUoKTogUHJvbWlzZTxSZWNvcmRJbnRlcmZhY2U+O1xuICAnZGVsZXRlJygpOiBQcm9taXNlPHZvaWQgfCBSZWNvcmRJbnRlcmZhY2U+O1xuICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD47XG4gIGF0dHJpYnV0ZXMoKTogb2JqZWN0O1xuICBjbG9uZSgpOiBQcm9taXNlPFJlY29yZEludGVyZmFjZT47XG4gIGNvcHkoKTogUHJvbWlzZTxSZWNvcmRJbnRlcmZhY2U+O1xuICBkZWNyZW1lbnQoYXNBdHRyaWJ1dGU6IHN0cmluZywgc3RlcDogP251bWJlcik6IFByb21pc2U8UmVjb3JkSW50ZXJmYWNlPjtcbiAgaW5jcmVtZW50KGFzQXR0cmlidXRlOiBzdHJpbmcsIHN0ZXA6ID9udW1iZXIpOiBQcm9taXNlPFJlY29yZEludGVyZmFjZT47XG4gIHRvZ2dsZShhc0F0dHJpYnV0ZTogc3RyaW5nKTogUHJvbWlzZTxSZWNvcmRJbnRlcmZhY2U+O1xuICAvLyB0b3VjaCgpOiBQcm9taXNlPFJlY29yZEludGVyZmFjZT47XG4gIHVwZGF0ZUF0dHJpYnV0ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiA/YW55KTogUHJvbWlzZTxSZWNvcmRJbnRlcmZhY2U+O1xuICB1cGRhdGVBdHRyaWJ1dGVzKGFvQXR0cmlidXRlczogb2JqZWN0KTogUHJvbWlzZTxSZWNvcmRJbnRlcmZhY2U+O1xuICBpc05ldygpOiBQcm9taXNlPGJvb2xlYW4+O1xuICByZWxvYWQoKTogUHJvbWlzZTxSZWNvcmRJbnRlcmZhY2U+O1xuICBjaGFuZ2VkQXR0cmlidXRlcygpOiBQcm9taXNlPHtba2V5OiBzdHJpbmddOiBbP2FueSwgP2FueV19PjtcbiAgcmVzZXRBdHRyaWJ1dGUoYXNBdHRyaWJ1dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG4gIHJvbGxiYWNrQXR0cmlidXRlcygpOiBQcm9taXNlPHZvaWQ+O1xufVxuIl19