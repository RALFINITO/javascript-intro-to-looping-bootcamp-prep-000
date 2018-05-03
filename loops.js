function forLoop(arr){
  arr.push("I am 1 strange loop.")
  for(let i = 2; i < 25; i++){
    var phrase = 'I am ${i} strange loops.'
    arr.push(phrase)
    console.log(arr)
  }
  return arr
}