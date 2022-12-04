import fs from "fs"
import exists from "./exists.js";

const copy = async () => {
    const existFrom = await exists("./src/fs/files");
    const existTo = await exists("./src/fs/files_copy");

    if(existFrom && !existTo){
        fs.mkdirSync("./src/fs/files_copy")
        await fs.cp("./src/fs/files", "./src/fs/files_copy", {recursive: true},(err) => console.log(err));
    } else {
        throw new Error("FS operation failed")
    }
};

await copy();
