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

console.log('>>>>QQQQ 000-+911*');

import LeanES from '__LeanES__';
import FsUtilsAddon from '__FsUtilsAddon__';
import ConfigurableAddon from '__ConfigurableAddon__';
import {
  default as MapperAddon, MigratableModule, loadMigrations
} from '__MapperAddon__';
import MongoAddon from '__MongoAddon__';

const { initialize, meta, nameBy, resolver, constant, plugin, loadFiles } = LeanES.NS;

console.log('>>>>QQQQ 111+');

@initialize
@loadFiles
@loadMigrations
@plugin(MongoAddon)
@plugin(MigratableModule)
@plugin(MapperAddon)
@plugin(ConfigurableAddon)
@plugin(FsUtilsAddon)
@resolver(require, name => require(name))
class DaemonApp extends LeanES {
  @nameBy static  __filename = 'DaemonApp';
  @meta static object = {};
  @constant ROOT = __dirname;
  @constant MAKE_REQUEST = 'MAKE_REQUEST';
  @constant MONGO_ADAPTER = 'MongoAdapter';
  @constant REQUEST_RESULTS = 'RequestResultsCollection';
};


console.log('>>>>QQQQ 222');
const initialState = {};
const app = DaemonApp.NS.MainApplication.new(initialState);
console.log('>>>>QQQQ 333');
app.start();
console.log('>>>>QQQQ 444');
const { ERROR, DEBUG, LEVELS, SEND_TO_LOG } = DaemonApp.NS.Pipes.NS.LogMessage;
app.setLogLevelMethod(DEBUG);
console.log('>>>>QQQQ 1010+1++');

console.log('>>>>QQQQ 444++', ERROR, DEBUG, LEVELS, SEND_TO_LOG);
app.send(
  SEND_TO_LOG, 'Hello world', LEVELS[DEBUG]
);
console.log('>>>>QQQQ 555');

export default app;
