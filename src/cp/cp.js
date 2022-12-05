import {spawn} from "child_process"

const spawnChildProcess = async (args) => {
    const child = spawn("node ./src/cp/files/script.js", args, {
        stdio: 'inherit'
    });

};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['.', '-type', 'f']);
