function flames(name,sname){
    var name = name.toUpperCase().split('');
    var sname = sname.toUpperCase().split('');
    name = name.filter(function(element) {
        // Use a regular expression to test if the element is an alphabet
        return /[a-zA-Z]/.test(element);
    });
    sname = sname.filter(function(element) {
        // Use a regular expression to test if the element is an alphabet
        return /[a-zA-Z]/.test(element);
    });
    var flamesIndex = name.length + sname.length;
    var count = 0;
    for (var i=0;i<name.length;i++){
        var index = sname.indexOf(name[i]);
        if(index !==-1){
            sname.splice(index,1);
            count += 2;
        }
        flamesIndex -= count;
        var result = ["Friends", "Love", "Affection", "Marriage", "Enemy", "Siblings"];
        var a = [1,1,1,1,1,1];
        var k = 0;
        for(var i=1;i<6;i++){
            var j=0;
            while(true){
                if(a[k] === 1)
                 j += 1;
                if(j === flamesIndex){
                    a[k] = 0;
                    break;
                }
                k = (k+1)%6;
            }
        }
        for(var i=0;i<6;i++){
            if(a[i] == 1){
                console.log(result[i]);
                return result[i];
            }
        }
        return "same";
    }

}
function save() {
    var name = document.getElementById("name").value;
    var sname = document.getElementById("sname").value;
    var flamesResult = flames(name,sname);
    document.getElementById("flamesResult").innerHTML = "The FLAMES result is: "+ flamesResult;
    var formData = { name: name, sname: sname, flamesResult:flamesResult};
    var savedData = localStorage.getItem("formData");
    document.getElementById("myHead").innerHTML = "";
    document.getElementById("myBody").innerHTML = "";
    if (savedData) {
      savedData = JSON.parse(savedData);
      savedData.push(formData);
      localStorage.setItem("formData", JSON.stringify(savedData));
    } else {
      localStorage.setItem("formData", JSON.stringify([formData]));
    }
    document.getElementById("myForm").reset();
  }

  function savedResults() {
    var savedData = localStorage.getItem("formData");
    document.getElementById("flamesResult").innerHTML = "";
    if (savedData) {
      savedData = JSON.parse(savedData);
      var tableHead = document.getElementById("myHead");
      tableHead.innerHTML = "<tr><th>Your Name</th><th>Partner Name</th><th>Result</th></tr>";
      var formDataContainer = document.getElementById("myBody");
      formDataContainer.innerHTML = "";
      savedData.forEach(function(data) {
        formDataContainer.innerHTML += "<tr><td>" + data.name + "</td><td>" + data.sname + "</td><td>" +data.flamesResult+"</td></tr>";
      });
    } else {
      alert("No form data stored.");
    }
  }

  function resetData(){
    localStorage.removeItem("formData");
    document.getElementById("myBody").innerHTML = "";
  }