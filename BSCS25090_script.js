window.onload = function greet() {
    alert("Welcome to CRIC WORLD!");
};

document.getElementById("demo").textContent = "CRIC WORLD " + new Date().getFullYear(); 

function getstock(id) {
    let check=document.getElementById(id).textContent;
    if (check.includes('In Stock')){
        alert("Item is in stock");
    } else {
        alert ("Item is out of stock")
    }
}
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (message === "") {
        alert("Please enter your message.");
        return false;
    }
    alert("Form submitted successfully!");
    document.querySelector("form").reset();
    return false;
}
function send() {
    let input = document.getElementById("msg").value.toLowerCase();
    let chat = document.getElementById("chat");
  
    // Show user message
    let userMsg = document.createElement("p");
    userMsg.textContent = "You: " + input;
    chat.appendChild(userMsg);
  
    // Get bot response
    let botMsg = document.createElement("p");
    botMsg.textContent = "Bot: " + reply(input);
    chat.appendChild(botMsg);
  
    // Clear input
    document.getElementById("msg").value = "";
  }
  
  function reply(input) {
    if (input.includes("hello") || input.includes("hi")) {
      return "Hello! How may I help you today?";
    
    } else if (input.includes("how are you")) {
      return "I am fine, how are you?";
    
    } else if (input.includes("bye")) {
      return "Goodbye, Have a nice day!";

    } else {
      return "Sorry, this is an invalid input.";
    }
  }
