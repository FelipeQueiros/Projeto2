// Obtém os elementos do formulário
const form = document.getElementById('cadastroLista');
const inputNome = document.getElementById('cadastroNome');
const inputTelefone = document.getElementById('cadastroTelefone');

// Arrays para armazenar nomes e telefones
const nomes = [];
const telefones = [];

// Adiciona um ouvinte de evento para o envio do formulário
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário
    adicionaLinha();
});

// Função para adicionar uma nova linha à tabela
function adicionaLinha() {
    const inputnomeCadastro = document.getElementById('cadastroNome');
    const inputtelefoneCadastro = document.getElementById('cadastroTelefone');

    // Armazena os valores nos arrays
    nomes.push(inputnomeCadastro.value);
    telefones.push(inputtelefoneCadastro.value);

    // Cria uma nova linha da tabela
    let linha = '<tr>';
    linha += `<td>${inputnomeCadastro.value}</td>`;
    linha += `<td>${inputtelefoneCadastro.value}</td>`;
    linha += '</tr>';

    // Insere a linha na tabela
    const tabela = document.querySelector('table tbody');
    tabela.innerHTML += linha;

    // Limpa os campos de entrada
    inputnomeCadastro.value = '';
    inputtelefoneCadastro.value = '';

    // Exibe uma mensagem de sucesso
    window.alert('Você incluiu mais um contato!');
}


