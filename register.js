document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // const name = document.getElementById('fullname').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Basic validation
    if (username && email && password) {
        document.getElementById('message').innerText = "Registration successful!";
        document.getElementById('message').style.color = "green";
    } else {
        document.getElementById('message').innerText = "Please fill in all fields.";
        document.getElementById('message').style.color = "red";
    }
});
