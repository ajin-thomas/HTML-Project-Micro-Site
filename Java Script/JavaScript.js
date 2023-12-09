// script.js

document.addEventListener('DOMContentLoaded', function () {
    var addToCartButtons = document.querySelectorAll('.product button');

    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {

            alert('Product added to cart!');
        });
    });
});
