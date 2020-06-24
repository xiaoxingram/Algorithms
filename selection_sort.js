/*Selection Sort 选择排序*/
//        array  list
//reading O(1)    O(n)
//insert  O(n)    O(1)
//delete  O(n)    O(1)

// 1. Finds the smallest value in an array
function findSmallestIndex(arr){
  var smallestElement = arr[0];
  var smallestIndex = 0;
  for(var i = 1; i < arr.length; i++){
    if(smallestElement > arr[i]){
      smallestElement = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

// 2. Sort the array
function sortedArray(arr){
  var sortedArray = [];
  var length = arr.length;
  for(var i = 0; i < length; i++){
    var smallestIndex = findSmallestIndex(arr);
    sortedArray.push(arr.splice(smallestIndex, 1)[0]);
  }
  return sortedArray;
}
