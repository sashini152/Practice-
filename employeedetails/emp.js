document
  .getElementById("Employeedetails")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name !== "" && email.includes("@gmail.com")) {
      alert(
        "Registration Successful!\n" +
        "name : " + name + "\n" +
        "email : " + email
     );

     
    } else if (name === "") {
      alert("Please enter name");
    } else if (!email.includes("@gmail.com")) {
      alert("Please enter a valid Gmail address");
    }
  });
