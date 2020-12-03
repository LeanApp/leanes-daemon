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

import type { DaemonProxyInterface } from '../interfaces/DaemonProxyInterface';

export default (Module) => {
  const {
    SIMPLE_PROXY,
    Script,
    initialize, partOf, meta, method, property, nameBy, inject
  } = Module.NS;

  @initialize
  @partOf(Module)
  class DaemonScript extends Script {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @inject(`Factory<${SIMPLE_PROXY}>`)
    @property _daemonProxyFactory: () => DaemonProxyInterface;
    @property get _daemonProxy(): DaemonProxyInterface {
      return this._daemonProxyFactory()
    }

    @method async body(data: ?any): Promise<?any> {
      console.log('DaemonScript execute()');
      this._daemonProxy.setData('');
      await this.send(MSG_TO_CONSOLE, this._daemonProxy.getData());
      return 'clearing compleated';
    }
  }
}
