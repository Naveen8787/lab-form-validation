function validateform() {
    var name = document.getElementById("usertext").value;
    var password = document.getElementById("passwordtext").value;
    var email = document.getElementById("emailtext").value;
    console.log(name);
    if (name == null || name == "") {
        alert("Name can't be blank");
        return false;
    }
    if (email == null || email == "") {
        alert("Email can't be blank ");
        return true;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    } else if (name.length < 5 || name.length > 20) {
        alert("username cannot be less than 5 characters and greater than 20 characters");
    } else if (hasWhiteSpace(name) == true) {
        alert("username cannot contain white spaces");
    }
    ValidateEmail(email);
    ValidatePswd(password);
}

function hasWhiteSpace(s) {
    return /\s/g.test(s);
}
// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}
// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
function ValidatePswd(password) {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (password.match(passw))
        alert("Password is validated");
    else
        alert("password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]")
}