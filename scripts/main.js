// 1. Seleção dos elementos do DOM (estrutura base)
const form = document.querySelector('.form-novo-item');
const input = document.querySelector('#inputItem');
const lista = document.querySelector('.lista-itens');
const toast = document.querySelector('.toast-removido');
const btnFecharToast = document.querySelector('.btn-fechar-toast');

// 2. Carregamento da lista salva no LocalStorage ao abrir a página.
window.addEventListener('DOMContentLoaded', carregarLista);

// 3. Evento de envio do formulário (Adicionar nova tarefa).
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const valor = input.value.trim();

    // 4. Validação: impedir envio de texto vazio, só números ou só símbolos.
    if (!validarTexto(valor)) {
        alert('Por favor, insira um nome válido para a tarefa.');
        return;
    }

    // 5. Criação do item na lista (não concluído por padrão).
    criarItem(valor, false);

    // 6. Limpar campo e salvar a lista no LocalStorage.
    input.value = '';
    input.focus();
    salvarLista();
});

// 7. Função de validação de texto (precisa ter pelo menos uma letra)
function validarTexto(texto) {
    // Verifica se tem ao menos uma letra (ignora espaços)
    return /[a-zA-ZÀ-ú]/.test(texto);
}

// 8. Função para criar e adicionar um item na lista
function criarItem(texto, concluido) {
    const id = `item-${Date.now()}`; // Gera um ID único com base no timestamp

    const li = document.createElement('li');
    li.innerHTML = `
        <div class="item-container">
            <div class="checkbox-wrapper">
                <input type="checkbox" id="${id}" ${concluido ? 'checked' : ''}>
                <label for="${id}"></label>
                <span class="item-label">${texto}</span>
            </div>

            <button class="btn-trash" aria-label="Remover tarefa">
                <img src="assets/icons/trash.svg" alt="Remover tarefa">
            </button>
        </div>
    `;

    // 9. Evento de mudança no checkbox (pra salvar o estado de conclusão).
    const checkbox = li.querySelector('input[type=checkbox]');
    checkbox.addEventListener('change', () => {
        salvarLista();
    });

    // 10. Evento de remoção do item (ao clicar na lixeira).
    const botaoTrash = li.querySelector('.btn-trash');
    botaoTrash.addEventListener('click', () => {
        li.remove();
        mostrarToast();
        salvarLista();
    });

    // 11. Adiciona o item finalizado na lista (DOM).
    lista.appendChild(li);
}

// 12. Função para exibir o toast de item removido.
function mostrarToast() {
    toast.classList.add('mostrar');

    setTimeout(() => {
        toast.classList.remove('mostrar');
    }, 3000);
}

// 13. Evento para fechar o toast manualmente.
btnFecharToast.addEventListener('click', () => {
    toast.classList.remove('mostrar');
});

// 14. Função para salvar a lista inteira no LocalStorage.
function salvarLista() {
    const itens = [];
    lista.querySelectorAll('li').forEach(li => {
        const texto = li.querySelector('.item-label').textContent;
        const concluido = li.querySelector('input[type=checkbox]').checked;
        itens.push({ texto, concluido});
    });

    localStorage.setItem('listaCompras', JSON.stringify(itens));
}

// 15. Função para carregar os itens salvos do LocalStorage ao abrir a página.
function carregarLista() {
    const itensSalvos = localStorage.getItem('listaCompras');
    if (itensSalvos) {
        const itens = JSON.parse(itensSalvos);
        itens.forEach(item => {
            criarItem(item.texto, item.concluido);
        });
    }
}

    