function baseroll() {
  
  //set variables
  var firstnum = document.getElementById("fnum");
  var secnum = document.getElementById("snum");
  var thirdnum = document.getElementById("tnum");
  var i;
  var j;
  var sum = 0;
  var rolls = [];
  console.log(firstnum);
  console.log(secnum);
  console.log(thirdnum);
  
  //math
  for (i = 0; i < firstnum; i++) {
      rolls[i] = Math.floor(Math.random()*secnum+1);
  }
  
  //display rolls
  for (j = 0; j < firstnum; j++) {
    if (j < (firstnum - 1)) {
      document.getElementById("values").innerHTML = document.getElementById("values").innerHTML + (rolls[j] + ", ");
    } else {
      document.getElementById("values").innerHTML = rolls[j];
    }
  }
  
  //get and display sum
  for (k = 0; k < firstnum; k++) {
    sum = (sum + rolls[k]);
  }
  sum = (sum + thirdnum);
  document.getElementById("sum").innerHTML = sum;
}
