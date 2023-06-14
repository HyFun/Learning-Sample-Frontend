// loader 本质上是一个函数
module.exports = function(content, map, meta){
    console.log(`333`);
    return content
}

module.exports.pitch = function() {
    console.log(`pitch:::333`);
}