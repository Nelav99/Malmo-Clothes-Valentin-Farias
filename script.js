// NavBar Start
//Menu Mobile
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

//NavBar End

//Products Start
// Constructor de productos:
class Product {
    constructor(id, image, create, name, stars, price, category) {
        this.id = id;
        this.image = image;
        this.create = create;
        this.name = name;
        this.starts = stars;
        this.price = price;
        this.category = category;
    }
}

const product1 = new Product(1, '../img/products/f1.jpg', 'Malmö', 'Sunflowers Shirts', '4.8/5', 38.99, 'Shirts');
const product2 = new Product(2, '../img/products/f2.jpg', 'Malmö', 'Coconut Beach Shirts', '5/5', 38.99, 'Shirts');
const product3 = new Product(3, '../img/products/f3.jpg', 'Malmö', 'Cést La Vie T-Shirts', '4.6/5', 18.99, 'T-Shirts');
const product4 = new Product(4, '../img/products/f4.jpg', 'Malmö', 'Mawi T-Shirts', '4.3/5', 18.99, 'T-Shirts');
const product5 = new Product(5, '../img/products/f5.jpg', 'Malmö', 'Pineapple Shirts', '5/5', 38.99, 'Shirts');
const product6 = new Product(6, '../img/products/f6.jpg', 'Malmö', 'Multi-Brown Jacket', '4.4/5', 52.99, 'Jacket');
const product7 = new Product(7, '../img/products/f7.jpg', 'Malmö', 'Stockholm Jacket', '5/5', 52.99, 'Jacket');
const product8 = new Product(8, '../img/products/f8.jpg', 'Malmö', 'Classic Trousers', '4.2/5', 25.99, 'Trousers');
const product9 = new Product(9, '../img/products/n1.jpg', 'Malmö', 'Chest Pocket T-Shirt', '4.8/5', 38.99, 'T-Shirts');
const product10 = new Product(10, '../img/products/n2.jpg', 'Malmö', 'Two-Tone Pants', '5/5', 24.99, 'Trousers');
const product11 = new Product(11, '../img/products/n3.jpg', 'Malmö', 'Casual Loose Pants', '4.6/5', 24.99, 'Trousers');
const product12 = new Product(12, '../img/products/n4.jpg', 'Malmö', 'Striped Shirts', '4.3/5', 38.99, 'Shirts');
const product13 = new Product(13, '../img/products/n5.jpg', 'Malmö', 'Pineapple Set', '5/5', 58.99, 'Sets');
const product14 = new Product(14, '../img/products/n6.jpg', 'Malmö', 'Multi-Lines Set', '4.4/5', 58.99, 'Sets');
const product15 = new Product(15, '../img/products/n7.jpg', 'Malmö', 'Sunflower Up Shirts', '5/5', 38.99, 'Shirts');
const product16 = new Product(16, '../img/products/n8.jpg', 'Malmö', 'Sun & Moon Shirts', '4.2/5', 38.99, 'Shirts');
const product17 = new Product(17, '../img/products/n9.jpg', 'Malmö', 'Three Color T-Shirt', '5/5', 22.99, 'T-Shirts');
const product18 = new Product(18, '../img/products/n10.jpg', 'Malmö', 'Color Curve T-Shirt', '4.4/5', 22.99, 'T-Shirts');
const product19 = new Product(19, '../img/products/n11.jpg', 'Malmö', 'Tomorrow T-Shirt', '5/5', 24.99, 'T-Shirts');
const product20 = new Product(20, '../img/products/n12.jpg', 'Malmö', 'NASA T-Shirt', '4.2/5', 24.99, 'T-Shirts');

const products = [];
products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);
products.push(product5);
products.push(product6);
products.push(product7);
products.push(product8);
products.push(product9);
products.push(product10);
products.push(product11);
products.push(product12);
products.push(product13);
products.push(product14);
products.push(product15);
products.push(product16);
products.push(product17);
products.push(product18);
products.push(product19);
products.push(product20);

let features = products.slice(0, 8);
let arrivalsProducts = products.slice(8, 20);
let productPopUp = features + arrivalsProducts;

// Funcion para mostrar productos Section Featured
function showProducts(features) {
    let productContainer = document.getElementById("containerProd");
    productContainer.innerHTML = "";

    features.forEach(product => {
            let divContainerProduct = document.createElement('div');
            divContainerProduct.classList.add('pro');
            divContainerProduct.innerHTML = `
            <div id="btnOpenPopUp" class="openProductDetails"" onclick="openModal()">
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
                <a href=""><i class="fas fa-shopping-cart cart"></i></a>
            </div>`
            productContainer.appendChild(divContainerProduct);
        });
}

showProducts(features);

//Funcion para mostrar New Arrivals
function showArrivals(arrivalsProducts) {
    let arrivalsContainer = document.getElementById("arrivalContainer");
    arrivalsContainer.innerHTML = "";

    arrivalsProducts.forEach(product => {
            let divContainerArrivals = document.createElement('div');
            divContainerArrivals.classList.add('pro');
            divContainerArrivals.innerHTML = `
            <div id="${product.id}" class="openProductDetails" onclick="openModal()">
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
                <a href=""><i class="fas fa-shopping-cart cart"></i></a>
            </div>`
        });
}

showArrivals(arrivalsProducts);

//Funcion para inyectar Modal del Producto
function showModal(productClick) {
    let modalContainer = document.getElementById("modalAdd");
    modalContainer.innerHTML = "";

    productClick.forEach(product => {
            let divContainerModal = document.createElement('div');
            divContainerModal.classList.add('modalContainer');
            divContainerModal.innerHTML = `
                <div class="closeModal" onclick="closeModal()">
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <div class="single-pro-image">
                    <img src="${product.image}" width="100%" id="MainImage" alt="${product.name}">
                </div>
                <div class="single-pro-details">
                    <h6>Home / ${product.category}</h6>
                    <h4>${product.name}</h4>
                    <h2>$${product.price}</h2>
                    <select name="size" id="size">
                        <option value="Select Size">Select Size</option>
                        <option value="Extra Small">XS</option>
                        <option value="Small">S</option>
                        <option value="Medium">M</option>
                        <option value="Large">L</option>
                        <option value="Extra Large">XL</option>
                        <option value="Extra Extra Large">XXL</option>
                    </select>
                    <input type="number" value="1">
                    <button id="add${product.id}" class="normal addToCart">Add To Cart</button>
                    <h4>Product Details</h4>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid debitis enim velit expedita dolorum culpa iure eaque possimus fuga! Rem est, ipsam officiis ratione provident velit.</span>
                </div>`
            modalContainer.appendChild(divContainerModal);
        });
}


// Products End

// PopUp Start
const modalAdd = document.querySelector('#modalAdd');

const openModal = () => {
    modalAdd.style.display = 'flex';
}

const closeModal = () => {
    modalAdd.style.display = 'none';
}

modalAdd.onclick = (event) => {
    if(event.target == modalAdd) {
        closeModal();
    }
}
// PopUp End

