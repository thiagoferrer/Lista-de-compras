const inputItem = document.getElementById("input-item");
let contador = 0;

const botaoAdicionar = document.getElementById("adicionar-item");
botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    console.log(inputItem.value);
    if (inputItem.value == "") {
        alert("Digite um item para adicionar");
        return
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox" + contador ++;


});

