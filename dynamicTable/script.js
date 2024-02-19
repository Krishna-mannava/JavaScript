function addRow(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var row = "<tr><td>" + name + "</td>"+"<td>"+age+"</td></tr>";
    document.getElementById("myBody").innerHTML += row;
}