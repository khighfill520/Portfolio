function sudoku(value) {
    
    //declare variables
    diff = value;
    div = document.getElementById('puzzle');
    table = document.createElement('table');
    var text = document.createElement('input').setAttribute('type', 'text');
    var i;
    var j;
    var k;
    var tr;
    var td;
    
    //generate table
    for (i = 1; i < 10; i++) {
        tr = table.insertRow();
        if ((i % 3) == 0) {
            tr.setAttribute('class', 'heavy_bottom');
        }
        for (j = 1; j < 10; j++) {
            td = tr.insertCell();
            td.appendChild(text);
            if ((j % 3) == 0) {
                td.setAttribute('class', 'heavy_right');
            }
        }
    }
    div.appendChild(table);
}
