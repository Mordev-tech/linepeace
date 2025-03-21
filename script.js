function adicionarMensagem() {
    let mensagem = document.getElementById("mensagem").value;
    if (mensagem.trim() !== "") {
        let depoimentos = document.getElementById("depoimentos");
        let p = document.createElement("p");
        p.textContent = mensagem;
        depoimentos.appendChild(p);
        document.getElementById("mensagem").value = "";
    }
}
