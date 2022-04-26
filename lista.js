function CriarBotaoEdit(){
    const botao_edit = document.createElement('button')
    botao_edit.classList.add("btn btn-info")
    botao_edit.innerHTML = "Edit"
    botao_edit.type = "button"
}

function DeleteItem(){
    console.log(this.parentElement)
    this.parentElement.remove()
}

function CriarBotaoDelete(){
    const botao_delete =  document.createElement('button')
    botao_delete.classList.add("btn", "btn-danger")
    botao_delete.innerHTML = "Delete"
    botao_delete.type = "button"
    botao_delete.addEventListener("click", DeleteItem);

    return botao_delete
}

function Submit(){
    const lista = document.querySelector('[data-task]')
    const valor = document.querySelector('[data-form-input]')

    const novo_item_lista = document.createElement("li")
    novo_item_lista.className = "list-group-item";

    novo_item_lista.innerHTML = valor.value
 
    novo_item_lista.appendChild(CriarBotaoDelete())
    lista.appendChild (novo_item_lista)

    document.getElementById("item").value = ""
 }
