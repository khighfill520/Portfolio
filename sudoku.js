function sudoku(value) {
    
    //declare variables
    var diff = value;
    var div = document.getElementById('puzzle');
    var table = document.createElement('table');
    var inputs = document.getElementsByTagName('input');
    var letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
    var easy = [1, 2, 3, 5, 7, 8, 9, 10, 12, 14, 16, 18, 19, 20, 21, 24, 25, 26, 27, 30, 31, 32, 33, 37, 38, 40, 41, 42, 44, 45, 49, 50, 51, 52, 55, 56, 57, 58, 61, 62, 63, 64, 66, 68, 70, 72, 73, 74, 75, 77, 79, 80, 81];
    var med = [4, 5, 6, 7, 8, 10, 13, 15, 19, 23, 24, 28, 29, 30, 32, 35, 36, 37, 39, 40, 41, 42, 43, 45, 46, 47, 50, 52, 53, 54, 58, 59, 63, 67, 69, 72, 74, 75, 76, 77, 78];
    var hard = [2, 6, 11, 12, 15, 17, 18, 21, 24, 25, 26, 28, 29, 30, 52, 53, 54, 56, 57, 58, 61, 64, 65, 67, 70, 71, 76, 80];
    var heavy == "";
    var g;
    var h;
    var nums = [];
    var i;
    var j;
    var k = 1;
    var m;
    var n;
    var p;
    var q = 0;
    var r;
    var t;
    var tr;
    var td;
    var array;
        
    //set which pattern to use
    if (diff = 'Easy') {
        array = easy;
    } else if (diff = 'Medium') {
        array = med;
    } else {
        array = hard;
    }
    
    //remove buttons
    for(h = 0; h < inputs.length; h++) {
        if(inputs[h].type.toLowerCase() == 'submit') {
            inputs[h].parentNode.removeChild(inputs[h]); 
        }
    }
    
    //generate and classify rows
    for (i = 1; i < 10; i++) {
        tr = table.insertRow();
        if ((i % 3) == 0) {
            tr.setAttribute('class', 'heavy_bottom');
        }
        //generate cells
        for (j = 1; j < 10; j++) {
            td = tr.insertCell();
            td.setAttribute('id', k);
            k++;
        }
        //classify cells
        for (m = 1; m < 82; m++) {
            n = document.getElementById(p);
            if ((m % 3) == 0) {
                heavy = " heavy_right";
            }
            if (((m / 3) <= 1) AND (i <= 3)) {
                n.setAttribute('class', 'boxA' + heavy);
            } else if (((m / 3) <= 2) AND (i <= 3) {
                n.setAttribute('class', 'boxB' + heavy);
            } else if (((m / 3) <= 3) AND (i <= 3)) {
                n.setAttribute('class', 'boxC' + heavy);
            } else if (((m / 3) <= 1) AND (i <= 6)) {
                n.setAttribute('class', 'boxD' + heavy);
            } else if (((m / 3) <= 2) AND (i <= 6)) {
                n.setAttribute('class', 'boxE' + heavy);
            } else if (((m / 3) <= 3) AND (i <= 6)) {
                n.setAttribute('class', 'boxF' + heavy);
            } else if (((m / 3) <= 1) AND (i <= 9)) {
                n.setAttribute('class', 'boxG' + heavy);
            } else if (((m / 3) <= 2) AND (i <= 9)) {
                n.setAttribute('class', 'boxH' + heavy);
            } else {
                n.setAttribute('class', 'boxI' + heavy);
            }
        }
    }
    
    //generate array of numbers
    for (n = 0; n < 82; n++) {
        nums[n] = Math.floor(Math.random()*9+1);
        check(n);
        while (check() === false) {
            nums[n] = Math.floor(Math.random()*9+1);
            check(n);
        }
    }
    
    //populate table
    for (p = 1; p < 82; p++) {
        for (r = 0; r < nums.length; r++) {
            t = document.getElementById(p);
            if (array.includes(p)) {
                t.innerHTML = nums[r];
            } else {
                td.innerHTML = '<input type="text" />';
            }
        }
    }
    div.appendChild(table);
}
function check(number) {
    return true;
}
