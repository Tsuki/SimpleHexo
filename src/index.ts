/**
 * Created by Tsuki on 7/10/17.
 */
import debug = require("debug");
import request = require('request-promise');
const log: debug.IDebugger = debug('main');
const appName: string = 'chalk-bump-f49';
const token: string = process.env.SIMPERIUM_APP_SECRET;
const options = {
    method: 'GET',
    url: `https://api.simperium.com/1/${appName}/note/index`,
    qs: {data: '1'},
    headers: {'x-simperium-token': token},
    json: true
};

request(options).then(function (json) {
    log(json.index)
});