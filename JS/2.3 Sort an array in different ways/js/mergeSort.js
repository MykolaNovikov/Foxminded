import { mockData, sortDataBy } from './utils.js';

'use strict';

const mergeSort = (arr) => {

    if (arr.length <= 1) {
        return arr
    } else {
        if (Array.isArray(arr)) {

            let middle = Math.floor(arr.length / 2);
            let left = arr.slice(0, middle);
            let right = arr.slice(middle)

            return merge(mergeSort(left), mergeSort(right))
        }
    }
}

const merge = (left, right) => {
    let sortedArr = [];

    while (left.length && right.length) {
          
        if (left[0] <= right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr, ...left, ...right]
}

sortDataBy(mergeSort, 'mergeSort' , mockData)
