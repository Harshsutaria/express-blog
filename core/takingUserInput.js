//its stored inside process.argv
//1 items is the node env , second item is the file path , 3 onwards user input

console.log("taking user input ");
console.log(process.argv);
console.log(process.argv.slice(2, process.argv.length));
