/**
 * Created by Tsuki on 7/10/17.
 */
import * as core from './core'
import {debug, info, warn, error} from './logger'
import * as config from './simConfig'
import * as program from 'commander';
program
    .version('0.1.0')
    .command('init')
    .description('Initialize or update simhex config')
    .action(() => {
        if (config.configExists()) {
            info('config existed')
        } else {
            info('config existed2');
            config.write();
        }
    });

program
    .command('sync')
    .description('Initialize or update simhex config')
    .action(() => {

    });

program.parse(process.argv);