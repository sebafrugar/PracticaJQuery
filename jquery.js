
// JavaScrip puro
let text = document.getElementById('texto');
text.addEventListener('click', function(){
document.write('click sobre el texto');
});


// jquery

let text = $('#texto');
text.click(function(){
document.write('click sobre el texto');
});


// js puro

let button = document.getElementById('button');
button.addEventListener('click', function(){
alert('click sobre el botón');
});

// jquery

let button = $("button")
button.click(function(){
    alert('click sobre el boton');
});
