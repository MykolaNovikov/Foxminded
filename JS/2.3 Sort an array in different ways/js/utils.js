'use strict';

const mockData = [];

for (let i = 0; i < 100; i++) {
    mockData.push(Math.round(Math.random() * 100))
}

const sortDataBy = (selectionSort, idSort, mockData) => {
    const start= performance.now();
    selectionSort(mockData);
    const end = performance.now();
    const formattedArr = mockData.map(num => num.toString()).join(', ');

    const content = `<p>Sorted random array by ${idSort}: [${formattedArr}]</p>
                    <pre>Time of filtering by this method: ${end - start}ms</pre>`

    document.getElementById(`${idSort}`).innerHTML = content
    document.addEventListener('DOMContentLoaded', selectionSort);
}

export {mockData, sortDataBy}