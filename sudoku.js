function sudoku() {
    
    //declare variables
    var diffs = ["Easy", "Medium", "Hard"];
    var div = document.getElementById('buttons');
    var input = document.createElement('input');
    var puzzle = document.createElement('div');
    var table = document.createElement('table');
    var g;
    var h;
    var nums = [];
    var i;
    var j;
    var k;
    var m = 1;
    var tr;
    var td;
        
    //change buttons
    div.innerHTML = "";
    for (i = 0; i < 3; i++) {
        div.innerHTML += '<input type="submit" value="' + diffs[i] + '" onClick="play(this.value);" />';
    }
        
    
    
    //generate and classify rows
    for (j = 1; j < 10; j++) {
        tr = table.insertRow();
        if ((j % 3) == 0) {
            tr.setAttribute('class', 'heavy_bottom');
        }
        //generate cells
        for (k = 1; k < 10; k++) {
        var heavy = "";
            td = tr.insertCell();
            td.setAttribute('id', m);
            if ((k % 3) == 0) {
                heavy = "heavy_right ";
            }
            td.className = heavy;
            m++;
        }
    }
    puzzle.setAttribute('id', 'puzzle');
    document.body.appendChild(puzzle);
    puzzle.appendChild(table);
}

function play(value) {
    
    //declare variables
    var array;
    var diff = value;
    var tds = document.getElementsByTagName('td');
    var easy = [1, 2, 3, 5, 7, 8, 9, 10, 12, 14, 16, 18, 19, 20, 21, 24, 25, 26, 27, 30, 31, 32, 33, 37, 38, 40, 41, 42, 44, 45, 49, 50, 51, 52, 55, 56, 57, 58, 61, 62, 63, 64, 66, 68, 70, 72, 73, 74, 75, 77, 79, 80, 81];
    var med = [4, 5, 6, 7, 8, 10, 13, 15, 19, 23, 24, 28, 29, 30, 32, 35, 36, 37, 39, 40, 41, 42, 43, 45, 46, 47, 50, 52, 53, 54, 58, 59, 63, 67, 69, 72, 74, 75, 76, 77, 78];
    var hard = [2, 6, 11, 12, 15, 17, 18, 21, 24, 25, 26, 28, 29, 30, 52, 53, 54, 56, 57, 58, 61, 64, 65, 67, 70, 71, 76, 80];
    var i;
    var j;
    var k;
    var m;
    
    //set which pattern to use
    if (diff = 'Easy') {
        array = easy;
    } else if (diff = 'Medium') {
        array = med;
    } else {
        array = hard;
    }    
    
    //classify cells
    for (i = 1; i < 82; i++) {
        j = document.getElementById(i);
        if (((i / 3) <= 1) && (i <= 3)) {
            j.className += 'boxA';
        } else if (((i / 3) <= 2) && ((i / 9) <= 3)) {
            j.className += 'boxB';
        } else if (((i / 3) <= 3) && ((i / 9) <= 3)) {
            j.className += 'boxC';
        } else if (((i / 3) <= 1) && ((i / 9) <= 6)) {
            j.className += 'boxD';
        } else if (((i / 3) <= 2) && ((i / 9) <= 6)) {
            j.className += 'boxE';
        } else if (((i / 3) <= 3) && ((i / 9) <= 6)) {
            j.className += 'boxF';
        } else if (((i / 3) <= 1) && ((i / 9) <= 9)) {
            j.className += 'boxG';
        } else if (((i / 3) <= 2) && ((i / 9) <= 9)) {
            j.className += 'boxH';
        } else {
            j.className += 'boxI';
        }
    }
    
    //generate finished puzzle
    for (k = 0; k < 82; k++) {
        m = document.getElementById(k).innerHTML;
        nums[k] = Math.floor(Math.random()*9+1);        
        m = nums[k];
        while (check(nums[k]) === false) {
            nums[k] = Math.floor(Math.random()*9+1);       
            m = nums[k];
        }
        //insert text boxes
        if (array.includes(k) === false) {            
            tds.innerHTML = '<input type="text" />';
        }
    }
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
