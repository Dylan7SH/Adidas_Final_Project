/* Dylan Scott-Hickling 
GIT 417
juNE 2025 */

"use strict";

document.addEventListener("DOMContentLoaded", fucntion() {
    let toggle = document.getElementById("themeToggle");
    toggle.addEventListener("change", fucntion() {
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

    fucntion displayProduct(index) {
        let product = products[index];
        productDisplay.innerHTML = `<h3>${product.name}</h3><img src="${product.image}" alt="${product.name}"><p>${product.description}</p>`;
    }

    products.forEach(function(product, index) {
        let btn = document.createElement("button");
        btn.textContent = product.name;
        btn.addEventListener("click", fucntion() {
            displayProduct(index);
        });
        productButtons.appendChild(btn);
    });

    displayProduct(0);

    /* Game Play */

    let guessInput = document.getElementById("guessInput");
    let guessBtn = document.getElementById("guessBtn");
    let guessResult = document.getElementById("gameResult");

    guessBtn.addEventListener("click", fucntion() {
        let userGuess = parseInt(guessInput.value);
        let randomNum = Math.floor(Math.random() * 10) + 1;
        if (userGuess === randomNum) {
            gameResult.textContent = `You guessed it! The number was ${randomNum}.`;
        }else{
            gameResult.textContent = `Try again! You guess ${userGuess}, but the number was ${randomNum}.`;
        }
    });
    
});