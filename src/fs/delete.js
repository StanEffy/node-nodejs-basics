import exists from "./exists.js";
import fs from "fs";

const remove = async () => {
    const exist = await exists("./src/fs/files/fileToRemove.txt");

    if(exist){
        await fs.unlink("./src/fs/files/fileToRemove.txt", (e) => console.log(e))
    } else {
        throw new Error("FS operation failed")
    }
};

await remove();