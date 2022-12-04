import { createHash } from 'node:crypto'
import fs from "fs";

const calculateHash = async () => {
    fs.readFile('./src/hash/files/fileToCalculateHashFor.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(createHash('sha256').update(data).digest('hex'));
    });
};

await calculateHash();