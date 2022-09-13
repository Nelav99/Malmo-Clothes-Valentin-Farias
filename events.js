//Menu Mobile
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
} else {
    bar = bar;
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
} else {
    close = close;
}

// Constructor de productos:
class Product {
    constructor(image, create, name, stars, price) {
        this.image = image;
        this.create = create;
        this.name = name;
        this.starts = stars;
        this.price = price;
    }
}

const product1 = new Product('../img/products/f1.jpg', 'Malmö', 'Sunflowers Shirts', '4.8/5', 38.99);
const product2 = new Product('../img/products/f2.jpg', 'Malmö', 'Coconut Beach Shirts', '5/5', 38.99);
const product3 = new Product('../img/products/f3.jpg', 'Malmö', 'Cést La Vie T-Shirts', '4.6/5', 18.99);
const product4 = new Product('../img/products/f4.jpg', 'Malmö', 'Mawi T-Shirts', '4.3/5', 18.99);
const product5 = new Product('../img/products/f5.jpg', 'Malmö', 'Pineapple Shirts', '5/5', 38.99);
const product6 = new Product('../img/products/f6.jpg', 'Malmö', 'Multi-Brown Jacket', '4.4/5', 52.99);
const product7 = new Product('../img/products/f7.jpg', 'Malmö', 'Stockholm Jacket', '5/5', 52.99);
const product8 = new Product('../img/products/f8.jpg', 'Malmö', 'Classic Trousers', '4.2/5', 25.99);
const product9 = new Product('../img/products/n1.jpg', 'Malmö', 'Chest Pocket T-Shirt', '4.8/5', 38.99);
const product10 = new Product('../img/products/n2.jpg', 'Malmö', 'Two-Tone Pants', '5/5', 24.99);
const product11 = new Product('../img/products/n3.jpg', 'Malmö', 'Casual Loose Pants', '4.6/5', 24.99);
const product12 = new Product('../img/products/n4.jpg', 'Malmö', 'Striped Shirts', '4.3/5', 38.99);
const product13 = new Product('../img/products/n5.jpg', 'Malmö', 'Pineapple Set', '5/5', 58.99);
const product14 = new Product('../img/products/n6.jpg', 'Malmö', 'Multi-Lines Set', '4.4/5', 58.99);
const product15 = new Product('../img/products/n7.jpg', 'Malmö', 'Sunflower Up Shirts', '5/5', 38.99);
const product16 = new Product('../img/products/n8.jpg', 'Malmö', 'Sun & Moon Shirts', '4.2/5', 38.99);
const product17 = new Product('../img/products/n9.jpg', 'Malmö', 'Three Color T-Shirt', '5/5', 22.99);
const product18 = new Product('../img/products/n10.jpg', 'Malmö', 'Color Curve T-Shirt', '4.4/5', 22.99);
const product19 = new Product('../img/products/n11.jpg', 'Malmö', 'Tomorrow T-Shirt', '5/5', 24.99);
const product20 = new Product('../img/products/n12.jpg', 'Malmö', 'NASA T-Shirt', '4.2/5', 24.99);

const products = [];

products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);
products.push(product5);
products.push(product6);
products.push(product7);
products.push(product8);

const arrivals = [];

arrivals.push(product9);
arrivals.push(product10);
arrivals.push(product11);
arrivals.push(product12);
arrivals.push(product13);
arrivals.push(product14);
arrivals.push(product15);
arrivals.push(product16);
arrivals.push(product17);
arrivals.push(product18);
arrivals.push(product19);
arrivals.push(product20);


// Funcion para mostrar productos Section Featured
function showProducts(products) {
    let productContainer = document.getElementById("containerProd");
    productContainer.innerHTML = "";

    products.forEach(product => {
            let divContainerProduct = document.createElement('div');
            divContainerProduct.classList.add('pro');
            // divContainerProduct.classList.add('openProductDetails');
            divContainerProduct.innerHTML = `
            <div class="openProductDetails" onclick="openProduct()">
            <img src="${product.image}" alt="${product.name}">
            <div class="des">
                <span>${product.create}</span>
                <h5>${product.name}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>$${product.price}</h4>
            </div>
            <a href="#"><i class="fas fa-shopping-cart cart"></i></a>
            </div>`
            productContainer.appendChild(divContainerProduct);
        });
}

showProducts(products);

function openProduct() {
    window.location.assign("../pages/sproduct.html");
}

//Funcion para mostrar New Arrivals
function showArrivals(arrivals) {
    let arrivalsContainer = document.getElementById("arrivalContainer");
    arrivalsContainer.innerHTML = "";

    arrivals.forEach(product => {
            let divContainerArrivals = document.createElement('div');
            divContainerArrivals.classList.add('pro');
            // divContainerProduct.classList.add('openProductDetails');
            divContainerArrivals.innerHTML = `
            <div class="openProductDetails" onclick="openProduct()">
            <img src="${product.image}" alt="${product.name}">
            <div class="des">
                <span>${product.create}</span>
                <h5>${product.name}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>$${product.price}</h4>
            </div>
            <a href="#"><i class="fas fa-shopping-cart cart"></i></a>
            </div>`
            arrivalsContainer.appendChild(divContainerArrivals);
        });
}

showArrivals(arrivals);