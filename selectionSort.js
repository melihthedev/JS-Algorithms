function selectionSort(array) {

    let lengthOfArr = array.length
    let containerArr = new Array()
  
    for(let i = 0; i < lengthOfArr; i++) {
      let index = array.indexOf(Math.min(...array))
      let holder = array.splice(index,1)
  
      containerArr.push(parseInt(holder))
      
  
    }
  
    return containerArr;
  
  }
  
  console.log(selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))
  //[ 1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643 ]