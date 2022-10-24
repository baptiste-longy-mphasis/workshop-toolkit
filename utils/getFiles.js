let fs = require('fs')
let path = require('path')

getFiles = (dir, files) => {
    const dirents = fs.readdirSync(dir, { withFileTypes: true });
    for (const dirent of dirents) {
        const res = path.resolve(dir, dirent.name);
        if (dirent.isDirectory()) {
            getFiles(res, files);
        } else {
            if (dirent.name.startsWith("schema") && dirent.name.endsWith(".js")) {
                files.push({ directory: dir, path: res })
            }
        }
    }
}

module.exports = {
    getFiles
}