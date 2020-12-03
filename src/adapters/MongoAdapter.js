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

import type { DriverInterface } from '../interfaces/DriverInterface';

export default (Module) => {
  const {
    Adapter,
    ConfigurableMixin,
    MongoAdapterMixin,
    initialize, partOf, meta, property, nameBy, mixin,
  } = Module.NS;

  @initialize
  @partOf(Module)
  @mixin(MongoAdapterMixin)
  @mixin(ConfigurableMixin)
  class MongoAdapter extends Adapter implements DriverInterface {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @property get host(): string {
      return this.configs[this.getName()].host;
    };

    @property get port(): string {
      return this.configs[this.getName()].port;
    };

    @property get dbName(): string {
      return this.configs[this.getName()].dbName;
    };

    @property get username(): ?string {
      return this.configs[this.getName()].username;
    };

    @property get password(): ?string {
      return this.configs[this.getName()].password;
    };
  }
}