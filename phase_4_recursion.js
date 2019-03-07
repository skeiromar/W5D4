function range (start, end) {

    if (start === end - 1) {
      return [start];
    }

    return [start].concat(range(start+1,end));
}

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumRec(arr.slice(1)); 
}

function exponent(base,exp) {
  if (exp === 0) {
    return 1;
  }
  else if (exp === 1) {
    return base;
  }
  else {
    return base * exponent(base, exp - 1);
  }
}

function exponent2(base,exp) {
  if (exp === 0) {
    return 1;
  }
  else if (exp === 1) {
    return base;
  }
  else if (exp % 2 === 0) {
    let half = exponent(base, exp / 2);
    return half * half;
  }
  else {
    let half = exponent(base, (exp - 1)/2);
    return half * half * base;
  }
}

function fibonacci(n) {
  if (n === 0) {
    return [];
  }
  if (n === 1) {
    return [1];
  }
  if (n === 2) {
    return [1, 1];
  }
  let fib = fibonacci(n - 1);
  return fib.concat([(fib[n - 2] + fib[n - 3])]);
}

console.log(fibonacci(5));

function deepDup(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      newArr.push(deepDup(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(deepDup([1, 2, [1, 2]]));
console.log(deepDup([1,2]))


function bsearch(arr, target) {
  const middle = Math.floor(arr.length / 2);
  if (arr[middle] === target) {
    return middle;
  }
  if (arr.length === 0) {
    return -1;
  }
  else if (arr[middle] < target) {
    const value = bsearch(arr.slice(middle + 1), target);
    if (value === -1) {
      return -1; 
    }else {
    return 1 + middle + value;
    }
  }
  else {
    return bsearch(arr.slice(0,middle), target);
  }
}

bsearch([1,2,3,4,5], 6);

function binarySearch(arr, target, start, end) {
  const mid = Math.floor((start + end) / 2);
  if (start >= end) {
    return -1; 
  } else if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, start + mid + 1, end);
  } else {
    return binarySearch(arr, target, start, end - mid);
  }


}