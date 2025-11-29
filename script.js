//1. PRODUCT LISTS

var featuredProducts = [
    { id: 1, name: "Dior Sauvage", price: 59.99, image: "images/dior.jpg", category: "Men" },
    { id: 2, name: "Black Opium", price: 84.99, image: "images/opium.jpg", category: "Women" },
    { id: 3, name: "Tom Ford Ombre", price: 99.99, image: "images/tomford.jpg", category: "Men" }
];

var topSellerProducts = [
    { id: 4, name: "Bleu De Chanel", price: 119.99, image: "images/chanel.jpg", category: "Women" },
    { id: 5, name: "Nishane Hacivat", price: 129.99, image: "images/nishane.jpg", category: "Men" },
    { id: 6, name: "Gucci Bloom", price: 94.99, image: "images/gucci.jpg", category: "Women" }
];

var menProducts = [
    { id: 7, name: "Dior Sauvage", price: 59.99, image: "images/dior.jpg", category: "Men" },
    { id: 5, name: "Nishane Hacivat", price: 129.99, image: "images/nishane.jpg", category: "Men" },
    { id: 3, name: "Tom Ford Ombre", price: 99.99, image: "images/tomford.jpg", category: "Men" }
];

var womenProducts = [
    { id: 10, name: "Black Opium", price: 84.99, image: "images/opium.jpg", category: "Women" },
    { id: 11, name: "Gucci Bloom", price: 94.99, image: "images/gucci.jpg", category: "Women" },
    { id: 12, name: "Bleu De Chanel", price: 119.99, image: "images/chanel.jpg", category: "Women" }
];

var categories = [
    { name: "Men's Wear", img: "images/men.jpg", pageLink: "men-category" },
    { name: "Women's Wear", img: "images/women.jpg", pageLink: "women-category" }
];


// Categories
var categories = [
    { name: "Men's Wear", img: "images/men.jpg", pageLink: "men-category" },
    { name: "Women's Wear", img: "images/women.jpg", pageLink: "women-category" }
];

// Shopping Cart
var myCart = []; 

//2. STARTUP
window.onload = function() {
    console.log("Website loaded successfully."); // Requirement: Console Log 1

    displayHomeProducts();
    displayBestSellers();
    displayCategories();
    displayMenProducts();
    displayWomenProducts();
};

// 3. DISPLAY FUNCTIONS  

function displayHomeProducts() {
    var productBox = document.getElementById("home-product-list");
    var htmlCode = "";

   
    for (var i = 0; i < featuredProducts.length; i++) {
        var p = featuredProducts[i];
    
        htmlCode += `
            <div class="col-md-4">
                <div class="card card-custom h-100 p-3">
                    <img src="${p.image}" class="card-img-top">
                    <div class="card-body text-center">
                        <h5 class="card-title">${p.name}</h5>
                        <p class="text-secondary">${p.category}</p>
                        <p class="fw-bold">$${p.price}</p>
                        <button class="btn btn-purple w-100" onclick="addToCart(${p.id})">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
    }
   
    if(productBox) {
        productBox.innerHTML = htmlCode;
    }
}

function displayBestSellers() {
    var productBox = document.getElementById("bestseller-product-list");
    var htmlCode = "";

    for (var i = 0; i < topSellerProducts.length; i++) {
        var p = topSellerProducts[i];
        htmlCode += `
            <div class="col-md-4">
                <div class="card card-custom h-100 p-3">
                    <img src="${p.image}" class="card-img-top">
                    <div class="card-body text-center">
                        <h5 class="card-title">${p.name}</h5>
                        <p class="text-secondary">${p.category}</p>
                        <p class="fw-bold">$${p.price}</p>
                        <button class="btn btn-purple w-100" onclick="addToCart(${p.id})">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
    }
    if(productBox) {
        productBox.innerHTML = htmlCode;
    }
}

function displayMenProducts() {
    var productBox = document.getElementById("men-product-list");
    var htmlCode = "";

    for (var i = 0; i < menProducts.length; i++) {
        var p = menProducts[i];
        htmlCode += `
            <div class="col-md-4">
                <div class="card card-custom h-100 p-3">
                    <img src="${p.image}" class="card-img-top">
                    <div class="card-body text-center">
                        <h5 class="card-title">${p.name}</h5>
                        <p class="text-secondary">${p.category}</p>
                        <p class="fw-bold">$${p.price}</p>
                        <button class="btn btn-purple w-100" onclick="addToCart(${p.id})">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
    }
    if(productBox) {
        productBox.innerHTML = htmlCode;
    }
}

function displayWomenProducts() {
    var productBox = document.getElementById("women-product-list");
    var htmlCode = "";

    for (var i = 0; i < womenProducts.length; i++) {
        var p = womenProducts[i];
        htmlCode += `
            <div class="col-md-4">
                <div class="card card-custom h-100 p-3">
                    <img src="${p.image}" class="card-img-top">
                    <div class="card-body text-center">
                        <h5 class="card-title">${p.name}</h5>
                        <p class="text-secondary">${p.category}</p>
                        <p class="fw-bold">$${p.price}</p>
                        <button class="btn btn-purple w-100" onclick="addToCart(${p.id})">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
    }
    if(productBox) {
        productBox.innerHTML = htmlCode;
    }
}

function displayCategories() {
    var categoryBox = document.getElementById("category-list");
    var htmlCode = "";

    for (var i = 0; i < categories.length; i++) {
        var c = categories[i];
        htmlCode += `
            <div class="col-md-5">
                <div class="card card-custom h-100 p-3">
                    <img src="${c.img}" style="height: 250px; object-fit: cover;">
                    <div class="card-body text-center">
                        <h4>${c.name}</h4>
                        <button class="btn btn-purple mt-2" onclick="showPage('${c.pageLink}')">View Products</button>
                    </div>
                </div>
            </div>
        `;
    }
    if(categoryBox) {
        categoryBox.innerHTML = htmlCode;
    }
}

//4. NAVIGATION 

function showPage(pageName) {

    var allPages = document.querySelectorAll('.page-section');
    for (var i = 0; i < allPages.length; i++) {
        allPages[i].classList.remove('active-page');
    }

    
    var pageToShow = document.getElementById(pageName);
    if(pageToShow) {
        pageToShow.classList.add('active-page');
    }
    
    
    window.scrollTo(0, 0);

    
    if(pageName === 'payment') {
        updatePaymentTotal();
    }
    
    console.log("Navigated to: " + pageName); // Requirement: Console Log 2
}

//5. CART LOGIC 

function addToCart(id) {
    
    var allProducts = featuredProducts.concat(topSellerProducts, menProducts, womenProducts);
    var productToAdd = null;
    
    for(var i = 0; i < allProducts.length; i++) {
        if(allProducts[i].id === id) {
            productToAdd = allProducts[i];
            break; 
        }
    }

    
    var alreadyInCart = false;
    for(var i = 0; i < myCart.length; i++) {
        if(myCart[i].id === id) {
            myCart[i].qty = myCart[i].qty + 1; 
            alreadyInCart = true;
            break;
        }
    }

    if(alreadyInCart === false) {
        myCart.push({
            id: productToAdd.id,
            name: productToAdd.name,
            price: productToAdd.price,
            image: productToAdd.image,
            qty: 1
        });
    }

    updateCartDisplay();
    alert("Item added to cart!"); // Requirement: Alert 1
    console.log("Cart size: " + myCart.length); // Requirement: Console Log 3
}

function updateCartDisplay() {

    var totalCount = 0;
    for(var i=0; i<myCart.length; i++) {
        totalCount += myCart[i].qty;
    }
    document.getElementById("cart-count").innerText = totalCount;

    
    var cartBox = document.getElementById("cart-items");
    var htmlCode = "";
    var subtotal = 0;

    if(myCart.length === 0) {
        htmlCode = "<p class='text-center mt-5'>Your cart is empty.</p>";
    } else {
        for(var i=0; i<myCart.length; i++) {
            var item = myCart[i];
            subtotal += item.price * item.qty;

            htmlCode += `
                <div class="card bg-dark border-secondary mb-3 p-2">
                    <div class="row align-items-center">
                        <div class="col-3">
                            <img src="${item.image}" class="img-fluid rounded">
                        </div>
                        <div class="col-5">
                            <h5 class="mb-1 text-white">${item.name}</h5>
                            <p class="mb-0 text-white-50">$${item.price}</p>
                        </div>
                        <div class="col-4 text-end">
                            <span class="d-block mb-2 text-white">Qty: ${item.qty}</span>
                            <button class="btn btn-sm btn-danger" onclick="removeItem(${item.id})">Remove</button>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    if(cartBox) {
        cartBox.innerHTML = htmlCode;
    }
    
    
    var subElem = document.getElementById("subtotal-price");
    var totElem = document.getElementById("total-price");
    
    if (subElem) subElem.innerText = "$" + subtotal.toFixed(2);
    
    var grandTotal = 0;
    if(subtotal > 0) {
        grandTotal = subtotal + 10; 
    }
    
    if (totElem) totElem.innerText = "$" + grandTotal.toFixed(2);
}

function removeItem(id) {
    var newCart = [];
    
    for(var i=0; i<myCart.length; i++) {
        if(myCart[i].id !== id) {
            newCart.push(myCart[i]);
        }
    }
    myCart = newCart;
    updateCartDisplay();
}

//6. PAYMENT & FORMS 

function toggleCardDetails() {
    var dropdown = document.getElementById("payment-method");
    var cardBox = document.getElementById("card-details-box");
    
    
    if(dropdown.value === "card") {
        cardBox.style.display = "block";
    } else {
        cardBox.style.display = "none";
    }
}

function updatePaymentTotal() {
    
    var totalText = document.getElementById("total-price").innerText;
    document.getElementById("pay-display").innerText = totalText;
}

function handlePayment(event) {
    event.preventDefault(); 
    
    var name = document.getElementById("customer-name").value;
    if(name === "") name = "Guest";
    
    alert("Thank you " + name + "! Your order has been placed."); // Requirement: Alert 2
    
    
    myCart = [];
    updateCartDisplay();
    showPage('home');
}

//7. LOGIN/SIGNUP LOGIC 

function showLoginForm() {
    document.getElementById('login-box').style.display = 'block';
    document.getElementById('signup-box').style.display = 'none';
    
    
}

function showSignupForm() {
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('signup-box').style.display = 'block';
    
    
}

function handleLogin(event) {
    event.preventDefault();
    alert("Login Successful! Welcome."); // Requirement: Alert 3
    showPage('home');
}

function handleSignup(event) {
    event.preventDefault(); 
    alert("Account created successfully!");
    showPage('home');
}