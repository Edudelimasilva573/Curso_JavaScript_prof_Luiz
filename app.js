/*
var nome = "Eduardo Lima"; //nome da variavel é uma string
var idade = 43;            //variavel Number

console.log("O aluno " + nome + " e a idade é " + idade + " anos.");
*/

/*var valor1 = 10;
var valor2 = 5;
var valor3 = 9;

var resultado = (valor1 + valor2 + valor3) /3;
 
console.log(resultado);
*/
/*
console.log("OLÁ, MINHA PAGINA!");
*/
/*
var nota1 = 2;
var nota2 = 8;
var nota3 = 7;

var media = (nota1 + nota2 + nota3)/3;

if(media>= 7){
  console.log("Aluno Aprovado");
}else{
  console.log("Aluno Reprovado!");
}*/
/*
function aula2(){
  console.log("Minha primeira função!");
}
function calcular(valor1, valor2){
 
  
  var soma = valor1 + valor2;
  console.log(soma);
}

calcular(10, 8);
*/

function aula2() {
  document.getElementById("resultado").style.display = "block";
  var resultado = document.getElementById("resultado");
  var nome = document.getElementById("txtnome").value;
  var nota1 = parseFloat(document.getElementById("txtnota1").value);
  var nota2 = parseFloat(document.getElementById("txtnota2").value);
  var nota3 = parseFloat(document.getElementById("txtnota3").value);

var media = (nota1 + nota2 + nota3)/3;

if(media >= 7){
  resultado.innerHTML = "O Aluno " + nome + " está Aprovado!";
   document.getElementById("resultado").style.backgroundColor = "blue";
}else {
  resultado.innerHTML = "O Aluno " + nome + " está Reprovado!";
   document.getElementById("resultado").style.backgroundColor = "red";
}
}
