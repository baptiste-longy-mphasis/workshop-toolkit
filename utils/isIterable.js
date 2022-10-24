isIterable = (schema, node) => {
    if (schema[node] === null || schema[node] === undefined || typeof schema[node] === 'string') {
        return false
    }

    return schema.propertyIsEnumerable(node)
}

module.exports = {
    isIterable
}