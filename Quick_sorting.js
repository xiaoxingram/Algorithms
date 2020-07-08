//quickSort
function quickSort(arr){

  if(arr.length < 2){
    return arr    ;               // base case
  }
                               // recursive case
    let pivot = arr[0];
    let low = arr.slice(1).filter(function(e){
      return e <= pivot;
    });
    let high = arr.slice(1).filter(function(e){
      return e > pivot;
    })
    return quickSort(low).concat(pivot , quickSort(high));

}

//recursive Sum
function sum(arr){
  if(arr.length <= 1){
    return arr[0];
  }
  return  arr[0] + sum(arr.slice(1));
}

// recursive count
function count(list){
  if(list.length === 0){
    return 0;
  }
  return 1 + count(list.slice(1));
}

// recursive find max in list
function findMax(a){
  if(a.length === 2){
    a[0] > a[1] ? a[0] : a[1];
  };
  const subMax = findMax(a.slice(1));
  return a[0] > subMax ? a[0] : subMax;
}
