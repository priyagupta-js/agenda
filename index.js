let text = document.querySelector("#text");
let S_button = document.querySelector("#btn-submit");
let results = document.querySelector("#D_results");

S_button.addEventListener("keypress", displayList);
S_button.addEventListener("click", displayList);
// when add button is clicked or ENTER is pressed, a new list is added below the button

function displayList(event) 
{
//   if (event.key == "Enter") 
    // {
        event.preventDefault();
        // document.getElementById("btn-submit").click();
        message = text.value;
        // results.innerHTML = message;
        let Li = document.createElement("li");
        let textNode = document.createTextNode(message);
        Li.appendChild(textNode);
        if (message === " ") 
            {
            alert("You must write something");
            } 
        else 
        {
            results.appendChild(Li);
        }
        text.value = " ";
    // Li.style.listStyleType = "none";
  }
// }

// add a checked symbol when clicked on the list item
let list = document.querySelector("ul");

// addEventListener has three parameter here -> click event ,
//  function , false (controls the use of event bubbling)

// this anonymous callback function will run when click event will happen.
list.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    }

    //false here indicates that the event should not be captured in the capture phase but in the bubbling phase (default behavior).
  },
  false
);
