// // Function to add products
// function Product(nameP, classP, price) {
//     this.name = nameP;
//     this.class = classP;
//     this.price = price;
// }

// const shirt = new Product('Shirt Columbia', 'Shirt', 12.99);
// const shirt2 = new Product('Shirt Africa', 'Shirt', 12.99);
// const trousers = new Product('Trousers Classic', 'Trousers', 21.99);
// const shoes = new Product('Shoes Vans', 'Shoes', 16.99);

// // Loop for user choice
// function selectProd() {
//     let products;
//     do{
//         products = parseInt(prompt('¿Qué prenda deseas adquirir? \n \n Menú: \n 1. Shirt Columbia \n 2. Shirt Africa \n 3. Trousers Classic \n 4. Shoes Vans \n 0. Cancelar Compra'));
//     } while(products != 0 && products != 1 && products != 2 && products != 3 && products != 4);
//     switch(products) {
//         case 0:
//             alert('Tu compra ha sido cancelada.');
//             break;
//         case 1:
//             alert('Se añadio al carrito su Shirt Columbia.');
//             return shirt;
//             break;
//         case 2:
//             alert('Se añadio al carrito su Shirt Africa.');
//             return shirt2;
//             break;
//         case 3:
//             alert('Se añadio al carrito sus Trousers Classic.');
//             return trousers;
//             break;
//         case 4:
//             alert('Se añadio al carrito sus Shoes Vans.');
//             return shoes;
//             break;
//         default:
//             return alert('Elige una opcion valida.');
//     }
// }

// // Prices
// function prices (products){
//     if (products === shirt){
//         return 12.99;
//     } else if (products === shirt2){
//         return 12.99;
//     } else if (products === trousers){
//         return 21.99;
//     } else if (products === shoes) {
//         return 16.99;
//     } else {
//         return 'Lo sentimos, no podemos procesar tu compra.' + '\n' + 'Vuelve a intentarlo!';
//     }
// }

// // Resume and payment
// function payment (products, prices){
//     let iva = (prices * 1.21) - prices;
//     iva = Number(iva.toFixed(2));
//     let total = prices + iva;
//     total = Number(total.toFixed(2));
//     alert('Resumen: \n' +
//         'Producto: ' + products.name + '\n' +
//         'Precio: ' + prices + ' USD \n' +
//         'Impuestos: ' + '+' + iva + ' USD \n' +
//         'Total: ' + total + ' USD');
//     let pay = parseInt(prompt('Su total a pagar es: ' + total + 'USD \n' + '¿Con cuanto deseas abonar?'));
//     let rest = total - pay;
//     rest = Number(rest.toFixed(2));
//     if (pay >= total){
//         alert ('¡Gracias por su compra!' + '\n' + 'Pronto recibiras tu comprobante de pago en tu correo.');
//     }
//     else {
//         alert ('¡Lo Sentimos! No pudimos procesar tu pago.' + '\n' + 'Fondos insuficientes, faltan '+ rest +' USD para poder realizar tu compra.' + '\n' + 'Vuelve a intentarlo nuevamente.');
//     }
// }

// // Call to functions
// let productName = selectProd();
// let productPrices = prices(productName);
// payment (productName,productPrices);

//Menu Mobile
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}