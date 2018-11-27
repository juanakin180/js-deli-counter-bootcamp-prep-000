function takeANumber(otherDeli, num) {
  
var katzDeli = [];
otherDeli  = ["Steven", "Blake", "Avi"];


  for( var i=0; i < otherDeli.length; i++ ) {
    
   katzDeli.push("Welcome," + otherDeli[i] + "." + "You are number" + num + "in line.");
    
  }
  
  return katzDeli;
}
