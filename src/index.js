/**
 * Created by Tsuki on 7/7/17.
 */

import {Client} from "simperium";
import debug from "debug";
const _debug = debug('main');
const appName = 'chalk-bump-f49';
const token = process.env.SIMPERIUM_APP_SECRET;
const fn = async function (val) {
  return await Promise.resolve(val);
};
const client = new Client(appName, token);
const notes = client.bucket('note');

client.on('connect', function () {
  let notes = client.bucket('note');
  _debug(notes);
  client.end();
  // notes.on('index', function () {
  //   _debug(notes);
  //   client.disconnect();
  // })
});
