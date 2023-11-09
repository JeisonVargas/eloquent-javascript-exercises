const range = (start, end, step) => {
  const result = [];

  if (start < end) {
    let myStep = step || 1;
    for (let i = start; i <= end; i += myStep) {
      result.push(i);
    }
  } else if (start > end) {
    let myStep = step || -1;
    for (let i = start; i >= end; i += myStep) {
      result.push(i);
    }
  }

  return result;
};

const sum = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));

const reverseArray = (arr) => {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
};

const reverseArrayInPlace = (arr) => {
  const copyArr = arr.slice();
  for (let i = 0; i < copyArr.length; i++) {
    arr[i] = copyArr[copyArr.length - 1 - i];
  }
};

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

const arrayToList = (arr) => {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = {
      value: arr[i],
      rest: list,
    };
  }
  return list;
};

const listToArray = (list) => {
  let arr = [];
  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
};

const prepend = (value, rest) => {
  return { value, rest };
};

const nth = (list, index) => {
  if (!list) return undefined;
  let arr = listToArray(list);
  return arr[index];
};

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));

const deepEqual = (objA, objB) => {
  if (objA === objB) return true;
  if (
    typeof objA != "object" ||
    objA == null ||
    typeof objB != "object" ||
    objB == null
  ) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length != keysB.length) return false;
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(objA[key], objB[key])) return false;
  }
  return true;
};

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
