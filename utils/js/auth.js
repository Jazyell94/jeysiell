
// js/auth.js
async function logar() {
  const telefone = document.getElementById("telefone").value;
  const senha = document.getElementById("senha").value;
  const res = await fetch(`${API}/usuarios/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ telefone, senha })
  });
  const data = await res.json();
  if (res.ok) {
    localStorage.setItem("usuario", JSON.stringify(data.usuario));
    window.location.href = "index.html";
  } else {
    alert(data.error);
  }
}

async function registrar() {
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const senha = document.getElementById("senha").value;
  const res = await fetch(`${API}/usuarios/registro`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, telefone, senha })
  });
  const data = await res.json();
  if (res.ok) {
    alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html";
  } else {
    alert(data.error);
  }
}