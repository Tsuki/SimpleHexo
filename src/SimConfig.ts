/**
 * Created by Tsuki on 7/10/17.
 */
import * as fs from "fs";
import * as path from "path";
import * as os from "os";
import * as yaml from "js-yaml";
import {debug, info, warn, error} from './logger'

export class SimConfig {
    public tag: string = '';
    public hexoPath: string = '';

    public constructor(init?: Partial<SimConfig>) {
        Object.assign(this, init);
    }
}
export function readConfig(): SimConfig {
    try {
        let contents = fs.readFileSync(filePath(), 'utf8');
        return yaml.safeLoad(contents);
    } catch (err) {
        console.log(err.stack || String(err));
    }
}

export function writeConfig(config?: SimConfig): void {
    try {
        if (config == null) {
            config = new SimConfig();
        }
        let result = yaml.safeDump(config);
        debug("config:%O", config);
        fs.writeFileSync(filePath(), result);
    } catch (err) {
        console.log(err.stack || String(err));
    }
}


export function configExists(mode?: number): boolean {
    try {
        fs.accessSync(filePath(), mode);
        return true;
    } catch (e) {
        return false;
    }
}

function filePath(): string {
    return path.join(getUserHome(), '.simhexrc.yml');
}

function getUserHome() {
    return os.homedir();
}

