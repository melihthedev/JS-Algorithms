function bubbleSort(array) {
    let n = array.length
  
    for(let x = 0; x < n; x++) {
  
        for(let y = 0; y < n - 1; y++) {
          if(array[y] > array[y+1]) {
            [array[y], array[y+1]] = [array[y+1], array[y]]
          }
  
        }
    }
  
    return array;
  
  }
  console.log(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))
  // [ 1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643 ]