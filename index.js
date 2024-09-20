let text = document.querySelector("#text");
let S_button = document.querySelector("#btn-submit");
let results = document.querySelector("#D_results");


S_button.addEventListener("click",displayList);

function displayList(event)
{
    event.preventDefault();
    message = text.value;
    // results.innerHTML = message;
    let Li = document.createElement("li");
    let textNode = document.createTextNode(message);
    Li.appendChild(textNode);
    if (message == " ")
    {
        alert("You must write something");
    }
    else
    {
        results.appendChild(Li);
    }
    text.value=" ";
    // LiElement.style.listStyleType = "circle";
    
}


