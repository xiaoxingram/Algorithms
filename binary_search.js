/*Binary Search二进制查找*/
function binary_search(list, item){
  let low = 0;
  let high = list.length - 1;
  while(low <= high){
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];
    if(guess === item){
      return mid;
    }
    if(guess > item){
      high = mid - 1;
    }else{
      low = mid + 1;
    }
  }
  return null
}

var my_list = [1,4,7,99,200];
var test_1 = binary_search(my_list, 4);
var test_2 = binary_search(my_list, 100);
console.log(test_1); //1
console.log(test_2); // null
