import fs from "fs";

const read = async (path) => {
   await  fs.readFile('./src/hash/files/fileToCalculateHashFor.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        return data;
    });
}

export {read}