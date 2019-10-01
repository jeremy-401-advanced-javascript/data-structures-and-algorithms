'use strict';

function mostCommonWord(string) {
  if(string.length === 0) return null;
  let myString = string.split(' ');
    
  let wordTrack = {};
  let maxWord = myString[0] 
  let maxCount = 1;

  for(let i = 0; i < myString.length; i++) {
    let wordCount = myString[i];
    if(wordTrack[wordCount] == null) { 
      wordTrack[wordCount] = 1;
    } else {
      wordTrack[wordCount]++; 
      if(wordTrack[wordCount] > maxCount) {
        maxWord = wordCount;
      }
    }
  }
    return maxWord;
}

module.exports = mostCommonWord;