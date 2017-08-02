function sudoku(value) {
    
    //declare variables
    diff = value;
    div = document.getElementById('puzzle');
    table = document.createElement('table');
    text = document.createElement('input');
    inputs = document.getElementsByTagName('input');
    var h;
    var i;
    var j;
    var k;
    var tr;
    var td;
    
    
    for(var h = 0; h < inputs.length; i++) {
        if(inputs[h].type.toLowerCase() == 'submit') {
            inputs[h].parentNode.removeChild(inputs[h]); 
        }
    }   
    for (i = 1; i < 10; i++) {
        tr = table.insertRow();
        if ((i % 3) == 0) {
            tr.setAttribute('class', 'heavy_bottom');
        }
        for (j = 1; j < 10; j++) {
            td = tr.insertCell();
            td.innerHTML = '<input type="text" />';
            if ((j % 3) == 0) {
                td.setAttribute('class', 'heavy_right');
            }
        }
    }
    div.appendChild(table);
}
