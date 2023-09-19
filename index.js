const path = "data.json"
const file = Bun.file(path)

const stream = await file.stream();

console.log(stream)

for await (const chunk of stream){
    console.log(chunk)
}

// import { watch } from "fs";

// const watcher = watch(import.meta.dir, (event, filename) => {
//     console.log(`Detected ${event} in ${filename}`)
// })

// const path = "data.json"
// const file = Bun.file(path)

// const buffer = await file.arrayBuffer();

// console.log(buffer)

// // const arrayBuffer = await file.arrayBuffer();
// // const byteArray = new Uint8Array(arrayBuffer)
// // console.log(byteArray[0])

// // console.log(byteArray.length)

// // console.log(file.type)

// // const contents = await file.json()

// // console.log(contents)
// // console.log(file.type)
// // console.log(await file.exists())

// // const arrBuffer = await file.arrayBuffer();
// // const buffer = Buffer.from(arrBuffer)

// // console.log(buffer)
// // const text = await file.text()

// // console.log(text)
