let isFormOpen = false;

// abrir/fechar o formulário
function toggleForm() {
    const userForm = document.getElementById("user-form");

    if (isFormOpen) {
        userForm.style.display = "none";
        document.getElementById("new-user").innerText = "Novo Usuário";
    } else {
        userForm.style.display = "block";
        document.getElementById("new-user").innerText = "Cancelar";
        clearForm(); // Limpar o formulário ao abrir
    }

    isFormOpen = !isFormOpen;
}

document.getElementById("new-user").addEventListener("click", toggleForm);

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("status").value = "Ativo";
}

document.getElementById("save-user").addEventListener("click", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const status = document.getElementById("status").value;

    if (name === "" || email === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }
     //Não consegui fazer com que ele edite, e ele não apaga o primeiro cadastro
    const userList = document.getElementById("user-list");
    const newRow = userList.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = `<button class="edit-button">Editar</button> <button class="delete-button">Excluir</button>`;

    const editButton = cell3.querySelector(".edit-button");
    const deleteButton = cell3.querySelector(".delete-button");

    editButton.addEventListener("click", function () {
        alert("Editar usuário: " + name);
    });

    deleteButton.addEventListener("click", function () {
        userList.deleteRow(newRow.rowIndex);
    });

    clearForm();
    toggleForm();
});


