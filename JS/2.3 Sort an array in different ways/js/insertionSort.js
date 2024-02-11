import {mockData, sortDataBy} from './utils.js'

'use strict';

const insertionSort = (arr) => {
    
    if (arr.length <= 1) {
        return arr
    }

    for (let i = 1; i < arr.length; i++) {
        let tmp = arr[i];
        let j = i - 1;

        for (j = i - 1; j >= 0 && arr[j] > tmp; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = tmp
    }
}

sortDataBy(insertionSort, 'insertionSort' , mockData)