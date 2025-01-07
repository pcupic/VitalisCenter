function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let errorMessage = document.getElementById("error-message");

    // Check if name, email, and message are not empty
    if (name === "" || email === "" || message === "") {
        errorMessage.style.display = "block";
        return false;
    }

    // Validate email format using a regular expression
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Please enter a valid email address!";
        return false;
    }

    // If all checks pass
    errorMessage.style.display = "none";
    alert("Form submitted successfully!");
    return true;
}
