function sudoku(value) {
    
    //declare variables
    var diff = value;
    var div = document.getElementById('puzzle');
    var table = document.createElement('table');
    var easy = [1, 2, 3, 5, 7, 8, 9, 10, 12, 14, 16, 18, 19, 20, 21, 24, 25, 26, 27, 30, 31, 32, 33, 37, 38, 40, 41, 42, 44, 45, 49, 50, 51, 52, 55, 56, 57, 58, 61, 62, 63, 64, 66, 68, 70, 72, 73, 74, 75, 77, 79, 80, 81];
    var med = [4, 5, 6, 7, 8, 10, 13, 15, 19, 23, 24, 28, 29, 30, 32, 35, 36, 37, 39, 40, 41, 42, 43, 45, 46, 47, 50, 52, 53, 54, 58, 59, 63, 67, 69, 72, 74, 75, 76, 77, 78];
    var hard = [2, 6, 11, 12, 15, 17, 18, 21, 24, 25, 26, 28, 29, 30, 52, 53, 54, 56, 57, 58, 61, 64, 65, 67, 70, 71, 76, 80];
    var heavy = "";
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
    div.innerHTML = "";
    
    //generate and classify rows
    for (i = 1; i < 10; i++) {
        tr = table.insertRow();
        if ((i % 3) == 0) {
            tr.setAttribute('class', 'heavy_bottom');
        }
        //generate cells
        for (j = 1; j < 10; j++) {
            td = tr.insertCell();
            td.id = k;
            console.log(document.getElementById(k));
            k++;
        }
        //classify cells
        for (m = 1; m < 82; m++) {
            console.log(document.getElementById(m));
            n = document.getElementById(m);
            if ((m % 3) == 0) {
                heavy = " heavy_right";
            }
            if (((m / 3) <= 1) && (i <= 3)) {
                n.className = 'boxA' + heavy;
            } else if (((m / 3) <= 2) && (i <= 3)) {
                n.className = 'boxB' + heavy;
            } else if (((m / 3) <= 3) && (i <= 3)) {
                n.className = 'boxC' + heavy;
            } else if (((m / 3) <= 1) && (i <= 6)) {
                n.className = 'boxD' + heavy;
            } else if (((m / 3) <= 2) && (i <= 6)) {
                n.className = 'boxE' + heavy;
            } else if (((m / 3) <= 3) && (i <= 6)) {
                n.className = 'boxF' + heavy;
            } else if (((m / 3) <= 1) && (i <= 9)) {
                n.className = 'boxG' + heavy;
            } else if (((m / 3) <= 2) && (i <= 9)) {
                n.className = 'boxH' + heavy;
            } else {
                n.className = 'boxI' + heavy;
            }
        }
    }
    
    //generate finished puzzle
    for (p = 0; p < 82; p++) {
        t = document.getElementById(p).innerHTML;
        nums[p] = Math.floor(Math.random()*9+1);        
        t = nums[p];
        while (check(nums[p]) === false) {
            nums[p] = Math.floor(Math.random()*9+1);       
            t = nums[p];
        }
        //insert text boxes
        if (array.includes(p) === false) {            
            td.innerHTML = '<input type="text" />';
        }
    }
    div.appendChild(table);
}

function check(number) {
    
    //declare variables
    var i;
    var j;
    var k;
    var m;
    var n;
    var p;
    var q;
    var r;
    var t;
    var u;
    var varj;
    var varp;
    var num = number;
    var clss;
    var comp1;
    var comp2;
    
    //get first number to compare
    for (i = 0; i < 82; i++) {
        comp1 = document.getElementById(i).innerHTML;
        if (i == 1) {
        } else {
            //check row for duplicates
            while (j < 9) {
                j = 1;
                varj = document.getElementById(i);
                while ((varj % 9) !== 0) {
                    varj = document.getElementById(i + j);
                    j++;
                }
                k = 9 - j;
                for (m = 1; m <= k; m++) {
                    comp2 = document.getElementById(i - m).innerHTML;
                    if (comp1 == comp2) {
                        return false;
                    }
                }
                for (n = 1; n < j; n++) {
                    comp2 = document.getElementById(i + n).innerHTML;
                    if (comp1 == comp2) {
                        return false;
                    }
                }
            }
            //check column for duplicates
            while (p <=9)
                p = 1;
                varp = document.getElementById(i);
            while ((varp / 9) < 9) {
                varp = document.getElementById(i + p);
                p++;
            }
            q = 9 - p;
            for (r = 1; r <= q; r++) {
                    comp2 = document.getElementById(i - (r * 9)).innerHTML;
                    if (comp1 == comp2) {
                        return false;
                    }
            }
            for (t = 1; t < p; t++) {
                comp2 = document.getElementById(i + (t * 9)).innerHTML;
                if (comp1 == comp2) {
                    return false;
                }
            }
            //check box for duplicates
        }
    }
}
