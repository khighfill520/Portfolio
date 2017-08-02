function sudoku(value) {
    
    //declare variables
    var diff = value;
    var div = document.getElementById('puzzle');
    var table = document.createElement('table');
    var text = document.createElement('input');
    var inputs = document.getElementsByTagName('input');
    var easy = [1, 2, 3, 5, 7, 8, 9, 10, 12, 14, 16, 18, 19, 20, 21, 24, 25, 26, 27, 30, 31, 32, 33, 37, 38, 40, 41, 42, 44, 45, 49, 50, 51, 52, 55, 56, 57, 58, 61, 62, 63, 64, 66, 68, 70, 72, 73, 74, 75, 77, 79, 80, 81];
    var med = [4, 5, 6, 7, 8, 10, 13, 15, 19, 23, 24, 28, 29, 30, 32, 35, 36, 37, 39, 40, 41, 42, 43, 45, 46, 47, 50, 52, 53, 54, 58, 59, 63, 67, 69, 72, 74, 75, 76, 77, 78];
    var hard = [2, 6, 11, 12, 15, 17, 18, 21, 24, 25, 26, 28, 29, 30, 52, 53, 54, 56, 57, 58, 61, 64, 65, 67, 70, 71, 76, 80];
    var h;
    var i;
    var j;
    var k;
    var l;
    var tr;
    var td;
        
    
    for(var h = 0; h < inputs.length; h++) {
        if(inputs[h].type.toLowerCase() == 'submit') {
            inputs[h].parentNode.removeChild(inputs[h]); 
        }
    }
    for (l = 1; l < 82; l++) {
        for (i = 1; i < 10; i++) {
            tr = table.insertRow();
            if ((i % 3) == 0) {
                tr.setAttribute('class', 'heavy_bottom');
            }
            for (j = 1; j < 10; j++) {
                td = tr.insertCell();
                td.setAttribute('id', l);
                if ((j % 3) == 0) {
                    td.setAttribute('class', 'heavy_right');
                }
            }
        }
    }
    td.innerHTML = '<input type="text" />';
    div.appendChild(table);
}
