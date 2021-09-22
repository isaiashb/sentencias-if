/* 1) Calcular el total que una persona debe pagar en un llantera, si el precio de cada llanta
es de $800 si se compran menos de 5 llantas y de $700 si se compran 5 o mas. */

// let Nllantas = parseInt(prompt('Cuantas llantas compro?'));
// let totalapagar;
// if (Nllantas >=5){
//     console.log(`Como compraste ${Nllantas} llantas y son igual o mas de 5 llantas, la pieza te costo a $700 y pagaras:`);
//     totalapagar= (Nllantas * 700);
// } else{
//     console.log(`Compraste ${Nllantas} llanta(s) y son menos de 5 , la pieza te costo a $800 y pagaras:`)
//     totalapagar= (Nllantas*800);
// }
// console.log(totalapagar);

/* 2) En un supermercado se hace una promoción, mediante la cual el cliente obtiene un
descuento dependiendo de un numero que se escoge al azar. Si el numero escogido es
menor que 74 el descuento es del 15% sobre el total de la compra, si es mayor o igual a
74 el descuento es del 20%. Obtener cuanto dinero se le descuenta. */

// let Nescogido = parseInt(prompt('Escoge un numero y introduce la cantidad'));
// let totalapagar = parseInt(prompt('cual es el total que pagara de los productos?'));
// let descuento;

// if(Nescogido>=74){
//     console.log(`como escogite el num ${Nescogido} tu descuento es de 20% y el monto que se te descontara es:` );
//     descuento=(totalapagar*.2);
// } else{
//     console.log(`como escogite el num ${Nescogido} tu descuento es de 15% y el monto que se te descontara es:` );
//     descuento=(totalapagar*.15);
// }
// console.log(descuento);


/* 3) Calcular el numero de pulsaciones que debe tener una persona por cada 10 segundos
de ejercicio aerobico; la formula que se aplica cuando el sexo es femenino es:
num. pulsaciones = (220 - edad)/10
y si el sexo es masculino:
num. pulsaciones = (210 - edad)/10 */

// let sexo = prompt('introduse tu sexo');
// let edad = parseInt(prompt('cual es el tu edad?'));
// let Npulsaciones;

// if (sexo=='masculino'){
//     console.log(`tu sexo es ${sexo} y tu edad es ${edad} por lo tanto tu pulsaciones por cada 10 segundos de ejecicio es:`);
//     Npulsaciones=((210-edad)/10);
// } else if (sexo=='femenino'){
//     console.log(`tu sexo es ${sexo} y tu edad es ${edad} por lo tanto tu pulsaciones por cada 10 segundos de ejercicio es:`);
//     Npulsaciones= ((220-edad)/10);  
// } else{
//     console.log(`introduce bien tu sexo (masculino o femenino) sin mayusculas por favor`);
// }
// console.log(Npulsaciones);

/* 4) Una compañía de seguros esta abriendo un depto. de finanzas y estableció un
programa para captar clientes, que consiste en lo siguiente: Si el monto por el que se
efectúa la fianza es menor que $50 000 la cuota a pagar será por el 3% del monto, y si el
monto es mayor que $50 000 la cuota a pagar será el 2% del monto. La afianzadora
desea determinar cual será la cuota que debe pagar un cliente. */

/* 5) En una escuela la colegiatura de los alumnos se determina según el numero de
materias que cursan. El costo de todas las materias es el mismo.
Se ha establecido un programa para estimular a los alumnos, el cual consiste en
lo siguiente: si el promedio obtenido por un alumno en el ultimo periodo es mayor o
igual que 9, se le hará un descuento del 30% sobre la colegiatura y no se le cobrara
IVA; si el promedio obtenido es menor que 9 deberá pagar la colegiatura completa, la
cual incluye el 10% de IVA.
Obtener cuanto debe pagar un alumno. */

/* 6) Una empresa de bienes raíces ofrece casas de interés social, bajo las siguientes
condiciones: Si los ingresos del comprador son de menos de $8000, el enganche será del
15% del costo de la casa y el resto se distribuirá en pagos mensuales, a pagar en diez
años. Si los ingresos del comprador son de $8000 o mas el enganche será del 30% del
costo de la casa y el resto se distribuirá en pagos mensuales a pagar en 7 años.
La empresa quiere obtener cuanto debe pagar un comprador por concepto de
enganche y cuanto por cada pago parcial. */

/* 7) En una fabrica de computadoras se planea ofrecer a los clientes un descuento que
dependerá del numero de computadoras que compre. Si las computadoras son menos de
cinco se les dará un 10% de descuento sobre el total de la compra; si el numero de
computadoras es mayor o igual a cinco pero menos de diez se le otorga un 20% de
descuento; y si son 10 o mas se les da un 40% de descuento. El precio de cada
computadora es de $11,000 */

/* 8) En una llantera se ha establecido una promoción de las llantas marca “Ponchadas”,
dicha promoción consiste en lo siguiente:
Si se compran menos de cinco llantas el precio es de $300 cada una, de $250 si
se compran de cinco a 10 y de $200 si se compran mas de 10.
Obtener la cantidad de dinero que una persona tiene que pagar por cada una de
las llantas que compra y la que tiene que pagar por el total de la compra. */

/* 9) Un proveedor de estéreos ofrece un descuento del 10% sobre el precio sin IVA, de
algún aparato si este cuesta $2000 o mas. Además, independientemente de esto, ofrece
un 5% de descuento si la marca es “NOSY”. Determinar cuanto pagara, con IVA
incluido, un cliente cualquiera por la compra de su aparato. */

/* 10) Que lea tres números diferentes y determine el numero medio del conjunto de los tres
números (el numero medio es aquel numero que no es ni mayor, ni menor). */

/* 11) Ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora. (Es necesario pedir las horas trabajadas al usuario) */

/* 12) Una tienda de helado ofrece un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:

Costo del helado $70
Tipo A 10% de descuento
Tipo B 15% de descuento
Tipo C 20% de descuento */

/* 13) Determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%. */