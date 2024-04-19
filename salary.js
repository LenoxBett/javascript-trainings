let form = document.getElementById("myform");

form.addEventListener("submit", function (e) {
  // prevent page from refreshing
  e.preventDefault();

  // GET FORM INPUT TO js
  let salary = document.getElementById("salary").value;
  let profits = document.getElementById("profits").value;

  // check if all field have values

  if (salary == "" || profits == ""){
    let result = "check input fields"
    document.getElementById("gross_salary").innerHTML="check inputs field"
  }else {
    let gross_salary = Number(salary) + Number(profits);
    document.getElementById("gross_salary").innerText = gross_salary;


  }

});
