document.getElementById("form-contact").onsubmit = validate;

function validate(){
    isValid=true;
    //check name fname and err-fname
    let name = document.getElementById("fname").value.trim();
    if(!name){
        document.getElementById("err-fname").style.display = "inline-block";
        isValid=false;
    }
    //email and err-email
    let email = document.getElementById("email").value.trim();
    if(!email || !email.includes("@")){
        document.getElementById("err-email").style.display = "inline-block";
        isValid=false;
    }
    //html-format and type-err
    let type = document.getElementsByName("email-type").value;
    if(!type){
        document.getElementById("type-error").style.display = "inline-block";
        isValid=false;
    }

    //validate link
    return isValid;
}