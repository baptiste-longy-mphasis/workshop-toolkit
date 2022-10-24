let isIterable = require('./isIterable').isIterable

findProp = (schema, propName) => {
    for (let node in schema) {
        if (node === propName) {
            return true
        } else {
            if (isIterable(schema,node)) {
                if (findProp(schema[node], propName)) {
                    return true
                }
            }
        }
    }
    return false
}

module.exports = {
    findProp
}