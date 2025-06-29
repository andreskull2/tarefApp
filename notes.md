# Git init
Iniciando o projeto de TarefApp.

## Desafio Prático - App de Lista de Tarefas do dia

## Introdução
Este é um projeto de revisão do projeto Desafio Prático - App lista de compras. Nele eu pretendo solidificar meus conhecimentos no primeiro módulo de JavaScript do curso Formação FullStack da Rockeseat. Pretendo reformular essa lista, com nova marca e nova paleta cromática. 

## Descrição do desafio
Desenvolver um site responsivo de lista de tarefas do dia onde o usuário pode gerenciar os itens adicionando e removendo-os.

link - https://www.figma.com/community/file/1397279978314668489

## Funcionalidades da aplicação
- o usuário pode **adicionar** um item a lista de tarefas
- o usuário pode **remover** um item da lista de tarefas

Nessa aplicação haverá:
- JavaScript;
- Manipulação da DOM;
- Funções;
- Eventos.

## Entrega
Não há entrega programada para esse projeto. 

O link do código estará disponível no GitHub. 

Após concluir o desafio, postarei no Linkedin, compartilhando minhas experiências e atrair novas oportunidades.

--- 

### HTML/CSS
- HTML e CSS concluidos com sucesso. Todo o visual está pronto, agora preciso me concentrar na inteligência da aplicação. Na primeira vez em que fiz o projeto, revi as aulas de lógica de programação afim de criar um algorítimo para esse aplicativo. 

## Agora começa o JavaScript
A partir da aula de lógica de programação, fiz um algorítimo para me auxiliar na criaçnao do código.

## Método 5Qs para montar um algorítimo:
Analise criticamente problema e descubra: (Tente explicar este problema para você mesmo em voz alta e peça mais informações, investigue mais até você compreender completamente o problema)

1. Quais são os dados de entrada necessários?
Descrição da tarefa a ser realizada

2. O que devo fazer com estes dados?
Adicioná-la a uma lista de tarefas

3. Quais são as restrições do problema?
Não podem ser inseridos apenas número, caracteres especiais ou emojis

4. Qual é o resultado esperado?
Espera-se que as tarefas sejam organizadas e exibidas conforme a lista de tarefas vá sendo formada

5. Qual é a sequência de passos a ser feita para chegar ao resultado esperado?
    1. Usuário digita o nome da tarefa.
    2. Ao clicar no botão "Adicionar tarefa":
        a. Verifica se o campo está vazio ou contém só números/caracteres especiais.
        - se estiver errado, mostra aviso e para aqui.
        - se estiver certo, continua.
    3. Cria uma nova tarefa com o nome digitado.
    4. Adiciona essa tarefa na lista visível.
    5. Se o usuário clicar na checkbox, a tarefa aparece riscada.
    6. Se clicar na lixeira, a tarefa é removida da lista.
    7. Exibe uma mensagem confirmando que a tarefa foi deletada.    