// loader 本质上是一个函数
/**
 * 校验
 */
const {getOptions} = require('loader-utils')
const { validate } = require('schema-utils')

const validateJson = require('../validate/sample.json')
module.exports = function(content, map, meta){
    console.log(`111`);
    const options = getOptions(this)
    console.log(`loader-01 Options`, options);
    validate(validateJson, options, {
        name: 'loader-01'
    })

    return content
}

module.exports.pitch = function() {
    console.log(`pitch:::111`);
}