

// sempre que começar, ja começa com zero itens
let quantidade = 0;
let total = 0;


let btnCarrinho = document.getElementById("btnCarrinho");


let botoes = document.getElementsByClassName("add");


for (let i = 0; i < botoes.length; i++) {

    botoes[i].onclick = function () {

        let nome = this.getAttribute("data-nome");
        let preco = Number(this.getAttribute("data-preco"));

        quantidade++;
        total = total + preco;

        btnCarrinho.innerHTML = "Carrinho (" + quantidade + ")";

        alert(nome + " adicionado ao carrinho!");
    };
}


btnCarrinho.onclick = function () {

    if (quantidade === 0) {
        alert("Carrinho vazio!");
    } else {
        alert("Total da compra: R$ " + total.toFixed(2));
    }
};



//  FORMULÁRIO DE CONTATO 

let form = document.getElementById("formContato");
let msg = document.getElementById("msgSucesso");

form.onsubmit = function (event) {

    event.preventDefault(); 

    form.reset(); //limpa os campos do cntt para nao ficar preenchido sempre mesmo enviando

    msg.style.display = "block"; //mostra msg
};
