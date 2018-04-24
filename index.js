function iterativeLog(array) {
  array.forEach((element,index,array) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var array = ["peanutbutter"];
  array.forEach(callback();)
  return(array);
}