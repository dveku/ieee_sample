function value() {
    var RE_NAME = /^[A-Za-z]+(\s)+[A-za-z]+$/;
    var RE_EMAIL = /^(\w+[\-\.])*\w+@(\w+\.)+[A-za-z]+/;
    var RE_CONTACT = /^(\d){10}$/;
    var RE_MSG = /^(\w)+$/;
    var name = document.getElementById("nm").value;
    if (name == "") {
        alert("name cannot be empty");
        return false;
    }
    if (!RE_NAME.test(name)) {
        alert("name has to be a combination of first name and last name");
        return false;
    }
    var email = document.getElementById("em").value;
    if (email == "") {
        alert("email cannot be empty");
        return false;
    }
    if (!RE_EMAIL.test(email)) {
        alert("enter a valid email");
        return false;
    }
    var cont = document.getElementById("cm").value;
    if (cont == "") {
        alert("contact number cannot be empty");
        return false;
    }
    if (!RE_CONTACT.test(cont)) {
        alert("contact must be a 10 digit number");
        return false;
    }
    var msg = document.getElementById("msg").value;
    if (msg == "") {
        alert("Please be kind enough to give us your valuable feedback :)");
        return false;
    }
    if (!RE_MSG.test(msg)) {
        alert("c'mmon We know your messing with us :(");
        return false;
    }

}