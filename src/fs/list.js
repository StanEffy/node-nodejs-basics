import fs from "fs";
import exists from "./exists.js";

const list = async () => {
    const existFrom = await exists("./src/fs/files");

    if(existFrom){
        fs.readdir("./src/fs/files", function (err, files) {
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            }
            files.forEach(function (file) {
                console.log(file);
            });
        });
    } else {
        throw new Error("FS operation failed")
    }
};

await list();