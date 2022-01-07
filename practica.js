

$(document).ready(function(){
    alert("funciona ");
});


// ejercicio 1
let p = $('#texto');
console.log(p);

let input = $('#entrada');
console.log(input);

let button = $('#btn');
console.log(button);


// ejercicio 2

let texto = $('.texto');
console.log(texto);

// ejercicio 3

let primerA = $('ul.my-list > li > a');
console.log(primerA)

$('ul.my-list > li > a').css("background-color","red")

// primerA.css("background-color","red")   eso igual funciona como arriba


// ejercicio 4

let colorli = $('ul.asd >li > ul >li');
colorli.css("background-color", "red")


// filtros jquery

$('ul.my-list > li > a:first'); // filtra el primer elemento a de la clase my-list

$('ul.my-list > li > a:gt(1)'); // greater than filtra elementos mayores al indice 1 de a presentes en la lista 

$('ul.my-list > li > a:last'); // filtra el ultimo elemento a de la clase my-list

$('ul.my-list > li > a:eq(1)'); // devuelve el elemento que esta en el indice (N)

$('ul.my-list > li > a:lt(1)'); // less than devuelve los elementos menor al (n)


// ejercicio filtros

$('td:gt(5)').css('backgroundColor','blue');
$('td:lt(3)').css('backgroundColor','yellow');
$('tr:first').css('color','red');
$('td:eq(5)').css('color','red');


// ejercicio filtros 2

$("ul.todos > li:first").css('color','red');
$("ul.todos > li > ul > li:last").css('color','red');

// ejercicio filtro hijos

$("div> span:last-child ").css("background-color","yellow")
$("div> span:last-child ").css("font-size","20px")


// ejercicio filtros 2

$("ul.numeros li:nth-child(2)").css("background-color","blue");

// filtros form 

let valorselector = $("select > option:selected").val();
console.log(valorselector);

let emails = $('form input[type="email"].chequed').val();
console.log(emails)


// eventos jquery

$('#pais').change(function() {
    let paisSeleccionado = $(this).children("option:selected").val();
    $('.resultado').text(paisSeleccionado);
});

$(".miCaja").mouseenter(function(){
    $(".miCaja").css("background-color","green")
});


// ejercicio enventos

$("#btn3").on("click",function(){
    $( "ul#eventos > li" ).filter( ":even" ).css( "background-color", "red" );  // con filtro :even se filtran las posiciones impares y con el filtro :odd se filtran las posiciones pares
});

// ejercicio click en la img


let contador = 0
$("img#ejemplo").on("click",function(){
    contador++;
    console.log(`clickeaste la img : ${contador} veces a la fecha y hora ${new Date()}`);
});


$("ul#ejercicio9 > li").filter(":even").css("background-color", "yellow");
$("ul#ejercicio9 > li").filter(":odd").css("background-color", "purple");

$("ul#ejercicio9 > li").on("click",function(){
    let coordenadas = $("ul#ejercicio9 > li");
    $("#pdel9").text(coordenadas.top);
});


// ejercicio toggle

$(document).ready(function() {
    $('button').on('click',function(){
        $('p').toggle();
    });
});
    
