/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/
function handValue (hand) {
  var value= 0;
  var aces = [];
  for (i=0; i < hand.length; i++){
     if(hand[i] == "J" || hand[i] == "Q" || hand[i] == "K"){
      value = value + 10;
    }else if(hand[i] == "A"){
      aces.push(hand[i]);
    }else if(Number(hand[i]) !== NaN){
      value = value + Number(hand[i]);
  }

}

if (aces.length > 0 && value < 10){
  value = value + 11 + (aces.length - 1);
}else{
  value = value + aces.length;
}

  console.log(value);  
  return value;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/