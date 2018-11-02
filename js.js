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
