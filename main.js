function exercicio1(){
alert("Bem vindo ao Hoppy Happy!!")
let altura = Number(prompt("para entrar nesse brinquedo, precisamos saber, qual sua altura?"))
if (altura >= 1.5){
    alert ("muito bem, pode passar")
}
else{
    alert("Infelizmente, você não pode passar")
}
}
function exercicio2(){
    alert("Bem vindo a minha loja")
    let produtos = Number(prompt("Esse produto está acabando"))
    if (produtos >= 5){
        alert("Nosso estoque acabou, venha em uma próxima hora")
    }
    else{
        alert("vamos te entregar o produto")
    }
}
function exercicio3(){
    alert("Óla, bem vindo")
    let mais = Number(prompt("Qual o Valor"))
    if (mais <= 756.5){
        alert("Isento")
    }
    else{
        alert("Taxa de 10%")
    }
}
function exercicio4(){
    alert ("Nota")
    let menos = Number(prompt("Qual foi sua nota?"))
    if (menos >= 5){
        alert("Você passou")
    }
    else{
        alert("Reprovado")
    }
}
function exercicio5(){
    alert ("Bem Vindo a minha papelaria")
    let cor = prompt("Escolha uma cor")
    let cores = prompt("Escolha outra cor por favor")
    if (cor =! cores){
        alert ("Cores Misturadas")
    }
    else{
    alert ("não foi possivel misturar as cores")
    }
}