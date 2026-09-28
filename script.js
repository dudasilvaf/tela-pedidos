let pedido = [];

let total = 0;


// ADICIONAR PRODUTO
function adicionarProduto(nome, preco) {

    pedido.push({
        nome: nome,
        preco: preco
    });

    total += preco;

    atualizarCarrinho();
}


// ATUALIZAR CARRINHO
function atualizarCarrinho() {

    const lista = document.getElementById("lista-pedido");

    const quantidade = document.getElementById("quantidade");

    const totalElemento = document.getElementById("total");


    // quantidade
    quantidade.textContent =
        pedido.length + (pedido.length === 1 ? " item" : " itens");


    // total
    totalElemento.textContent =
        "R$ " + total.toFixed(2).replace(".", ",");


    // limpa lista
    lista.innerHTML = "";


    // pedido vazio
    if (pedido.length === 0) {

        lista.innerHTML = `
            <p class="vazio">
                Seu pedido está vazio.
                <br>
                Adicione algum item!
            </p>
        `;

        return;
    }


    // mostra produtos
    pedido.forEach(function (produto) {

        const item = document.createElement("div");

        item.classList.add("item-pedido");

        item.innerHTML = `
            <div class="item-nome">
                ${produto.nome}
            </div>

            <div class="item-preco">
                R$ ${produto.preco.toFixed(2).replace(".", ",")}
            </div>
        `;

        lista.appendChild(item);

    });

}


// FINALIZAR PEDIDO
function finalizarPedido() {

    if (pedido.length === 0) {

        alert("Adicione algum produto ao pedido!");

        return;
    }


    alert(
        "Pedido criado com sucesso! 🥳\n\n" +
        "Total: R$ " +
        total.toFixed(2).replace(".", ",")
    );

}