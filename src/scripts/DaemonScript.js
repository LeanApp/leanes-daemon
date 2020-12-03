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

import type { CollectionInterface } from '../interfaces/CollectionInterface';

export default (Module) => {
  const {
    REQUEST_RESULTS,
    Script,
    ConfigurableMixin,
    initialize, partOf, meta, method, property, nameBy, inject, mixin,
    Utils: { request }
  } = Module.NS;

  @initialize
  @partOf(Module)
  @mixin(ConfigurableMixin)
  class DaemonScript extends Script {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @inject(`Factory<${REQUEST_RESULTS}>`)
    @property _resultsCollectionFactory: () => CollectionInterface;
    @property get _resultsCollection(): CollectionInterface {
      return this._resultsCollectionFactory()
    }

    @method async body(data: ?any): Promise<?any> {
      console.log('DaemonScript execute()');
      // const result = await request("GET", this.configs.url, {headers: {'content-type': 'application/json'}});
      const result = await request("GET", this.configs.url);
      console.log('?>?>>', result);
      throw new Error('STOP')
      await this._resultsCollection.create({
        body: result.body,
        headers: result.headers,
        status: result.status,
        message: result.message,
      });
      return 'compleated';
    }
  }
}
