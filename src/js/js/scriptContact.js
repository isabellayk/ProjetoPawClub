window.onload = () => {

    const loader = document.getElementById("hero");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1000);

}
// Form
const botao = document.getElementById("botao");

botao.addEventListener("click", () => {

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    const notificacao = document.getElementById("notificacao");

    if(nome === "" || email === "" || mensagem === ""){

        notificacao.innerHTML = "Preencha todos os campos!";
        notificacao.style.background = "#e53935";

    }else{

        notificacao.innerHTML = "Mensagem enviada com sucesso!";
        notificacao.style.background = "#43a047";

        document.getElementById("formulario").reset();

    }

    notificacao.classList.add("mostrar");

    setTimeout(() => {
        notificacao.classList.remove("mostrar");
    }, 3000);

});