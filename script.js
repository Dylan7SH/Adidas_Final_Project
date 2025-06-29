/* Dylan Scott-Hickling 
GIT 417
June 2025 */

"use strict";

document.addEventListener("DOMContentLoaded", function() {
    let toggle = document.getElementById("themeToggle");
    toggle.addEventListener("change", function() {
        document.body.classList.toggle("dark");
    });

    /* Product Display */

    let products = [
        {
            name: "Ultraboost 1.0",
            image: "images/Ultraboost_1.0_Shoes_White_HQ4207_HM1.jpg.avif", 
            description: "Experience unmatched comfort and responsiveness with the lightest Ultraboost ever."
        },
        {
            name: "Adidas Samba",
            image: "images/Samba_Originals_Shoes_Green_ID2054_01_standard.jpg.avif",
            description: "Classic street style meets comfort in the Adidas Samba."
        },
        {
            name: "Adidas Mary Jane",
            image: "images/Samba_Jane_Shoes_Red_JQ6446_01_00_standard.jpg.avif",
            description: "A stylish twist on sporty footwear, perfect for everyday wear."
        },
        {   name: "Defender 5 Bakcpack",
            image: "images/defender-5-backpack.jpg.avif",
            description: "Carry your gear in style with this durable and water-resistant backpack."
        }
    ];

    let productButtons = document.getElementById("product-buttons");
    let productDisplay = document.getElementById("product-display");

    function displayProduct(index) {
        let product = products[index];
        productDisplay.innerHTML = `<h3>${product.name}</h3><img src="${product.image}" alt="${product.name}"><p>${product.description}</p>`;
    }

    products.forEach(function(product, index) {
        let btn = document.createElement("button");
        btn.textContent = product.name;
        btn.addEventListener("click", function() {
            displayProduct(index);
        });
        productButtons.appendChild(btn);
    });

    displayProduct(0);

    /* Game Play */

    let guessInput = document.getElementById("guessInput");
    let guessBtn = document.getElementById("guessBtn");
    let resetGuessBtn = document.getElementById("resetGuessBtn");
    let guessResult = document.getElementById("gameResult");

    guessBtn.addEventListener("click", function() {
        let userGuess = parseInt(guessInput.value);
        let randomNum = Math.floor(Math.random() * 10) + 1;
        if (userGuess === randomNum) {
            gameResult.textContent = `You guessed it! The number was ${randomNum}.`;
        }else{
            gameResult.textContent = `Try again! You guess ${userGuess}, but the number was ${randomNum}.`;
        }
    });

    resetGuessBtn.addEventListener("click", function() {
        guessInput.value = "";
        gameResult.textContent = "";
    });
    /* Contact Form */
    let contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let fullName = document.getElementById("fullName").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let comments = document.getElementById("comments").value.trim();
        let contactMethod = document.querySelector("input[name='contactMethod']:checked");

        let nameError = document.getElementById("nameError");
        let emailError = document.getElementById("emailError");
        let phoneError = document.getElementById("phoneError");
        let commentsError = document.getElementById("commentsError");
        let contactMethodError = document.getElementById("contactMethodError");
        let submissionMessage = document.getElementById("submissionMessage");

        nameError.textContent = "";
        emailError.textContent = "";
        phoneError.textContent = "";
        commentsError.textContent = "";
        contactMethodError.textContent = "";
        submissionMessage.textContent = "";

        let hasError = false;

        if (fullName === "") {
            nameError.textContent = "Full name is required.";
            hasError = true;
        }

        if (comments === "") {
            commentsError.textContent = "Comments are required.";
            hasError = true;
        }

        if (!contactMethod) {
            contactMethodError.textContent = "Please select a contact method.";
            hasError = true;
        }else if (contactMethod.value === "email" && !/^\S+@\S+\.\S+$/.test(email)) {
            emailError.textContent = "Enter a valid email address.";
            hasError = true;
        }else if (contactMethod.value === "phone" && !/^\d{10}$/.test(phone)) {
            phoneError.textContent = "Enter a 10-digit phone number.";
            hasError = true;
        }

        if (!hasError) {
            let customer = {
                fullName,
                email,
                phone,
                comments,
                preferredContact: contactMethod.value   
            };

            contactForm.reset();
            submissionMessage.innerHTML = `<strong>Thank you, ${customer.fullName}!</strong><br>We will contact via ${customer.preferredContact}.<br>Message: "${customer.comments}"`;
        }
    });
});