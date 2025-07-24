// js/index.js
const container = document.getElementById("produtos");
let carrinho = [];

getProdutos().then(produtos => {
  produtos.forEach(prod => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${prod.nome}</h3>
      <p>${prod.descricao}</p>
      <strong>R$ ${prod.preco}</strong>
      <button onclick="adicionarCarrinho(${prod.id}, ${prod.preco})">Adicionar</button>`;
    container.appendChild(div);
  });
});

function adicionarCarrinho(id, preco) {
  const item = carrinho.find(i => i.produto_id === id);
  if (item) item.quantidade++;
  else carrinho.push({ produto_id: id, quantidade: 1, preco_unitario: preco });
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

async function finalizarPedido() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const itens = JSON.parse(localStorage.getItem("carrinho"));
  const res = await fetch(`${API}/pedidos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ usuario_id: usuario.id, itens })
  });
  const data = await res.json();
  if (res.ok) {
    alert("Pedido realizado com sucesso!");
    localStorage.removeItem("carrinho");
  } else {
    alert(data.error);
  }
}