/**
 * Created by Tsuki on 7/10/17.
 */
import * as core from './core'
import * as config from './simConfig'
import * as debug from 'debug';
import * as program from 'commander';
debug.enable('main');
const log: debug.IDebugger = debug('main');

program
    .version('0.1.0')
    .command('init')
    .description('Initialize or update simhex config')
    .action(() => {
        log('ini');
        if (config.configExists()) {
            log('init yes')
        } else {
            log('init not')
        }
    });

program.parse(process.argv);