"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

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
  var _dec, _dec2, _dec3, _class, _class2, _init, _init2, _class3, _temp;

  const {
    Mediator,
    ApplicationMediatorMixin,
    MigratifyApplicationMediatorMixin,
    initialize,
    partOf,
    meta,
    nameBy,
    mixin
  } = Module.NS;
  let ApplicationMediator = (_dec = partOf(Module), _dec2 = mixin(MigratifyApplicationMediatorMixin), _dec3 = mixin(ApplicationMediatorMixin), initialize(_class = _dec(_class = _dec2(_class = _dec3(_class = (_class2 = (_temp = _class3 = class ApplicationMediator extends Mediator {}, _class3.__filename = __filename, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
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
  }), _class2)), _class2)) || _class) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhdG9ycy9BcHBsaWNhdGlvbk1lZGlhdG9yLmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIk1lZGlhdG9yIiwiQXBwbGljYXRpb25NZWRpYXRvck1peGluIiwiTWlncmF0aWZ5QXBwbGljYXRpb25NZWRpYXRvck1peGluIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJuYW1lQnkiLCJtaXhpbiIsIk5TIiwiQXBwbGljYXRpb25NZWRpYXRvciIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQUVnQkEsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsUUFESTtBQUVKQyxJQUFBQSx3QkFGSTtBQUVzQkMsSUFBQUEsaUNBRnRCO0FBR0pDLElBQUFBLFVBSEk7QUFHUUMsSUFBQUEsTUFIUjtBQUdnQkMsSUFBQUEsSUFIaEI7QUFHc0JDLElBQUFBLE1BSHRCO0FBRzhCQyxJQUFBQTtBQUg5QixNQUlGUixNQUFNLENBQUNTLEVBSlg7QUFEeUIsTUFXbkJDLG1CQVhtQixXQVF4QkwsTUFBTSxDQUFDTCxNQUFELENBUmtCLFVBU3hCUSxLQUFLLENBQUNMLGlDQUFELENBVG1CLFVBVXhCSyxLQUFLLENBQUNOLHdCQUFELENBVm1CLEVBT3hCRSxVQVB3QixvRkFPekIsTUFJTU0sbUJBSk4sU0FJa0NULFFBSmxDLENBSTJDLEVBWGxCLFVBWVBVLFVBWk8sR0FZTUEsVUFaTixVQWFWQyxNQWJVLEdBYUQsRUFiQywyRUFZdEJMLE1BWnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBYXRCRCxJQWJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZTFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtZGFlbW9uLlxuLy9cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbi8vIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuLy9cbi8vIFNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBiYXNpcyxcbi8vIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3Jcbi8vIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcmlnaHRzIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgTWVkaWF0b3IsXG4gICAgQXBwbGljYXRpb25NZWRpYXRvck1peGluLCBNaWdyYXRpZnlBcHBsaWNhdGlvbk1lZGlhdG9yTWl4aW4sXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBuYW1lQnksIG1peGluXG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIEBtaXhpbihNaWdyYXRpZnlBcHBsaWNhdGlvbk1lZGlhdG9yTWl4aW4pXG4gIEBtaXhpbihBcHBsaWNhdGlvbk1lZGlhdG9yTWl4aW4pXG4gIGNsYXNzIEFwcGxpY2F0aW9uTWVkaWF0b3IgZXh0ZW5kcyBNZWRpYXRvciB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcbiAgfVxufVxuIl19