

Array.prototype.myEach = function(func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }
};  


// [1,2,3].myEach(function(x) {
//   console.log(x * 2);
// });


Array.prototype.myMap = function (func) {
  const newArr = [];

  this.myEach(function(ele) {
    newArr.push(func(ele));
  });

  return newArr;
};  

// console.log(
// [1, 2, 3].myMap(function (x) {
//   return x * 2;
// }));

 Array.prototype.myReduce = function(func, acc = null) {
  let i = 0;
  if (acc === null) {
    acc = this[0];
    i = 1;
    
  }

  arr = this.slice(i);
  arr.myEach(function(ele) {
    acc = func(acc, ele);
  });

  return acc;
};

console.log(
  [1,2,3].myReduce(function(x, acc) {
    return x + acc;
  }, 1)
);


