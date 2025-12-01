// typing text animation
const text =
    "Highly motivated B-Tech student with a strong background in programming and web development. " +
    "Passionate about creating innovative solutions and continuously learning new technologies.";

let index = 0;
const speed = 40;

function typeText() {
    if (index < text.length) {
        document.getElementById("typingText").textContent += text.charAt(index);
        index++;
        setTimeout(typeText, speed);
    }
}
window.onload = typeText;


// education scroll animation
document.addEventListener("DOMContentLoaded", () => {
    const eduItems = document.querySelectorAll(".edu-animate");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2
    });

    eduItems.forEach(item => observer.observe(item));
});


// contact form validation
function handleSubmit() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const responseDiv = document.getElementById("formResponse");

    if (!name || !email || !subject || !message) {
        responseDiv.innerHTML = '<p class="error">Please fill in all required fields.</p>';
        responseDiv.style.display = "block";
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        responseDiv.innerHTML = '<p class="error">Please enter a valid email address.</p>';
        responseDiv.style.display = "block";
        return;
    }

    responseDiv.innerHTML = '<p class="success">Thank you for reaching out! I will get back to you soon.</p>';
    responseDiv.style.display = "block";

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";

    setTimeout(() => {
        responseDiv.style.display = "none";
    }, 5000);
}
