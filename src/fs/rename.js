import exists from "./exists.js";
import fs from "fs";

const rename = async () => {
    const existFrom = await exists("./src/fs/files/wrongFilename.txt");
    const existTo = await exists("./src/fs/files/properFilename.md");

    if(existFrom && !existTo){
        fs.rename("./src/fs/files/wrongFilename.txt", "./src/fs/files/properFilename.md", (e) => console.log(e))
    } else {
        throw new Error("FS operation failed")
    }
};

await rename();