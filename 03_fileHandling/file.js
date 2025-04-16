const fs = require('fs');
const os = require("os");

console.log(os.cpus().length)

// Sync...
// fs.writeFileSync("./test.txt", "Do Something Great...");

// Async
// fs.writeFile("./test.txt", "Created via Async", (error) => { });

// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);   

// fs.readFile("./contact.txt", "utf-8", (error, result) => {
//     if (error) {
//         console.log("Error:", error);
//     } else {
//         console.log(result);
//     };
// })


// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

// fs.appendFileSync("./test.txt", `${Date.now()}Hello Everyone!\n`);

// fs.cpSync("./contact.txt", "copy.txt");

// fs.unlinkSync("./copy.txt");

// console.log(fs.statSync("./test.txt"));

// fs.mkdirSync("my-docs");
// fs.mkdirSync("my-docs/a/b", { recursive: true });


// console.log("New File Created Successfully");


// Blocking...
// console.log(1);
// const result = fs.readFileSync("contact.txt", "utf-8");
// console.log(result);
// console.log(2);

// Non-Blocking
// fs.readFile("contact.txt", "utf-8", (error, result) => {
//     console.log(result);
// });

// console.log(1);
// console.log(2);
// console.log(3);


// Default Threads Pool Size = 4
// Max ? - 8core cpu -8 