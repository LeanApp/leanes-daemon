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
    method,
    property,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhdG9ycy9BcHBsaWNhdGlvbk1lZGlhdG9yLmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIk1lZGlhdG9yIiwiQXBwbGljYXRpb25NZWRpYXRvck1peGluIiwiTWlncmF0aWZ5QXBwbGljYXRpb25NZWRpYXRvck1peGluIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJuYW1lQnkiLCJtZXRob2QiLCJwcm9wZXJ0eSIsIm1peGluIiwiTlMiLCJBcHBsaWNhdGlvbk1lZGlhdG9yIiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBRWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxRQURJO0FBRUpDLElBQUFBLHdCQUZJO0FBRXNCQyxJQUFBQSxpQ0FGdEI7QUFHSkMsSUFBQUEsVUFISTtBQUdRQyxJQUFBQSxNQUhSO0FBR2dCQyxJQUFBQSxJQUhoQjtBQUdzQkMsSUFBQUEsTUFIdEI7QUFHOEJDLElBQUFBLE1BSDlCO0FBR3NDQyxJQUFBQSxRQUh0QztBQUdnREMsSUFBQUE7QUFIaEQsTUFJRlYsTUFBTSxDQUFDVyxFQUpYO0FBRHlCLE1BV25CQyxtQkFYbUIsV0FReEJQLE1BQU0sQ0FBQ0wsTUFBRCxDQVJrQixVQVN4QlUsS0FBSyxDQUFDUCxpQ0FBRCxDQVRtQixVQVV4Qk8sS0FBSyxDQUFDUix3QkFBRCxDQVZtQixFQU94QkUsVUFQd0Isb0ZBT3pCLE1BSU1RLG1CQUpOLFNBSWtDWCxRQUpsQyxDQUkyQyxFQVhsQixVQVlQWSxVQVpPLEdBWU1BLFVBWk4sVUFhVkMsTUFiVSxHQWFELEVBYkMsMkVBWXRCUCxNQVpzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQWF0QkQsSUFic0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWUxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLWRhZW1vbi5cbi8vXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4vLyBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbi8vXG4vLyBTb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgYmFzaXMsXG4vLyBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yXG4vLyB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHJpZ2h0cyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIE1lZGlhdG9yLFxuICAgIEFwcGxpY2F0aW9uTWVkaWF0b3JNaXhpbiwgTWlncmF0aWZ5QXBwbGljYXRpb25NZWRpYXRvck1peGluLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgbmFtZUJ5LCBtZXRob2QsIHByb3BlcnR5LCBtaXhpblxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBAbWl4aW4oTWlncmF0aWZ5QXBwbGljYXRpb25NZWRpYXRvck1peGluKVxuICBAbWl4aW4oQXBwbGljYXRpb25NZWRpYXRvck1peGluKVxuICBjbGFzcyBBcHBsaWNhdGlvbk1lZGlhdG9yIGV4dGVuZHMgTWVkaWF0b3Ige1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG4gIH1cbn1cbiJdfQ==