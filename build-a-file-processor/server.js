// Starter file — add your code here
const fs = require("fs")
// fs.readFile("assets/poem.txt", {
//     encoding :"utf-8"
// }, (err , data)=>{
//     console.log(data)
// })
// async function main(){
//     try{
//         const data = await fs.promises.readFile("assets/poem.txt" , "utf-8")
//         console.log(data)
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// main()
// fs.writeFileSync("assets/output.txt" , "Hello, freeCodeCamp!")
// fs.appendFileSync("assets/output.txt" , "\nHello It is Joe from freecodecamp")
// const exists = fs.existsSync("assets/output.txt");
// console.log(exists); 
// const buf = Buffer.from("Hello");
// console.log(buf.toString("hex")); // 48656c6c6f
// console.log(buf.toString("base64"));
// console.log(buf.toString("utf-8"))
const crypto = require("crypto");
const hash = crypto.createHash("sha256").update("hello").digest("hex");
console.log(hash);
const randomByte = crypto.randomBytes(12).toString("hex")
console.log(randomByte)
const os = require("os")
console.log(os.userInfo())
console.log(os.uptime())
console.log(os.freemem() / 2 **30)
console.log(os.totalmem() / 2 ** 30)
console.log(os.cpus().length)