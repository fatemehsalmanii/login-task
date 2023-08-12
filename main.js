let password = document.getElementById("password");
let checkbox = document.getElementById("checkbox");

    checkbox.onclick = function(){
        if(password.type === 'password'){
            password.type = 'text';

        }else{
            password.type = "password";
        }
    }
