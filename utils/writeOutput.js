let fs = require('fs');

writeOutput = (filename, content) => {
    let file = fs.createWriteStream(filename);
    file.on('error', function (err) { /* error handling */ });
    content.forEach(function (v) { file.write(v + '\n'); });
    file.end();
}

module.exports = {
    writeOutput
}