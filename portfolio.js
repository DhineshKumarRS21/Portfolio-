const labels = document.querySelectorAll("label");

labels.forEach(label => {
    label.innerHTML = label.innerText + '<span style="color:red"> *</span>';
});


const fullname=document.querySelector("#nameid");
const email=document.querySelector("#emailid");
const subject=document.querySelector("#subjectid");
const message=document.querySelector("#messageid");
const form=document.querySelector("#form");
form.addEventListener("submit",event =>{
    event.preventDefault();
    validate();
})

function validate(){
    const fullnameval=fullname.value.trim();
    const emailval=email.value.trim();
    const subjectval=subject.value.trim();
    const messageval=message.value.trim();
    const msg="This field is required"
    if(fullnameval===""){
        seterror(fullname,msg);
    }
    else{
        setsuccess(fullname);
    }
    if (emailval === '') {
        seterror(email, 'Email is required');
    } 
    else if (!validateEmail(emailval)) {
        seterror(email, 'Please enter a valid email'); 
    } else {
        setsuccess(email);
    }
    if(subjectval===""){
        seterror(subject,msg);
    }
    else{
        setsuccess(subject)
    }
    if(messageval===""){
        seterror(message,msg);
    }
    else{
        setsuccess(message);
    }

}

function seterror(values,msg){
    const parent=values.parentElement;
    const errfield=parent.querySelector(".error");
    errfield.innerText=msg;
    parent.classList.add('error');
    parent.classList.remove('success');

}
function setsuccess(values){
const parent=values.parentElement;
    const errfield=parent.querySelector(".error");
    errfield.innerText='';
    parent.classList.add('success');
    parent.classList.remove('error');
}
function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
