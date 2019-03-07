

Array.prototype.uniq = function() {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (!newArr.includes(this[i])) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};


Array.prototype.twoSum = function () {
  const newArr = [];
  for (let i = 0; i < this.length-1; i++) {
    for (let j = (i+1); j < this.length; j++) {
      if ((this[i] + this[j]) === 0) {
        newArr.push([i,j]);
      }
    }
  }
  return newArr;
};

// console.log([1,2,-1].twoSum());

Array.prototype.transpose = function () {
  var newArr = [] 
  for(let a = 0; a < this[0].length; a++) {
    newArr[a] = new Array(this.length);
  }
  for (let i = 0; i < this.length; i++){
    for (let j = 0; j < this[i].length; j++){
      newArr[j][i] = this[i][j];
    }
  }
  return newArr;
};

console.log([[1,2,3],[4,5,6]].transpose());