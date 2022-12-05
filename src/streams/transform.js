import { Transform } from 'stream';

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, cb) {
            const reversed = chunk.toString().split('').reverse().join('');
            cb(null, reversed);
        }
    });

    process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();