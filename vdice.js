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
  console.log(firstnum);
  console.log(secnum);
  console.log(thirdnum);
  
  //get and display rolls 
  for (i = 0; i < firstnum; i++) {
      rolls[i] = Math.floor(Math.random()*secnum+1);
  }
  rolls2 = rolls.toString();
  document.getElementById("values").innerHTML = rolls2;
 
  
  //get and display sum
  for (k = 0; k < firstnum; k++) {
    sum = (sum + parseInt(rolls[k]));
  }
  sum = (sum + thirdnum);
  document.getElementById("sum").innerHTML = sum;
}
