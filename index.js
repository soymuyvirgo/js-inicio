const precio = prompt("ingrese el precio que desea multiplicar")

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let cantIni = 1
cantidadInicial = document.querySelector(".cantidad");
cantidadInicial.innerHTML = cantIni

let cantPag = cantIni*precio
cantPagar = document.querySelector(".valor-total");
cantPagar.innerHTML = cantPag