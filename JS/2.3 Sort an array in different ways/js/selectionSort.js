import { mockData, sortDataBy } from './utils.js';

'use strict';

const selectionSort = (arr) => {

    if (arr.length <= 1) {
        return arr
    }

    for (let j = 0; j < arr.length - 1; j++) {
        let max = -Infinity;
        let index = null;

        for (let i = 0; i < arr.length - j; i++) {
            if (arr[i] > max) {
                max = arr[i];
                index = i
            }
        }

        let tmp = arr[arr.length - 1 - j];
        arr[arr.length - 1 - j] = max;
        arr[index] = tmp
    }
}

sortDataBy(selectionSort, 'selectionSort' , mockData)