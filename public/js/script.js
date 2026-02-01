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
    //html-format and type-err
    return isValid;
}