export function validateForm(data){
    console.log("Server-side validation happends here.")
    console.log(data);
    const errors = [];

//   meet: 'online',
//   other: '',
//   Message: ''
// }
// {
//   fname: 'adcwcsd',
//   lname: 'csdcsdc',
//   theList: 'add',
//   emailType: 'html-format'

    //validate first name
    if(data.fname.trim()==""){
        errors.push("First name is required.");
    }
    //validationg Last Name
    if(data.lname.trim()==""){
        errors.push("Last name is required.");
    }
    //validationg method
    const validMeet = ["in-person", "online", "other"];
    if(!validMeet.includes(data.meet)){
        errors.push("Incorect: how we met");
    }
    if(!(typeof data.theList === "undefined")){
        console.log("did it work");
        const validMeet = ["html-format", "text-format"];
        if(!validMeet.includes(data.emailType)){
            errors.push("Incorect: Email Format");
        }
    }


    console.log(errors);
    return {
        isValid: errors.length === 0,
        errors
    }
}