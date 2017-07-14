/**
 * Created by Tsuki on 7/10/17.
 */
import * as core from './core'
import {debug, info, warn, error} from './logger'
import {readConfig, writeConfig, configExists} from './SimConfig'
import * as program from 'commander';
program
    .version('0.1.0')
    .command('init')
    .description('Initialize or update simhex config')
    .action(() => {
        if (configExists()) {
            info('config existed');
        } else {
            debug('init config');
            writeConfig();
        }
    });

program
    .command('sync')
    .description('Initialize or update simhex config')
    .action(() => {
        let config = readConfig();
        debug('config:%O', config);

    });

program.parse(process.argv);