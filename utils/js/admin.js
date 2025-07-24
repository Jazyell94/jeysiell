// js/admin.js
async function cadastrarProduto() {
  const nome = document.getElementById("nome").value;
  const descricao = document.getElementById("descricao").value;
  const preco = parseFloat(document.getElementById("preco").value);
  const imagem_url = document.getElementById("imagem_url").value;
  const res = await fetch(`${API}/produtos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, descricao, preco, imagem_url })
  });
  const data = await res.json();
  if (res.ok) {
    alert("Produto cadastrado com sucesso");
  } else {
    alert(data.error);
  }
}

getMaisVendidos().then(relatorio => {
  const div = document.getElementById("relatorio");
  relatorio.forEach(r => {
    div.innerHTML += `<p>${r.nome}: ${r.total_vendido}</p>`;
  });
});
