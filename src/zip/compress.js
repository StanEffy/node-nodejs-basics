import * as zlib from "zlib";
import fs from "fs";

const compress = async () => {
    const gzipStream = zlib.createGzip();

    const readStream = fs.createReadStream("./src/zip/files/fileToCompress.txt");
    const writeStream = fs.createWriteStream("./src/zip/files/archive.gz");

    readStream.pipe(gzipStream).pipe(writeStream);
};

await compress();