// script.js

// Seleciona o botão e o ícone
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// Verifica o tema salvo no localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    themeIcon.src = 'Assets/moon.png'; // Troca para ícone de lua
}

// Adiciona o evento de clique ao botão
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    // Troca o ícone com base no tema
    if (document.body.classList.contains('dark')) {
        themeIcon.src = 'Assets/moon.png'; // Ícone de lua para tema escuro
        localStorage.setItem('theme', 'dark'); // Salva o tema escuro
    } else {
        themeIcon.src = 'Assets/sun.png'; // Ícone de sol para tema claro
        localStorage.setItem('theme', 'light'); // Salva o tema claro
    }
});
