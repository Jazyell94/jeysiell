// js/perfil.js
const user = JSON.parse(localStorage.getItem("usuario"));
const pedidosDiv = document.getElementById("pedidos");

getPedidosDoUsuario(user.id).then(pedidos => {
  pedidos.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `<h4>Pedido #${p.id}</h4><p>Status: ${p.status}</p>`;
    pedidosDiv.appendChild(div);
  });
});