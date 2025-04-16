const fs = require('fs');

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
fs.mkdirSync("my-docs/a/b", { recursive: true });


// console.log("New File Created Successfully");