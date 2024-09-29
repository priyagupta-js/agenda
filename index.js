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
        let message = text.value.trim();
        // results.innerHTML = message;
        let Li = document.createElement("li");
        let textNode = document.createTextNode(message);
        Li.appendChild(textNode);
       
        if (message === "")
            {
            alert("You must write something");
            } 
        else 
        {
            results.appendChild(Li);
        }
        text.value = "";

        // Add a close button and append it to a list
        let span = document.createElement("span");
        let close_btn = document.createTextNode("\u00D7");
        span.setAttribute("class","close");
        span.appendChild(close_btn);
        Li.appendChild(span);

        // remove the list when close button is clicked
          span.onclick = function(){
            // get the parent element 
            let parent = this.parentElement;
            parent.style.display = "none";
        }
  }
// }

// create a close button
let myNodelist = document.getElementsByTagName("LI");

for (let i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

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





