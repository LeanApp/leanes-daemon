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

export default (Module) => {
  const {
    Record,
    TimestampsRecordMixin,
    initialize, partOf, meta, nameBy, mixin, attribute
  } = Module.NS;

  @initialize
  @partOf(Module)
  @mixin(TimestampsRecordMixin)
  class RequestResultRecord extends Record {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @attribute({ type: 'string' }) body;
    @attribute({ type: 'json' }) headers;
    @attribute({ type: 'number' }) status;
    @attribute({ type: 'string' }) message;
  }
}
