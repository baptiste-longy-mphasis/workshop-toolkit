let fs = require('fs')

getSchemaObjFromFile = (fileNameAndPath) => {
    try {
    let schemaAsText = fs.readFileSync(fileNameAndPath)
    let schemaAsString = schemaAsText.toString()
    
    schemaAsString = schemaAsString.substring(15)
    
    let schema = eval('(' + schemaAsString + ')')
    
    return schema
    } catch (e) {
        debugger
    }

}

module.exports = {
    getSchemaObjFromFile
}