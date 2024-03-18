'use strict';

// 1. countWords
function countWords(phrase) {
  const wordCounts = {};
  const splitPhrase = phrase.split(' ');

  for (const word of splitPhrase) {
    if (wordCounts[word]) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  }

  return wordCounts;

}

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melonPrices = {
    2.5: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas'],
  };
  if (!melonPrices[price]) {
    return null;
  }

  return melonPrices[price].sort();

}
