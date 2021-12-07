function generateTable (){
    var num = document.getElementById("number").value;
    if (num > 0){
      var myString = "";
      
    
    for(i = 1; i <= 10; i++) {
    myString += num + " x " + i + " = " + i * num + "<br/>" ;}
    document.getElementById("table").innerHTML = myString;}
    else{
      alert("please enter number");
    }
    
    
    
  }