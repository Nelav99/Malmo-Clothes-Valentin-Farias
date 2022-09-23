const cards = document.getElementById('cards');
const items = document.getElementById('items');
const total = document.getElementById('total');
const cartShowContainer = document.getElementById('shoppingCart');
const shoppingCartOutsideClick = document.getElementById('cartContainer');
const modalShow = document.getElementById('modalAdd');
const buttonAddToCart = document.getElementById('btnSetModal');
const cardsArrivals = document.getElementById('cardsArrivals');
const templateCard = document.getElementById('template-card').content;
const templateModal = document.getElementById('template-modal').content;
const templateCart = document.getElementById('template-shopping-cart').content;
const fragment = document.createDocumentFragment();
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
let cart = [];
let modalObject = [];
let modalVariation = [];

cards.addEventListener('click', e => {
    showProductModal(e);
});

cardsArrivals.addEventListener('click', e => {
    showProductModal(e);
});

modalShow.addEventListener('click', e => {
    addToCart(e);
    clickOutside(e);
    // btnActionModal(e);
});

items.addEventListener('click', e => {
    btnAction(e);
});

// NavBar Start
//Menu Mobile
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
const data = [
    {
        "id": 1,
        "image": "../img/products/f1.jpg",
        "imageCart": "../img/products/f1.jpg",
        "create": "Malmö",
        "name": "Sunflowers Shirt",
        "price": 38.99,
        "currency": "$",
        "category": "Shirts"
    },
    {
        "id": 2,
        "image": "../img/products/f2.jpg",
        "imagecart": "../img/products/f2.jpg",
        "create": "Malmö",
        "name": "Coconut Beach Shirts",
        "price": 38.99,
        "currency": "$",
        "category": "Shirts"
    },
    {
        "id": 3,
        "image": "../img/products/f3.jpg",
        "imagecart": "../img/products/f3.jpg",
        "create": "Malmö",
        "name": "Cést La Vie T-Shirt",
        "price": 18.99,
        "currency": "$",
        "category": "T-Shirts"
    },
    {
        "id": 4,
        "image": "../img/products/f4.jpg",
        "imagecart": "../img/products/f4.jpg",
        "create": "Malmö",
        "name": "Mawi T-Shirt",
        "price": 18.99,
        "currency": "$",
        "category": "T-Shirts"
    },
    {
        "id": 5,
        "image": "../img/products/f5.jpg",
        "imagecart": "../img/products/f5.jpg",
        "create": "Malmö",
        "name": "Pineapple Shirts",
        "price": 38.99,
        "currency": "$",
        "category": "Shirts"
    },
    {
        "id": 6,
        "image": "../img/products/f6.jpg",
        "imagecart": "../img/products/f6.jpg",
        "create": "Malmö",
        "name": "Multi-Brown Jacket",
        "price": 52.99,
        "currency": "$",
        "category": "Jackets"
    },
    {
        "id": 7,
        "image": "../img/products/f7.jpg",
        "imagecart": "../img/products/f7.jpg",
        "create": "Malmö",
        "name": "Stockholm Jacket",
        "price": 52.99,
        "currency": "$",
        "category": "Jackets"
    },
    {
        "id": 8,
        "image": "../img/products/f8.jpg",
        "imagecart": "../img/products/f8.jpg",
        "create": "Malmö",
        "name": "Classic Trousers",
        "price": 25.99,
        "currency": "$",
        "category": "Trousers"
    },
    {
        "id": 9,
        "image": "../img/products/n1.jpg",
        "imagecart": "../img/products/n1.jpg",
        "create": "Malmö",
        "name": "Chest Pocket T-Shirt",
        "price": 38.99,
        "currency": "$",
        "category": "T-Shirts"
    },
    {
        "id": 10,
        "image": "../img/products/n2.jpg",
        "imagecart": "../img/products/n2.jpg",
        "create": "Malmö",
        "name": "Two-Tone Pants",
        "price": 24.99,
        "currency": "$",
        "category": "Trousers"
    },
    {
        "id": 11,
        "image": "../img/products/n3.jpg",
        "imagecart": "../img/products/n3.jpg",
        "create": "Malmö",
        "name": "Casual Loose Pants",
        "price": 24.99,
        "currency": "$",
        "category": "Trousers"
    },
    {
        "id": 12,
        "image": "../img/products/n4.jpg",
        "imagecart": "../img/products/n4.jpg",
        "create": "Malmö",
        "name": "Striped Shirts",
        "price": 38.99,
        "currency": "$",
        "category": "Shirts"
    },
    {
        "id": 13,
        "image": "../img/products/n5.jpg",
        "imagecart": "../img/products/n5.jpg",
        "create": "Malmö",
        "name": "Pineapple Set",
        "price": 58.99,
        "currency": "$",
        "category": "Sets"
    },
    {
        "id": 14,
        "image": "../img/products/n6.jpg",
        "imagecart": "../img/products/n6.jpg",
        "create": "Malmö",
        "name": "Multi-Lines Set",
        "price": 58.99,
        "currency": "$",
        "category": "Sets"
    },
    {
        "id": 15,
        "image": "../img/products/n7.jpg",
        "imagecart": "../img/products/n7.jpg",
        "create": "Malmö",
        "name": "Sunflower Up Shirts",
        "price": 38.99,
        "currency": "$",
        "category": "Shirts"
    },
    {
        "id": 16,
        "image": "../img/products/n8.jpg",
        "imagecart": "../img/products/n8.jpg",
        "create": "Malmö",
        "name": "Sun & Moon Shirts",
        "price": 38.99,
        "currency": "$",
        "category": "Shirts"
    },
    {
        "id": 17,
        "image": "../img/products/n9.jpg",
        "imagecart": "../img/products/n9.jpg",
        "create": "Malmö",
        "name": "Three Color T-Shirt",
        "price": 22.99,
        "currency": "$",
        "category": "T-Shirts"
    },
    {
        "id": 18,
        "image": "../img/products/n10.jpg",
        "imagecart": "../img/products/n10.jpg",
        "create": "Malmö",
        "name": "Color Curve T-Shirt",
        "price": 22.99,
        "currency": "$",
        "category": "T-Shirts"
    },
    {
        "id": 19,
        "image": "../img/products/n11.jpg",
        "imagecart": "../img/products/n11.jpg",
        "create": "Malmö",
        "name": "Tomorrow T-Shirt",
        "price": 24.99,
        "currency": "$",
        "category": "T-Shirts"
    },
    {
        "id": 20,
        "image": "../img/products/n12.jpg",
        "imagecart": "../img/products/n12.jpg",
        "create": "Malmö",
        "name": "NASA T-Shirt",
        "price": 24.99,
        "currency": "$",
        "category": "T-Shirts"
    }
];



document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        showCart();
    }
});

const showFeatured = data => {
    const features = data.slice(0, 8);
    features.forEach(product => {
        templateCard.querySelector('span').textContent = product.create;
        templateCard.querySelector('h5').textContent = product.name;
        templateCard.querySelector('#currencyFeatures').textContent = product.currency;
        templateCard.querySelector('#priceFeatures').textContent = product.price;
        templateCard.querySelector('img').setAttribute("src", product.image);
        templateCard.querySelector('#btnSetModal').dataset.id = product.id;
        templateCard.querySelector('h6').textContent = product.category;

        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
}

const showArrivals = data => {
    const arrivals = data.slice(8, 20);
    arrivals.forEach(product => {
        templateCard.querySelector('span').textContent = product.create;
        templateCard.querySelector('h5').textContent = product.name;
        templateCard.querySelector('#currencyFeatures').textContent = product.currency;
        templateCard.querySelector('#priceFeatures').textContent = product.price;
        templateCard.querySelector('img').setAttribute("src", product.image);
        templateCard.querySelector('#btnSetModal').dataset.id = product.id;
        templateCard.querySelector('h6').textContent = product.category;

        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    cardsArrivals.appendChild(fragment);
}

showFeatured(data);
showArrivals(data);

// Show Modal
const showProductModal = e => {
    if(e.target.classList.contains('viewDetails')) {
        setModal(e.target.parentElement)
    }
    e.stopPropagation();
}

const setModal = Object => {
    const productModal = {
        id: Object.querySelector('#btnSetModal').dataset.id,
        title: Object.querySelector('h5').textContent,
        image: Object.querySelector('img').attributes[0].nodeValue,
        price: Object.querySelector('#priceFeatures').textContent,
        currency: Object.querySelector('#currencyFeatures').textContent,
        quantity: 1,
        category: Object.querySelector('h6').textContent,
    }

    if(modalObject.hasOwnProperty(productModal.id)) {
        productModal.quantity = productModal.quantity + 1;
    }

    modalObject.push(productModal.id = {...productModal});
    showModals();
}

let valueIdModificate;
const showModals = () => {
    modalShow.innerHTML = '';
    modalObject.forEach(productModal => {
        templateModal.querySelector('h6').textContent = 'Home / ' + productModal.category;
        templateModal.querySelector('h4').textContent = productModal.title;
        templateModal.querySelector('#currencyModal').textContent = productModal.currency;
        templateModal.querySelector('#priceModal').textContent = productModal.price;
        templateModal.querySelector('img').setAttribute("src", productModal.image);
        templateModal.querySelector('#btnAddToCart').dataset.id = productModal.id;

        // buttons add and remove
        templateModal.querySelector('.subtractQuantityModal').dataset.id = productModal.id,
        templateModal.querySelector('.addQuantityModal').dataset.id = productModal.id
        valueIdModificate = productModal.id;
        const clone = templateModal.cloneNode(true);
        fragment.appendChild(clone);
    });
    modalShow.appendChild(fragment);
    modalVariation.push(modalObject.find(el => el.id == valueIdModificate));
    modalObject = [];
}

// show Cart
const addToCart = e => {
    if(e.target.classList.contains('addToCart')) {
        setCart(e.target.parentElement);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your product has been added to cart',
            showConfirmButton: false,
            timer: 1500
        })
    }
    e.stopPropagation();
}

const setCart = Object => {
    let product = {
        id: Object.querySelector('#btnAddToCart').dataset.id,
        title: Object.querySelector('h4').textContent,
        imagecart: Object.querySelector('img').attributes[0].nodeValue,
        price: Object.querySelector('#priceModal').textContent,
        currency: Object.querySelector('#currencyModal').textContent,
        quantity: 1,
        size: Object.querySelector('#size').textContent
    }

    if (cart.some((el) => el.id == product.id)) {
        cart.find((el) => el.id === product.id).quantity = (cart.find((el) => el.id === product.id).quantity + 1);
    } else  {
        cart.push({ ...product });
    }

    showCart();
}


const showCart = () => {
    // console.log(cart);
    items.innerHTML = '';
    cart.forEach(product => {
        templateCart.querySelector('h6').textContent = product.title,
        templateCart.querySelector('.item-quantity').textContent = product.quantity,
        templateCart.querySelector('#imgCart').setAttribute("src", product.imagecart),
        templateCart.querySelector('#cartCurrency').textContent = product.currency,
        templateCart.querySelector('#cartPrice').textContent = (product.price * product.quantity).toFixed(2),

        // buttons add and remove
        templateCart.querySelector('.subtractQuantity').dataset.id = product.id,
        templateCart.querySelector('.addQuantity').dataset.id = product.id,
        templateCart.querySelector('.remove').dataset.id = product.id,
        templateCart.querySelector('.delete').dataset.id = product.id

        const clone = templateCart.cloneNode(true);
        fragment.appendChild(clone);
    });

    if (cart.length === 0) {
        items.innerHTML = '';
        const cartEmpty = document.createElement('span')
        cartEmpty.innerText = `Your cart is empty`;
        items.appendChild(cartEmpty);
    }

    showTotalPrice();

    const numberOfProducts = document.getElementById('numberOfProducts').innerText = cart.length;
    items.appendChild(fragment);
    numberOfProducts;

    localStorage.setItem('cart', JSON.stringify(cart));
}

const showTotalPrice = () => {
    const totalContainer = document.getElementById('totalContainer');
    totalContainer.innerHTML = "";

    if(cart.length === 0) {
        totalContainer.innerHTML = '<span id="totalCart" class="main-color-text">$0.00</span>'
    }

    const totalPriceShow = Object.values(cart).reduce((acc, {quantity, price}) => acc + Number(quantity) * Number(price), 0).toFixed (2);

    const quantityPrice = Object.values(cart).reduce((acc, {quantity}) => acc + quantity, 0);

    if(cart.length != 0) {
        totalContainer.innerHTML = `<span class="lighter-text">Total:</span>
        <span id="totalCart" class="main-color-text">$${totalPriceShow}</span>`
    }

}

// PopUp Start
const modalAdd = document.querySelector('#btnSetModal');
const containerModal = document.querySelector('#modalAdd');

const openModal = () => {
    containerModal.style.display = 'flex';
}

const closeModal = () => {
    containerModal.style.display = 'none';
}

function clickOutside(e){
    // console.log(e.target.classList.contains('modal'));
    containerModal.addEventListener('click', e => {
        if(e.target.classList.contains('modal') || e.target.classList.contains('closeModal')) {
            containerModal.style.display = 'none';
        } else {
            containerModal.style.display = 'flex';
        }
    });
}
// PopUp End

// Cart Open Start
const containerBag = document.querySelector('#cartContainer');

const openBag = () => {
    containerBag.style.display = 'flex';
}

const closeBag = () => {
    containerBag.style.display = 'none';
}

//Cart Open End

// buttons add and remove quantity
const btnAction = e => {
    //substract
    if (e.target.classList.contains('subtractQuantity')) {
        cart.find(el => el.id == e.target.dataset.id).quantity = (cart.find(el => el.id == e.target.dataset.id).quantity - 1);
        if(cart.find(el => el.id == e.target.dataset.id).quantity === 0) {
            const positionSubstract = cart.indexOf(cart.find( el => el.id == e.target.dataset.id));
            cart.splice(positionSubstract, 1);
        }
        showCart();
    }

    //Add
    if (e.target.classList.contains('addQuantity')) {
        cart.find(el => el.id == e.target.dataset.id).quantity = (cart.find(el => el.id == e.target.dataset.id).quantity + 1);
        showCart();
    }


    // Delete
    if(e.target.classList.contains('remove') || e.target.classList.contains('delete')) {
        if(cart.find(el => el.id == e.target.dataset.id)) {
            const position = cart.indexOf(cart.find( el => el.id == e.target.dataset.id));
            cart.splice(position, 1);
        }
        showCart();
    }

    e.stopPropagation();
}
