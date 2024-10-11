
function data(){
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = document.getElementById("n3").value;
    
    if (a == "" || b == "" || c == "") {
      alert("all feilds are manadatary");
      return false;
    }
    else if( b.length<10 || b.length >10){
         alert("number should be of 10 digit ")
    }
    else if(isNaN(b)){
     alert("only numbers are allowed")
    }
    else{
        true;
    }
    }
    