//login page banane me madat karega


let abc = document.getElementById("first-div")

 abc = document.getElementById("first-div");

 function createDiv(labelText, inputType, inputId) {
   const label = document.createElement("p");
   label.innerText = labelText + ":";
   label.style.marginTop = "";
   label.style.fontWeight = "bold";
   label.style.fontSize = "20px";

   const inputElement = document.createElement("input");
   inputElement.type = inputType;
   inputElement.id = inputId; // for later use in JS
   inputElement.style.marginTop = "10px";
   inputElement.style.width = "98%";
   inputElement.style.height = "30px";

   abc.appendChild(label);
   abc.appendChild(inputElement);
 }

 // Create email and password fields
 createDiv("Email", "email", "emailInput");
 createDiv("Password", "password", "passwordInput");

 // Create submit button
 const submitBtn = document.createElement("button");
 submitBtn.innerText = "Submit";
 submitBtn.style.marginTop = "30px";
 submitBtn.style.padding = "10px 20px";
 submitBtn.style.fontSize = "16px";
 submitBtn.onclick = function () {
   const email = document.getElementById("emailInput").value;
   const password = document.getElementById("passwordInput").value;

   // Save to localStorage
   localStorage.setItem("email", email);
   localStorage.setItem("password", password);

   alert("Data saved to localStorage!");
 };

 abc.appendChild(submitBtn);



    