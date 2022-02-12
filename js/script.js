


/* --------------------- footer-date -------------------------*/


new Date().getFullYear()
document.getElementById("year").innerHTML = "&copy; Copyright" + new Date().getFullYear();


/* --------------------- add to cart -------------------------*/

let carts = document.querySelectorAll('.add-cart, .button-cart');

let products = [
    {
        name: "Kristina Dam Oak Table White Marble Top",
        tag: "product",
        price: 799,
        incart: 0

    },
    {
        name: "Active Facial Mask and Charcoal Soap",
        tag: "product",
        price: 129,
        incart: 0

    },
    {
        name: "ocktail Table Walnut | YES",
        tag: "product",
        price: 299,
        incart: 0

    },
    {
        name: "Hay - About A Long Chair AAL 93",
        tag: "product",
        price: 659,
        incart: 0

    },
    {
        name: "TORY DESK CALENDAR",
        tag: "product",
        price: 410,
        incart: 0

    },
    {
        name: "CH445 Wing Chair on SUITE NY",
        tag: "product",
        price: 330,
        incart: 0

    },
    {
        name: "Hay - About A Long Chair AAL 93",
        tag: "product",
        price: 659,
        incart: 0

    }
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart-bag span').textContent = productNumbers;
        document.querySelector('.cart-bag--mobile span').textContent = productNumbers;
    }
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart-bag span').textContent = productNumbers + 1;
        document.querySelector('.cart-bag--mobile span').textContent = productNumbers + 1;

    } else {
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.cart-bag span').textContent = 1;
        document.querySelector('.cart-bag--mobile span').textContent = 1;
    }


}


onLoadCartNumbers();


/* --------------------- add to wishlist -------------------------*/


let wishes = document.querySelectorAll('.add-wish');

let productsWish = [
    {
        name: "Kristina Dam Oak Table White Marble Top",
        tag: "product",
        price: 799,
        incart: 0

    },
    {
        name: "Active Facial Mask and Charcoal Soap",
        tag: "product",
        price: 129,
        incart: 0

    },
    {
        name: "ocktail Table Walnut | YES",
        tag: "product",
        price: 299,
        incart: 0

    },
    {
        name: "Hay - About A Long Chair AAL 93",
        tag: "product",
        price: 659,
        incart: 0

    },
    {
        name: "TORY DESK CALENDAR",
        tag: "product",
        price: 410,
        incart: 0

    },
    {
        name: "CH445 Wing Chair on SUITE NY",
        tag: "product",
        price: 330,
        incart: 0

    },

];

for (let i = 0; i < wishes.length; i++) {
    wishes[i].addEventListener('click', () => {
        wishNumbers();
    })
}

function onLoadWishNumbers() {
    let productWishNumbers = localStorage.getItem('wishNumbers');

    if (productWishNumbers) {
        document.querySelector('.wish-heart span').textContent = productWishNumbers;
        document.querySelector('.wish-heart--mobile span').textContent = productWishNumbers;
    }
}

function wishNumbers() {
    let productWishNumbers = localStorage.getItem('wishNumbers');

    productWishNumbers = parseInt(productWishNumbers);

    if (productWishNumbers) {
        localStorage.setItem('wishNumbers', productWishNumbers + 1);
        document.querySelector('.wish-heart span').textContent = productWishNumbers + 1;
        document.querySelector('.wish-heart--mobile span').textContent = productWishNumbers + 1;

    } else {
        localStorage.setItem('wishNumbers', 1)
        document.querySelector('.wish-heart span').textContent = 1;
        document.querySelector('.wish-heart--mobile span').textContent = 1;
    }


}

onLoadWishNumbers();

/* --------------------- product page select number -------------------------*/

function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}

/* --------------------- product page read more -------------------------*/


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}


/* --------------------- cookie-------------------------*/

const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed", "true")
});

setTimeout(() => {
    if (!localStorage.getItem("cookieBannerDisplayed"))
        cookieContainer.classList.add("active")
}, 10000);


const cookieButtonX = document.querySelector(".cookie-x");

cookieButtonX.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    sessionStorage.setItem("cookieBannerDisplayed", "true")
});

setTimeout(() => {
    if (!sessionStorage.getItem("cookieBannerDisplayed"))
        cookieContainer.classList.add("active")
}, 10000);


/* --------------------- password-------------------------*/


window.onclick = function (event) {

    var modal = document.getElementById('id01');
    var modal1 = document.getElementById('id02');

    if (event.target == modal) {
        modal.style.display = "none";
        
    } else if (event.target == modal1){
        modal1.style.display = "none";
    }
}



// window.onclick = function (event1) {
//     if (event1.target == modal1) {
        
//     }
// }


const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#id_password');



togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

/* --------------------- password mobile -------------------------*/

const togglePassword1 = document.querySelector('#togglePassword1');
const password1 = document.querySelector('#id_password1');

togglePassword1.addEventListener('click', function (e1) {
    // toggle the type attribute
    const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
    password1.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});


/* --------------------- nav mobile -------------------------*/


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-primary')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})





