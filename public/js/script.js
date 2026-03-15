document.getElementById("form-contact").onsubmit = validate;

function validate(){
    clearErrors();
    isValid=true;
    //check name and err-fname
    let name = document.getElementById("fname").value.trim();
    if(!name){
        document.getElementById("err-fname").style.display = "inline-block";
        isValid=false;
    }
    let lname = document.getElementById("lname").value.trim();
    if(!lname){
        document.getElementById("err-lname").style.display = "inline-block";
        isValid=false;
    }
    //email and err-email
    let email = document.getElementById("email").value.trim();
    if(email && (!email.includes("@") || !email.includes(".")) ){
        document.getElementById("err-email").style.display = "inline-block";
        isValid=false;
    }
    let mailingList = document.getElementById("theList");
    if(mailingList.checked && !email){
        document.getElementById("list-error").style.display = "inline-block";
        isValid =false;
    }
    //html-format and type-err
    const textType = document.getElementById("textFormat");
    const emailType = document.getElementById("emailType");
    if(mailingList.checked && !(textType.checked || emailType.checked)){
        document.getElementById("type-error").style.display = "inline-block";
        isValid=false;
    }
    //checking if meet was specified
    let meet = document.getElementById("meet").value;
    if(meet == "none"){
        document.getElementById("err-meet").style.display = "inline-block";
        isValid = false;
    }
    //LinkedIn check 
    let linked = document.getElementById("link").value.trim();
    if(linked && !linked.includes("https://linkedin.com/in/")){
        document.getElementById("link-error").style.display = "inline-block";
        isValid = false;
    }

    let otherL = document.getElementById("other").value;
    if(meet=="other" && !otherL){
        //please specify
        document.getElementById("err-other").style.display="block";
        isValid = false;
    }

    //validate link
    return isValid;
}

function clearErrors(){
    let errors = document.getElementsByClassName("err");
    for(let i=0; i<errors.length; i++){
        errors[i].style.display = "none";
    }
}

let howWeMeet = document.getElementById("meet");

howWeMeet.addEventListener('change', function(){
    if(howWeMeet.value=="other"){
        //add please specify field
        document.getElementById("meetBox").style.gridColumn = "span 3";
        document.getElementById("otherL").style.display = "block";
    }
    else{
        document.getElementById("meetBox").style.gridColumn = "span 6";
        document.getElementById("otherL").style.display = "none";
    }
});

let mailingList = document.getElementById("theList");

mailingList.addEventListener('change', function(){
    if(mailingList.checked){
        document.getElementById("emailTypeBox").style.display="block";
    }
    else{
        document.getElementById("emailTypeBox").style.display="none";
    }
})