
const fs = require('fs/promises')

async function checkFolder() {
    try {
      const files = await fs.readdir("./my-folder");
      console.log(files);
    } catch (error) {
       console.log("ERROR:", error.message)
    }
}


async function readFolder() {
    try {
        const files = await fs.readdir("./my-folder");

        console.log(files)
    } catch (error) {
        console.log(error.message)
    }
}