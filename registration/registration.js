document.getElementById("heading").innerHTML = "Welcome!";

function welcome() {
    alert("Welcome to our registration page!");
}

welcome();

document.getElementById("registrtationForm").addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("job").value;
    const password = document.getElementById("password").value;

    if (password.length < 8) {
      alert("password tooshort");
    }
    if (name === "" || email === "" || job === "") {
      alert("please fill all field");
      return;
    }

    alert("Registration Successful!\n");
    
  });

document.getElementById("empdetails").addEventListener("click",function(Event){
  window.location.href="../employeedetails/emp.html";
});
