let form = document.getElementById("myform");
let table = document
  .getElementById("usertable")
  .getElementsByTagName("displaytable");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;

  let row = table.insertRow;
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);

  cell1.textContent = fname;
  cell2.textContent = lname;
  cell3.textContent = email;
});
