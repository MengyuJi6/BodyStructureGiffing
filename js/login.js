
function login(){
    var username = document.getElementById("username");
    var pass = document.getElementById("password");


    store.set('Zack', 
    {   
        password:'123456',
        history: []
    });

    store.set('Wendy', 
    {   
        password:'123456',
        history: []
    });

    store.set('Admin', 
    {   
        password:'123456',
        history: []
    });


    if (username.value == "") {
 
        alert("Username can't be empty!");
 
    } 
    else if (pass.value  == "") {
 
        alert("Password can't be empty!");
 
    }
    else{
        var Zack = store.get('Zack');
        var Windy = store.get('Windy');
        var Admin = store.get('Admin');

        if(username.value == 'Windy' && pass.value == Windy.password){
            $('#user').empty();
            $('#user').append(username.value);
            window.location.href="index.html";
        }
        else if(username.value == 'Zack' && pass.value == Zack.password){
            // $('#user').empty();
            $('#user').append(username.value);
            window.location.href="index.html";
        }
        else if(username.value == 'Admin' && pass.value == Admin.password){
            $('#user').empty();
            $('#user').append(username.value);
            window.location.href="index.html";
        }
        else{
            alert("Password incorrect ")
        }    
    }


}

