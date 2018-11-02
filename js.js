$(()=>{
  console.log("jq ready");

  $(".input").click((e)=>{
    console.log(e.target.id);
  });
});

console.log("0, 0 : " + xnorGate(0, 0));
console.log("0, 1 : " + xnorGate(0, 1));
console.log("1, 0 : " + xnorGate(1, 0));
console.log("1, 1 : " + xnorGate(1, 1));

// console.log("0 : " + notGate(0));
// console.log("1 : " + notGate(1));

function andGate(input1, input2){
  return input1 && input2;
}

function orGate(input1, input2){
  return input1 || input2
}

function xorGate(input1, input2){
  if(input1 === input2){
    return 0;
  }
  else{
    return 1;
  }

}

function notGate(input){
  if(input === 0){
    return 1;
  }
  else{
    return 0;
  }
}

function nandGate(input1, input2){
  if(!input1 && !input2){
    return 1;
  }
  if(input1 === input2){
    return 0;
  }
  else{
    return 1;
  }
}

function norGate(input1, input2){
  if(input1 === 0 &&  input2 === 0){
    return 1;
  }
  else{
    return 0;
  }

}

function xnorGate(input1, input2){
  return notGate(xorGate(input1, input2))
}


function decToBinary(dec){
  if(dec <= 255 && Number.isInteger(dec)){
    var temp;
    var binArray = [128, 64, 32, 16, 8, 4, 2, 1];
    var resultArray = [];
    for (var i = 0; i < binArray.length; i++) {
      if(dec >= binArray[i]){
        resultArray.push(1);
        dec = dec - binArray[i]
      }
      else{
        resultArray.push(0);
      }
    }
    return resultArray;
  }
  else{
    alert("Must use numbers and number must be below 256");
    return[0, 0, 0, 0, 0, 0, 0, 0];
  }
}

function binaryToDec(arr) {
  var binArray = [128, 64, 32, 16, 8, 4, 2, 1];
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === 1){
      result += binArray[i];
    }
  }
  return result;
}
console.log(binaryToDec([1, 1, 1, 1, 1, 1, 1, 1]));
console.log(decToBinary(255));
