$(()=>{
  console.log("jq ready");

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
console.log(fullAdder(1,1, 1));

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
  // var halfA = halfAdder(input1, input2);
  // var halfB = halfAdder(halfA.s, halfA.c);
  // var s = halfB.s;
  // var  c = or(halfA.c, halfB.c);
  // return {s: s, c: c};

  var xor1 = xor(input1, input2);
  var xor2 = xor(xor1, carry)
  var and1 = and(xor1, carry);
  var and2 = and(input1, input2);
  var s = xor2;
  var c = or(and1, and2);
  return {s: s, c: c};
}
