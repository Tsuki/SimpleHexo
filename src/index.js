/**
 * Created by Tsuki on 7/7/17.
 */

import {Client} from "simperium";
import * as _debug from "debug";
const appname = 'chalk-bump-f49';
const debug = _debug('main');
const token = process.env.SIMPERIUM_APP_ID;
const client = Client(appname, token);
debug('client: %s', client);
