import fsp from 'fs/promises';
import fs from 'fs';
import util from 'util';

//* Use on async callback style function
const readFIleToPromise = util.promisify(fs.readFile);

async function main(){
    let first = await fsp.readFile('./content/first_file.txt', 'utf-8');
    let second = await readFIleToPromise('./content/second_file.txt', 'utf-8');
    console.log(first, second);
}

console.log("top text");
main();
console.log("bottom text");
