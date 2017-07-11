/**
 * Created by Tsuki on 7/10/17.
 */
import * as fs from "fs";
import * as path from "path";
import * as os from "os";
import * as yaml from "js-yaml";

export class simConfig {

}
export function read(): simConfig {
    try {
        let contents = fs.readFileSync(filePath(), 'utf8');
        return yaml.safeLoad(contents);
    } catch (err) {
        console.log(err.stack || String(err));
    }
}

export function write(config?: simConfig): void {
    try {
        if (config == null) {
            config = new simConfig();
        }
        let result = yaml.safeDump(config);
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
    return path.join(getUserHome(), 'sample_document.yml');
}

function getUserHome() {
    return os.homedir();
}

