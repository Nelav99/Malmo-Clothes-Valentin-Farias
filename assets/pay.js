const templatePay = document.getElementById('template-cart').content;
const productRow = document.getElementById('cartToPay');
const fragment = document.createDocumentFragment();
let numberOfProducts = document.querySelector('#numberOfProducts');
const data = JSON.parse(localStorage.getItem('cart'));

const cart = [...data];

const showNumberOfProducts = () =>{ numberOfProducts.innerText = cart.length;}

const showProductsToPay = () => {
    productRow.innerHTML = '';
    cart.forEach(product => {
        templatePay.querySelector('#imgCart').setAttribute("src", product.image2),
        templatePay.querySelector('#nameProductToPay').textContent = product.title,
        templatePay.querySelector('#sizeProductToPay').textContent = product.size,
        templatePay.querySelector('#priceProductToPay').textContent = product.currency + product.price,
        templatePay.querySelector('.item-quantity').textContent = product.quantity,
        templatePay.querySelector('#subtotalProductToPay').textContent = product.currency + (product.quantity * product.price).toFixed(2),

        // buttons add and remove
        templatePay.querySelector('.subtractQuantity').dataset.id = product.id + ',' + product.size,
        templatePay.querySelector('.addQuantity').dataset.id = product.id + ',' + product.size,
        templatePay.querySelector('.remove').dataset.id = product.id + ',' + product.size,
        templatePay.querySelector('.delete').dataset.id = product.id + ',' + product.size

        const clone = templatePay.cloneNode(true);
        fragment.appendChild(clone);
    });
    productRow.appendChild(fragment);

    showNumberOfProducts();

    localStorage.setItem('cart', JSON.stringify(cart));
}

showProductsToPay(cart);

const btnQuantity = document.querySelector('#quantity');

productRow.addEventListener('click', e => {
    btnRemove(e);
    btnAction(e);
});

const btnRemove = e => {
    // Delete
    if(e.target.classList.contains('delete') || e.target.classList.contains('remove')) {
        const valueId = e.target.dataset.id;
        let separateId = valueId.split(',');
        if(cart.find(el => el.id == separateId[0] && el.size == separateId[1])) {
            let position = cart.indexOf(cart.find(el => el.id == separateId[0] && el.size == separateId[1]));
            cart.splice(position, 1);
        }
        showProductsToPay();
    }

    e.stopPropagation();
}


// buttons add and remove quantity
const btnAction = e => {
    //substract
    if (e.target.classList.contains('subtractQuantity')) {
        const valueId = e.target.dataset.id;
        let separateId = valueId.split(',');
        cart.find(el => el.id == separateId[0] && el.size == separateId[1]).quantity = cart.find(el => el.id == separateId[0] && el.size == separateId[1]).quantity - 1;
        if(cart.find(el => el.id == separateId[0] && el.size == separateId[1]).quantity === 0) {
            const positionSubstract = cart.indexOf(cart.find(el => el.id == separateId[0] && el.size == separateId[1]));
            cart.splice(positionSubstract, 1);
        }
        showProductsToPay();
        showTotalPrice();
    }

    //Add
    if (e.target.classList.contains('addQuantity')) {
        const valueId = e.target.dataset.id;
        let separateId = valueId.split(',');
        cart.find(el => el.id == separateId[0] && el.size == separateId[1]).quantity = cart.find(el => el.id == separateId[0] && el.size == separateId[1]).quantity + 1;
        showProductsToPay();
        showTotalPrice();
    }
}

// Total to Pay
const showTotalPrice = () => {
    let multiplicationPriceQuantity = cart.map( el => (el.price * el.quantity));
    let subtotal = (multiplicationPriceQuantity.reduce((acc, el) => acc + el, 0));
    document.querySelector('.subtotalPay').innerText = '$' + (subtotal).toFixed(2);

    let taxes = ((subtotal * 1.21) - subtotal);
    document.querySelector('.taxesPay').innerText = '$' + (taxes).toFixed(2);

    let total = subtotal + taxes;
    document.querySelector('.totalPay').innerText = '$' + (total).toFixed(2);
}

showTotalPrice();

// btn Pay
const btnReadyToPay = document.querySelector('.buyButton');

btnReadyToPay.addEventListener('click', () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Congratulations!',
        text: 'Your shipment is on its way. It will arrive in the next 24 hours',
        showConfirmButton: true
    })
})