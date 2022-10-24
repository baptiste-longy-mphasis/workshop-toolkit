let isIterable = require('./isIterable').isIterable

schemaIsOfSpecificGuidAndContainsSpecificProp = (schema, guid, propName) => {
    if (schema && schema.guid && schema.guid.includes(guid)) {
        if (schema.properties && schema.properties[propName]) {
            return true
        }
    }
    return false
}

findViewWithSpecificProp = (schema, guid, propName) => {
    for (let node in schema) {
        if (schemaIsOfSpecificGuidAndContainsSpecificProp(schema[node], guid, propName)) {
            return true
        } else {
            if (isIterable(schema, node)) {
                if (findViewWithSpecificProp(schema[node], guid, propName)) {
                    return true
                }
            }
        }
    }
    return false
}

findViewWithSpecificProps = (schema, guid, propNames) => {
    let missingProp
    for (let node in schema) {
        missingProp = false
        for (propName of propNames) {
            if (!schemaIsOfSpecificGuidAndContainsSpecificProp(schema[node], guid, propName)) {
                missingProp = true
            }
        }
        if (missingProp) {
            if (isIterable(schema, node)) {
                if (findViewWithSpecificProps(schema[node], guid, propNames)) {
                    return true
                }
            }
        } else {
            return true
        }
    }
    return false
}

module.exports = {
    schemaIsOfSpecificGuidAndContainsSpecificProp,
    findViewWithSpecificProp,
    findViewWithSpecificProps
}