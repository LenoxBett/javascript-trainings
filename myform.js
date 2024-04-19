// let myname  = prompt("Enter name")

// document.getElementById("form").innerHTML = myname

let form = document.getElementById("myform");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let fname = document.getElementById("fname").value;
  let sname = document.getElementById("sname").value;
  let full_name = fname + " " + sname;
  document.getElementById("full_name").innerText = full_name;
});
