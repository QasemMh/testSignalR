//import { signalR } form '../js/signalr/dist/browser/signalr.js';



let connection = new signalR.HubConnectionBuilder().withUrl("/chat").build();

connection.on("ReciveMessage", (user,message) =>
{
    let tag = document.createElement("li");
    let text = document.createTextNode(`${user} Sent: ${message}`);
    tag.appendChild(text);
    let element = document.getElementById("messages");
    element.appendChild(tag);
 
});

document.getElementById("message-form").addEventListener("submit", (e) =>
{
    e.preventDefault();
    
    let user = document.getElementById("username").value;
    let message = document.getElementById("message").value;
    
    connection.invoke("SendMessage", user, message);
    console.log("Sent...");
})

connection.start();
