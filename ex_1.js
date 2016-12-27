'use strict';
//Strings!

//Write a function that capitalizes the first string, lower cases the second string and then makes one string out of them
//eg: 'bat', 'slOth' -> 'BATsloth'
//eg: 'my', 'Bud' -> 'MYbud'

function capHalf(firstString, secondString) {
  //your code here!
  return firstString.toUpperCase() + secondString.toLowerCase();
}

//Write a function that takes a name and returns only the first initial capitalized with a period after it
//eg: 'mega man' -> 'M.'
//eg: 'sailor moon' -> 'S.'

function mainInitial(name) {
  //your code here!
  return name[0].toUpperCase() + '.'
}

//Write a function that reverses a string
//eg: 'sloth' -> 'htols'
//eg: 'bat' -> 'tab'

function reverseString(string) {
  //your code here!
  // split("") splits the string and indexes the letters into an array
  // reverse() reverses the letters' order in the array
  // join("") joins the array into a string
  return string.split("").reverse().join("");

/*
  var reverseStr;

  for (var i = 1; i <= string.length; i++){
      reverseStr += string[string.length-i];
  }

  return reverseStr;
  //reverseString('hello') returns undefinedolleh
}
*/
/*
  var reversed = '';
  for (var i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
*/
}

//Write a function that capitalizes the first letter of every word
//eg: 'no way that rules' -> 'No Way That Rules'
//eg: 'whatever sloths are the best' ->  'Whatever Sloths Are The Best'

function capitalizeEach(string) {
  //your code here!
  // string.split(" ") splits the string of words and indexes them in an array
  // .map goes through each index (word)
  // x[0].toUpperCase() takes the 0 index of x (first letter of the current word in the array) and uppercases it
  // x.slice(1) slices x (current word in the array) at the first index to separate the first letter from the rest of the word
  var capLetter0 = string.split(" ").map(function(x){
  return x[0].toUpperCase() + x.slice(1);
  })

  return capLetter0.join(" ")
}

/*
  var start = string;
  start = start.toLowerCase().split(' ');
  for (var i = 0; i < start.length; i++) {
    start[i] = start[i].charAt(0).toUpperCase() + start[i].slice(1);
  }

  var end = start.join(' ');
  return end;
}
*/
/*
  var allWords = string.split(' ');
  var newSentence = [];
  allWords.forEach(function(word){
  word = word.replace(word[0], word[0].toUpperCase());
  newSentence.push();
});
return newSentence.join(' ');
*/
/*
  //same as ^^above
  return string.split(' ').map(word => word.replace(word[0], word[0].toUpperCase())).join(' ');
*/

exports.capHalf = capHalf;
exports.mainInitial = mainInitial;
exports.reverseString = reverseString;
exports.capitalizeEach = capitalizeEach;
