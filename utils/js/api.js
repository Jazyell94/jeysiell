// js/api.js
const API = "https://api-production-554a.up.railway.app";

async function getProdutos() {
  const res = await fetch(`${API}/produtos`);
  return await res.json();
}

async function getPedidosDoUsuario(id) {
  const res = await fetch(`${API}/usuarios/${id}/pedidos`);
  return await res.json();
}

async function getMaisVendidos() {
  const res = await fetch(`${API}/relatorios/produtos-mais-vendidos`);
  return await res.json();
}