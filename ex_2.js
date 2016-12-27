'use strict';
//Arrays!

//Write a function that adds all the numbers in a given array and
//returns the total
//eg: [1, 2, 3] -> 6
//[3, 4, 1] -> 8
function addNumbers(array) {
  //your code here!
  function sum (a, b) {
    return a + b;
  }

  return array.reduce(sum)
};

//Write a function that tells you whether an array contains a given
//string
//eg: ['sloth', 'slug', 'salmon'], 'sloth' -> true
//    ['slugs are better whatever'], 'sloth' -> true

function hasItem(array, match) {
  //your code here
  var matchIt = function (a) {
    if (a === match) {
      return true;
    } else {
      return false;
    }
  }
  // .length === 0 (empty array), false boolean
  // .length === <0 (array with anything), true boolean
  // force type coersion into a boolean
  return !!(array.filter(matchIt).length);

  /*
    return array.includes(match)
  // OR
    return array.indexOf(match) !== -1
  */
  /*
  for (var i = 0; i < array.length; i++) {
    if (match !== array[i]) {
      return true;
    } else {
      return false;
    }
  }
  */
  /*

  if (match === array[i]) {
    return true;
  }
  */
};

//Write a function that tells you the highest value in a given array
//eg [2, 5, 9] -> 9
// [6, 4, 6] -> 6

function highestNumber(array) {
  //your code here
  var compare = function (a, b) {
    return a - b;
  }

  return array.sort(compare).pop(); // .pop will alter the array by removing the highest num.
  /* the long way
  return array.sort(function(a, b) {
    return a - b;
  }).pop(); */
};

//Write a function that adds an s to the end of each string in an array

//eg: ['sloth', 'slug', 'bat'] -> ['sloths', 'slugs', 'bats']
//eg: ['snakes', 'baby'] -> ['snakess', 'babys']
function pluralize(array) {
  //your code here
  var plurs = function (a) {
    return a + 's'
  }

  return array.map(plurs);
};

exports.addNumbers = addNumbers;
exports.hasItem = hasItem;
exports.highestNumber = highestNumber;
exports.pluralize = pluralize;
