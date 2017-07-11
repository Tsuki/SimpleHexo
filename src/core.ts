/**
 * Created by Tsuki on 7/10/17.
 */


import request from 'request-promise';
import * as debug from 'debug';
const log: debug.IDebugger = debug('core');
const token: string = process.env.SIMPERIUM_APP_SECRET;

const options = {
    method: 'GET',
    url: 'https://api.simperium.com/1/chalk-bump-f49/note/index',
    qs: {data: '1'},
    headers: {'x-simperium-token': token},
    json: true
};

export function getSource() {
    request(options).then(function (json) {
        log(json.index);
        return json;
    });
}