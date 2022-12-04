
import fs from "fs";

const read = async () => {
    const readerStream = fs.createReadStream('./src/streams/files/fileToRead.txt');
    readerStream.setEncoding('UTF8');

    let data = "";
    readerStream.on('data', function(chunk) {
        data += chunk;
    });

    readerStream.on('end',function() {
        console.log(data);
    });

    readerStream.on('error', function(err) {
        console.log(err.stack);
    });
};

await read();