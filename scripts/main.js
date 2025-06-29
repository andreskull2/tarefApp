// 1. Seleção dos elementos do DOM
const form = document.querySelector('.form-novo-item');
const input = document.querySelector('#inputItem');
const lista = document.querySelector('.lista-itens');
const toast = document.querySelector('.toast-removido');
const btnFecharToast = document.querySelector('.btn-fechar-toast');

// 2. Adicionando o comportamento de adicionar novo item ao enviar o formulário.
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const valor = input.ariaValueMax.trim();

    // 3. Validação simples: campo vazio.
    if (valor === '') {
        alert('Por favor, digite um nome para a tarefa.');
        input.focus();
        return;
    }

    // 4. Validação extra: pelo menos uma letra (evita números puros ou só símbolos).
    const temLetra = /[a-zA-Z]/.test(valor);
    if (!temLetra) {
        alert('O nome da tarefa precisa conter pelo menos uma letra.');
        input.focus();
        return;
    }

    // 5. Se passou na validação, cria a tarefa na lista.
    criarItem(valor);

    // 6. Limpa o campo e mantém o foco.
    input.value = '';
    input.focus();
});

// 7. Função para criar a tarefa na lista.
function criarItem(texto) {
    const id = `item-${Date.now()}`; // Gera um ID único baseado no timestamp.

    // 8. Monta o HTML da tarefa (checkbox, label, texto e botão de remover).
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="item-container">
            <div class="checkbox-wrapper">
                <input type="checkbox" id="${id}">
                <label for="${id}"></label>
                <span class="item-label">${texto}</span>
            </div>
            <button class="btn-trash">
                <img src="assets/icons/trash.svg" alt="Remover item">
            </button>
        </div>
    `;

    // 9. Adiciona o evento de remoção (ao clicar no botão de lixeira).
    const botaoTrash = li.querySelector('.btn-trash');
    botaoTrash.addEventListener('click', () => {
        li.remove();
        mostrarToast();
    });

    // 10. Adiciona a tarefa na lista.
    lista.appendChild(li);
}

// 11. Função para mostrar o toast de item removido.
function mostrarToast() {
    toast.classList.add('mostrar');

    // 12. Esconde o toast automaticamente após 3 segundos.
    setTimeout(() => {
        toast.classList.remove('mostrar');
    }, 3000);
}

// 13. Evento para fechar manualmente o toast.
btnFecharToast.addEventListener('click', () => {
    toast.classList.remove('mostrar');
});

