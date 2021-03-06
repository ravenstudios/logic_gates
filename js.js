$(()=>{
  //console.log("jq ready");

  $(".input").click((e)=>{
    console.log(e.target.id);
  });
});

// console.log("S: 0, 0 : " + halfAdder(0, 0).s);
// console.log("C: 0, 0 : " + halfAdder(0, 0).c);
// console.log("S: 0, 1 : " + halfAdder(0, 1).s);
// console.log("C: 0, 1 : " + halfAdder(0, 1).c);
// console.log("S: 1, 0 : " + halfAdder(1, 0).s);
// console.log("C: 1, 0 : " + halfAdder(1, 0).c);
// console.log("S: 1, 1 : " + halfAdder(1, 1).s);
// console.log("C: 1, 1 : " + halfAdder(1, 1).c);
// console.log(fullAdder(1,1, 1));

// console.log("0 : " + notGate(0));
// console.log("1 : " + notGate(1));

function and(input1, input2){
  return input1 && input2;
}

function or(input1, input2){
  return input1 || input2
}

function xor(input1, input2){
  if(input1 === input2){
    return 0;
  }
  else{
    return 1;
  }

}

function not(input){
  if(input === 0){
    return 1;
  }
  else{
    return 0;
  }
}

function nand(input1, input2){
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

function nor(input1, input2){
  if(input1 === 0 &&  input2 === 0){
    return 1;
  }
  else{
    return 0;
  }

}

function xnor(input1, input2){
  return not(xor(input1, input2))
}

function halfAdder(input1, input2){
  var  s = xor(input1, input2);
  var c = and(input1, input2);
  return {s: s, c: c};
}

function fullAdder(input1, input2, carry){


  if(!carry){
    carry = 0;
  }

  var xor1 = xor(input1, input2);
  var xor2 = xor(xor1, carry)
  var and1 = and(xor1, carry);
  var and2 = and(input1, input2);
  var s = xor2;
  var c = or(and1, and2);
  return {s: s, c: c};
}


function decToBinary(dec){
  console.log("dec: " + dec);
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
// console.log(binaryToDec([1, 1, 1, 1, 1, 1, 1, 1]));
// console.log(decToBinary(255));


function add(arr1, arr2) {

// console.log(arr1[0]);
  var result = [0, 0, 0, 0, 0, 0, 0];
  var start = halfAdder(arr1[7], arr2[7]);

  result[7] = start.s;//SUM
  var c = start.c; //CARRY
console.log(result);

  for (var i = 6; i >= 0; i--) {
    var a = arr1[i];
    var b = arr2[i];

    var temp = fullAdder(a, b, c);
    console.log(temp);
    result[i] = temp.s;
    c = temp.c;
  }

  if(c === 1){
    alert("Overflow");
    return [0, 0, 0, 0, 0, 0, 0, 0];
  }
  else{
    return result;
  }

}

var r = add(decToBinary(6), decToBinary(250));
console.log(r);
console.log(binaryToDec(r));
