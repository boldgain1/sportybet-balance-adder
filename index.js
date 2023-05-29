function myFunction(){
    var a = document.getElementById("myInput");
    var b = document.getElementById("hide1");
    var c = document.getElementById("hide2");

    if(a.type === 'password'){
      a.type = "text";
      b.style.display = "block";
      c.style.display = "none"; 
    }
    else{
        a.type = "password"
        b.style.display = "none";
        c.style.display = "block"; 
      }
}