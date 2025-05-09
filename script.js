 // Funções de acessibilidade
 document.querySelector('[title="Aumentar fonte"]').addEventListener('click', function() {
    const html = document.querySelector('html');
    let fontSize = window.getComputedStyle(html).getPropertyValue('font-size');
    fontSize = parseFloat(fontSize) + 1;
    html.style.fontSize = fontSize + 'px';
});

document.querySelector('[title="Contraste"]').addEventListener('click', function() {
    document.body.classList.toggle('high-contrast');
});

// Simulação de leitor de tela (em produção, usar uma biblioteca especializada)
document.querySelector('[title="Leitor de Tela"]').addEventListener('click', function() {
    alert('Leitor de tela ativado. Navegue usando TAB e ENTER.');
});

// Simulação de seletor de idioma
document.querySelector('.language-selector button').addEventListener('click', function() {
    alert('Seletor de idioma. Em uma implementação real, isso mudaria o idioma da página.');
});