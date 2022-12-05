import fs from "fs";
import * as zlib from "zlib";

const decompress = async () => {
    const gunzipStream = zlib.createGunzip();

    const readStream = fs.createReadStream("./src/zip/files/archive.gz");
    const writeStream = fs.createWriteStream("./src/zip/files/fileToCompress.txt");

    readStream.pipe(gunzipStream).pipe(writeStream);
};

await decompress();