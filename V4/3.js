function remReal(arr){
  return arr.map((el)=>{
    let float = parseFloat(el)
    if( Math.floor(float) === float){
      return float
    }
  }).filter((el)=>(el!=undefined))
}