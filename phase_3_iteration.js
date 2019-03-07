

Array.prototype.bubbleSort = function() {
  let sorted = false; 

  while (!sorted) {
    sorted = true; 
    for (let  i = 0; i < this.length-1; i++) {
      if (this[i] > this[i+1]) {
        [this[i], this[i+1]] = [this[i+1], this[i]]
        sorted = false;
      }
    }

  }
  return this;
};
console.log(
[3,2,1].bubbleSort()
);


// 

String.prototype.substrings = function() {
  ansArr = [];
  chars = this.split("");
  for (let i = 0; i < chars.length; i++) {
    remChars = chars.slice(i)
    for(let j = i+1; j < chars.length + 1; j++) {
      ansArr.push(chars.slice(i,j).join(""))
    }
  }
  return ansArr;
};

console.log("abc".substrings());