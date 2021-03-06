var moveZeros = function (arr) {
  var result = [];
  var zeros = [];

  for (var i in arr) {
    if (arr[i] === 0) {
      zeros.push(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
  return result.concat(zeros);
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])); //returns[false,1,1,2,1,3,"a",0,0]
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1])); //returns [1,2,1,1,3,1,0,0,0,0]
