//new input ya kuch or add karne ke liye use karna


const abc = document.getElementById("first-div");

function createDiv(inputType) {
  const inputElement = document.createElement("input"); // नया इनपुट एलिमेंट बनाना
  inputElement.type = inputType; // उसका type सेट करना (जैसे "text", "checkbox")
  abc.appendChild(inputElement); // उसे div के अंदर जोड़ना
}

createDiv("text");
