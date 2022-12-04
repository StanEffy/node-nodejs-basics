import exists from "./exists.js";
import fs from "fs";

const create = async () => {
    const path = "./src/fs/fresh.txt"

    const exist = await exists(path);

    if(!exist){
        fs.writeFile(path, 'I am fresh and young', 'utf8', () => {});
    } else {
        throw new Error("FS operation failed")
    }
};

await create();