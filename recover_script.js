document.querySelector('[title="Aumentar fonte"]').addEventListener('click', function() {
    const html = document.querySelector('html');
    let fontSize = window.getComputedStyle(html).getPropertyValue('font-size');
    fontSize = parseFloat(fontSize) + 1;
    html.style.fontSize = fontSize + 'px';
});

document.querySelector('[title="Contraste"]').addEventListener('click', function() {
    document.body.classList.toggle('high-contrast');
});

document.querySelector('[title="Leitor de Tela"]').addEventListener('click', function() {
    alert('Leitor de tela ativado. Navegue usando TAB e ENTER.');
});

// Simulação de seletor de idioma (reaproveitada do seu script.js original)
document.querySelector('.language-selector button').addEventListener('click', function() {
    alert('Seletor de idioma. Em uma implementação real, isso mudaria o idioma da página.');
});

// Lógica para o formulário de recuperação de senha
document.querySelector('.recovery-form form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const cpfEmailInput = document.getElementById('cpf-email');
    const valorDigitado = cpfEmailInput.value.trim();

    if (valorDigitado) {
        alert(`Um email de redefinição de senha foi enviado para ${valorDigitado}.`);
        // Em uma aplicação real, aqui você faria uma requisição AJAX para o backend
        // para realmente enviar o email.
    } else {
        alert('Por favor, informe seu CPF ou Email.');
    }
});