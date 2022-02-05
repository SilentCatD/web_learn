import { readFileSync , writeFileSync} from "fs";

const first = readFileSync('./content/first_file.txt','utf-8');
const second = readFileSync('./content/second_file.txt', 'utf-8');

console.log(first);
console.log(second);


writeFileSync('./content/result-sync.txt', `${first}, ${second}`, {"flag": 'a'});
console.log("print statement");