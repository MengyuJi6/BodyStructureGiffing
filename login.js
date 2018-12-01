function login() {
 
    var username = document.getElementById("username");
    var pass = document.getElementById("password");
 
    if (username.value == "") {
 
        alert("Username can't be empty!");
 
    } else if (pass.value  == "") {
 
        alert("Password can't be empty!");
 
    } else if(username.value == "admin" && pass.value == "123456"){
 
        window.location.href="index.html";
 
    } else if(username.value != "admin"){
        alert("Username not exist")
    } else {
 
        alert("Password incorrect")
 
    }
}
