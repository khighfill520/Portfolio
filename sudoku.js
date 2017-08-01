function sudoku(value) {
    
    //declare variables
    diff = value;
    div = document.getElementById('puzzle');
    table = document.createElement('table');
    var text = document.createElement('input');
    var i;
    var j;
    var k;
    var tr;
    var td;
    
    //generate table
    for (i = 0, i < 9, i++) {
        tr = table.insertRow();
        if (i % 3 == 0) {
            tr.setAttribute('class', 'heavy_bottom');
        }
        for (j = 0, j < 9, j++) {
            td = tr.insertCell();
            td.appendChild('text');
            text.setAttribute('type', 'text');
            if ( j % 3 == 0) {
                td.setAttribute('class', 'heavy_right');
            }
        }
    }
    div.appendChild(table);
}
