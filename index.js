function takeANumber(katzDeli, name) {
  
  katzDeli.push(`${name}`);
  
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
  
}

function nowServing(katsDeliLine) {
  
  if (katsDeliLine === 0) {
    
     return "There is nobody waiting to be served!";
  }
  
  else {
    
     return katsDeliLine
  }
}