// Example JavaScript for additional functionality, such as form validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        let valid = true;

        // Name validation
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            alert('Name is required.');
            valid = false;
        }

        // Email validation
        const email = document.getElementById('email');
        if (email.value.trim() === '') {
            alert('Email is required.');
            valid = false;
        }

        // Message validation
        const message = document.getElementById('message');
        if (message.value.trim() === '') {
            alert('Message is required.');
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});

// Log a message when the section is scrolled into view
document.getElementById('semantics').onscroll = function() {
    console.log("You are scrolling in the Semantics section");
};

