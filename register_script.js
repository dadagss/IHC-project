// Funções de acessibilidade (reaproveitadas)
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

// Simulação de seletor de idioma (reaproveitada)
document.querySelector('.language-selector button').addEventListener('click', function() {
    alert('Seletor de idioma. Em uma implementação real, isso mudaria o idioma da página.');
});

// Lógica para o formulário de cadastro
document.querySelector('.register-form form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const termosAceitos = document.getElementById('termos').checked;

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem. Por favor, verifique.');
        return; // Impede o envio do formulário se as senhas não batem
    }

    if (!termosAceitos) {
        alert('Você deve concordar com os Termos de Serviço e Política de Privacidade para continuar.');
        return; // Impede o envio se os termos não forem aceitos
    }

    // Se tudo estiver OK, você pode coletar os dados do formulário
    const formData = new FormData(this);
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }

    console.log('Dados do formulário de cadastro:', data);
    alert('Cadastro realizado com sucesso! (Simulação)');
    // Em uma aplicação real, você enviaria 'data' para o seu backend via AJAX.
    // window.location.href = 'index.html'; // Redirecionar para a tela de login após o cadastro
});