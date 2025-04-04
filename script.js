// Seleciona o botão de alternância de tema e o elemento <html>
const themeToggle = document.querySelector('.theme-toggle');
const rootElement = document.documentElement;

// Adiciona um evento de clique ao botão
themeToggle.addEventListener('click', () => {
    // Alterna a classe 'dark-theme' no elemento <html>
    const isDarkTheme = rootElement.classList.toggle('dark-theme');

    // Atualiza o ícone do botão com base no tema
    themeToggle.textContent = isDarkTheme ? '🌞' : '🌓';

    // Salva a preferência do usuário no localStorage
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
});

// Aplica o tema salvo no localStorage ao carregar a página
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    rootElement.classList.add('dark-theme');
    themeToggle.textContent = '🌞'; // Define o ícone para o modo claro
} else {
    themeToggle.textContent = '🌓'; // Define o ícone para o modo escuro
}

// Função para remover o botão de alternância de tema
const removeButton = () => {
    themeToggle.remove();
};

// Adiciona um evento de clique ao botão para removê-lo
themeToggle.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // Evita o menu de contexto padrão
    removeButton();
});

// Remove o contêiner de introdução após a animação
window.addEventListener('load', () => {
    const introAnimation = document.querySelector('.intro-animation');
    setTimeout(() => {
        introAnimation.remove();
    }, 4000); // Tempo total da animação (3s + 1s de fadeOut)
});
