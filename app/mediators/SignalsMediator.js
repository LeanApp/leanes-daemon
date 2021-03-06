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

import { CronJob } from 'cron';

export default (Module) => {
  const {
    MAKE_REQUEST,
    Mediator,
    initialize, partOf, meta, nameBy, method, property, mixin
  } = Module.NS;

  @initialize
  @partOf(Module)
  class SignalsMediator extends Mediator {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @property _job = null;

    @method onRegister(): void  {
      super.onRegister();
      this._job = new CronJob('*/7 * * * * *', async () => {
        const result = await this.run(MAKE_REQUEST);
        // console.log(`Result from script: "${result}"`);
      }, null, true, 'America/Los_Angeles');
      this._job.start();
    }

    @method async onRemove(): Promise<void> {
      await super.onRemove();
      this._job.stop();
    }
  }
}
