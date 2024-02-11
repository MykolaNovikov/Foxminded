import {mockData, sortDataBy} from './utils.js'

'use strict';

const bubbleSort = (arr) => {
    
    if (arr.length <= 1) {
        return arr
    }

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - 1 - i; j++) {

            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }

}

sortDataBy(bubbleSort, 'bubbleSort' , mockData)

