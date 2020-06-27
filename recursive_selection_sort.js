// O(n * log(n))

function findSmallest(arr){
  let length = arr.length;
  let smallestIndex = 0;
  let smallestNumber = arr[0];
  for(var i = 1; i < length; i ++){
    if(smallestNumber > arr[i]){
      smallestIndex = i;
      smallestNumber = arr[i];
    }
  }
  return smallestIndex;
}

const selectionSort = ( arr ) => {
  if( !arr.length ) return [];
  let smallest = arr.splice(findSmallest(arr), 1);
  return smallest.concat( selectionSort(arr) );
}
var myArray = [24,545,123,67, 12, 461];
console.log( selectionSort(myArray));
