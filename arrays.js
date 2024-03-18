'use strict';

// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(`${items[i]} ${i}`)
  }
}

// 2. everyOtherItem
function everyOtherItem(items) {
  const resultList = []

  for (const i in items) {
    if (i % 2 === 0) {
      resultList.push(items[i]);
      }
    }
  console.log(resultList)
  }

// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
}
