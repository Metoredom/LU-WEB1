function last(array, n = 1){
  if (array == null) 
    return void 0;
  return array.slice(Math.max(array.length - n, 0));  
}

console.log(last([1,3,4,5],2))  
