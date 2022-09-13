// //Array of stock
// let stock = [
//     {
//         id: 0,
//         name: '-',
//         category: '-',
//         price: 0
//     },
//     {
//         id: 1,
//         name: 'Shirt Columbia',
//         category: 'Shirt',
//         price: 12.99
//     },
//     {
//         id: 2,
//         name: 'Shirt Africa',
//         category: 'Shirt',
//         price: 12.99
//     },
//     {
//         id: 3,
//         name: 'Trousers Classic',
//         category: 'Trousers',
//         price: 21.99
//     },
//     {
//         id: 4,
//         name: 'Shoes Vans',
//         category: 'Shoes',
//         price: 16.99
//     }
// ];

// stock.push({id: 5, name: 'T-Shirt Cest la vie', category: 'T-shirt', price: 38.99},);


// let cart = [];
// // Loop for user choice
// let menu;
// let products;
// while(menu !== 0 && menu !== 4){
// menu = parseInt(prompt('¿Qué deseas hacer? \n \n Menú: \n 1. Agregar un nuevo producto \n 2. Ver Carrito \n 3. Eliminar Producto \n 4. Hacer el pago \n 0. Cancelar Compra'));
// switch(menu) {
//     case 0:
//         alert('Tu compra ha sido cancelada.\n Hasta Pronto!');
//         break;
//     case 1:
//         products = parseInt(prompt('¿Qué prenda deseas adquirir? \n \n Menú: \n 1. Shirt Columbia \n 2. Shirt Africa \n 3. Trousers Classic \n 4. Shoes Vans \n 5. T-Shirt C´est La Vie \n 0. Salir al Menu'));
//         switch(products) {
//             case 0:
//                 alert('Regresando al menu.');
//                 break;
//             case 1:
//                 alert('Se añadio al carrito su Shirt Columbia.');
//                 cart.push(stock[1]);
//                 break;
//             case 2:
//                 alert('Se añadio al carrito su Shirt Africa.');
//                 cart.push(stock[2]);
//                 break;
//             case 3:
//                 alert('Se añadio al carrito sus Trousers Classic.');
//                 cart.push(stock[3]);
//                 break;
//             case 4:
//                 alert('Se añadio al carrito sus Shoes Vans.');
//                 cart.push(stock[4]);
//                 break;
//             case 5:
//                 alert('Se añadio al carrito su T-Shirt C´est La Vie.');
//                 cart.push(stock[5]);
//                 break;
//             default:
//                 alert('Elige una opcion valida.');
//             break;
//         }
//         break;
//     case 2:
//         seeCart();
//         break;
//     case 3:
//         let deleteID = Number(prompt('Ingrese el Id del producto a eliminar'));
//         deleteProduct(deleteID);
//         break;
//     case 4:
//         prices();
//         break;
//     default:
//         alert('Elige una opcion valida.');
// }
// }

// function seeCart() {
// console.log('\n------------------\n Products:');
// cart.forEach((cart) => console.log('Id: ' + cart.id + '\n' + 'Name: ' + cart.name + '\n' + 'Category: ' + cart.category + '\n' + 'Price: ' + cart.price));
// console.log('\n------------------\n');
// }

// function deleteProduct(id) {
// cart = cart.filter(cart => cart.id != id);
// alert('Se elimino su producto con ID: ' + id);
// }

// // Prices
// function prices(){
// const subtotal = cart.reduce((acc, el) => acc + el.price, 0);
// console.log('Subtotal: ' + subtotal.toFixed(2));
// function payment(){
//     let iva = (subtotal.toFixed(2) * 1.21) - subtotal.toFixed(2);
//     iva = Number(iva.toFixed(2));
//     let total = subtotal + iva;
//     total = Number(total.toFixed(2));
//     const cartName = cart.map((el) => el.name);
//     let pay = parseInt(prompt('Resumen: ' + '\nProducts: ' + cartName + '\n' + 'Subtotal: ' + subtotal.toFixed(2) + '\n' + 'IVA: ' + iva + '\n' + 'Total: ' + total +'\n' + 'Su total a pagar es: ' + total + 'USD \n' + '¿Con cuanto deseas abonar?'));
//     let rest = total - pay;
//     rest = Number(rest.toFixed(2));
//     if (pay >= total){
//         alert ('¡Gracias por su compra!' + '\n' + 'Pronto recibiras tu comprobante de pago en tu correo.');
//     }
//     else {
//         alert ('¡Lo Sentimos! No pudimos procesar tu pago.' + '\n' + 'Fondos insuficientes, faltan '+ rest +' USD para poder realizar tu compra.' + '\n' + 'Vuelve a intentarlo nuevamente.');
//     }
// }
// payment(subtotal);
// }

