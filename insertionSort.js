function insertionSort(array) {
  
    for (let i = 1; i < array.length; i++) {
      let current = array[i]

      for (var x = i - 1; x >= 0 && array[x] > current; x--){
        array[x + 1] = array[x];
      }

      array[x + 1] = current;
  
    }
  
    return array;
  
  }
  
  console.log(insertionSort[1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])