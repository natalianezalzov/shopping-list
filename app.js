var list = [];

function addItem() {
    list.push ([document.getElementById('product').value,
    document.getElementById('nmbr').value,
    document.getElementById('price').value]);
    showList();
}

function showList() {
    var content = document.getElementById('table');
    var rez = '<table>', total = 0;
    for (var i = 0; i < list.length; i++) {
        rez += '<tr>';
        for (var j = 0; j < list[i].length; j++) {
            rez += '<td>' + list[i][j] + '<td>';
        }
        rez += '<td><button class="delete" onclick="deleteItem('+ i +');">&times;</button></td></tr>';
        total += list[i][1]*list[i][2];
    }
    document.getElementById('total').innerHTML=total + ' lei';
    rez += '</table>';
    content.innerHTML=rez;
}

function deleteItem(row) {
    list.splice(row,1);
    showList();
}
