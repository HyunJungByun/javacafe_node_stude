var array = ['node.js', {}, 10, true];
var node = array[0];
var obj = array[1];
var bool =array[array.length - 1];

// 아래와 같이 변경 가능

const array = ['node.js', {}, 10, true];
const [node, obj, , bool] = array;
