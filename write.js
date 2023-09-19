const file = Bun.file("sample.txt")

await Bun.write("demo/sample.txt", file)


// const data = await fetch("https://google.com");
// const path = "sample.txt"
// await Bun.write(path, data)


// const path = "sample.txt";
// const file = Bun.file(path)

// const writer = file.writer()

// let myList = ["Hello", "I", "am", "Pratap"]

// myList.forEach(data => {
//     writer.write(data)
// })

// writer.end()





// await Bun.write(path, "Lorem Ipsum");

// const data = Bun.file("sample2.txt")
// await Bun.write(Bun.stdout, data)

// await Bun.write(path, "Hi i am new")

// await Bun.write(path, data)

// // import {unlinkSync} from "node:fs"
// import { unlink } from "node:fs/promises";

// const path = "sample.txt";
// // unlinkSync(path);
// await unlink(path)

// console.log("Hello Pratap")

// await Bun.write(Bun.stdout, "Hello Pratap\n")
