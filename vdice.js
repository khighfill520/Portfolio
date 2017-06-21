function baseroll() {
  
  //set variables
  var firstnum = parseInt(document.getElementById("fnum").value);
  var secnum = parseInt(document.getElementById("snum").value);
  var thirdnum = parseInt(document.getElementById("tnum").value);
  var i;
  var j;
  var sum = 0;
  var rolls = [];
  var rolls2;
  
  //get and display rolls 
  for (i = 0; i < firstnum; i++) {
      rolls[i] = Math.floor(Math.random()*secnum+1);
  }
  rolls2 = rolls.toString();
  document.getElementById("values").innerHTML = rolls2;
 
  
  //get and display sum
  for (j = 0; j < firstnum; j++) {
    sum = (sum + parseInt(rolls[j]));
  }
  sum = (sum + thirdnum);
  document.getElementById("sum").innerHTML = sum;
}

function advroll() {
  
  //set variables
  var firstnum = parseInt(document.getElementById("fnum1").value);
  var secnum = parseInt(document.getElementById("snum1").value);
  var thirdnum = parseInt(document.getElementById("tnum1").value);
  var fourthnum = parseInt(document.getElementById("fonum").value);
  var fifthnum = parseInt(document.getElementById("finum").value);
  var i;
  var j;
  var k;
  var sum = 0;
  var rolls = [];
  var rolls2;
  
  //get first rolls 
  for (i = 0; i < firstnum; i++) {
      rolls[i] = Math.floor(Math.random()*secnum+1);
  }
  
  //get second rolls and display
  for (j = (i + 1); j < (firstnum + thirdnum); j++) {
    rolls[j] = Math.floor(Math.random()*fourthnum+1);
  }
  rolls2 = rolls.toString();
  document.getElementById("values1").innerHTML = rolls2;
 
  
  //get and display sum
  for (k = 0; k <= j; k++) {
    sum = (sum + parseInt(rolls[k]));
  }
  sum = (sum + fifthnum);
  document.getElementById("sum1").innerHTML = sum;
}
