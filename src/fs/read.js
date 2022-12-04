import exists from "./exists.js";
import fs from "fs";

const read = async () => {
    const existFrom = await exists("./src/fs/files/fileToRead.txt");

    if(existFrom){
        fs.readFile('./src/fs/files/fileToRead.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(data);
        });
    } else {
        throw new Error("FS operation failed")
    }
};

await read();