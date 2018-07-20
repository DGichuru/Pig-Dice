//User interface
$(document).ready(function() {
  $("#roll").click(function(event) {
    var d1 = Math.floor(Math.random() *6) + 1;
    var d2 = Math.floor(Math.random() *6) + 1;
    var diceTotal = d1+d2;
    if (diceTotal == 2) {
      diceTotal = 25 + diceTotal}
    alert("Player two is next")
    $("#results").append("<li>" + diceTotal + "</li>");
  });
    $("#rolls").click(function(event){
    var d3 =Math.floor(Math.random() *6) +1;
    var d4 =Math.floor(Math.random() *6) +1;
    var dieTotal = d3+d4
    alert("Player one is next")
    $("#result").append("<li>" + dieTotal + "</li>");
  });
   
    
  
});
/*function getSum(total, num) {
  return total + Math.round(num);


var scores = function(){
  diceTotal.forEach(index=0 index=>diceTotal.length{
    
  });

}*/


