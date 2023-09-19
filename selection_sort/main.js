function selectionSort( arr ) { 
    const len = arr.length;
    const swap = (arr, idx1, idx2) => 
    ([arr[idx1], arr[idx2]] = [arr[idx2] , arr[idx1]]);

    for(let i =0; i < len; i++) {
        let idxOfMin = i;
        for(let j = i+1; j < len; j++) {
            if(arr[j] < arr[idxOfMin]) {
                idxOfMin = j;
                console.log(idxOfMin);
            }
        }
        swap(arr, idxOfMin, i);
    }
    return arr;
}

const array = [64,25,12,22,11];
const sorted = selectionSort(array);

console.log(`The sorted array ${sorted}.`);