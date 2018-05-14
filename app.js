console.log("Hello Louie")



// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);




var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    document.getElementById("date").innerHTML = n;



// Save to local storage:

// Check browser support

function louieSaved() {

if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("checkboxTicked", "Louie Has Been Fed");
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("checkboxTicked")
;
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
}





