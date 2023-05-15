//  function seterror(id,error){

//  }

//  function validateForm(){
//     const name = document.forms['myForm']["fname"].value;
//     console.log(name);
//     return false;

//  }

// const form = document.getElementById("form");
// const fname = document.getElementById("fname");
// const lname = document.getElementById("lname");
// const email = document.getElementById("email");
// const password = document.getElementById("password");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   validateInput();
// });

// //  function errorFunc(req,message){
// //     const
// //  }

// const validateInput = () => {
//     const fnameValue=fname.value.trim();
//     const lnameValue=lname.value.trim();
//     const emailValue=email.value.trim();
//     const passwordValue=password.value.trim();

//     if(fnameValue===''){
//         errorFunc(fname,'first name cannot be empty')
//     }
//     else{
//         successFunc(fname)
//     }
// };
// var form = document.getElementById("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const fname = document.getElementById("fname").value;
//   console.log(lname);
//   const lname = document.getElementById("lname").value;
//   console.log(lname);
//   const email = document.getElementById("password").value;
//   console.log(email);
//   const password = document.getElementById("password").value;
//   console.log(password);
// });
///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
const form = document.getElementById("form");
const fname = document.getElementById("name");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("string");
  let messages = [];
  if (fname.value === "" || lname.value == "") {
    messages.push("Name is required");
  }

  if (password.value.length <= 6) {
    messages.push("Password must be longer than 6 characters");
  }

  if (password.value.length >= 20) {
    messages.push("Password must be less than 20 characters");
  }

  if (password.value === "password") {
    messages.push("Password cannot be password");
  }
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.value.match(mailformat)) {
    messages.push("email invalid");
  }
  if (messages.length > 0) {
    errorElement.innerText = messages.join(", ");
  } else {
    errorElement.innerText = "";
  }
});
