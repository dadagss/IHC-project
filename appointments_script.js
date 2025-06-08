// Simulação de funcionalidade para os dropdowns de filtro
document.querySelectorAll('.filter-dropdown').forEach(dropdown => {
    const button = dropdown.querySelector('.dropdown-button');
    const content = dropdown.querySelector('.dropdown-content');

    // Abre/fecha o dropdown ao clicar no botão
    button.addEventListener('click', function() {
        // Fecha outros dropdowns abertos (opcional)
        document.querySelectorAll('.filter-dropdown .dropdown-content').forEach(otherContent => {
            if (otherContent !== content) {
                otherContent.style.display = 'none';
            }
        });
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });

    // Fecha o dropdown se clicar fora dele
    window.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            content.style.display = 'none';
        }
    });

    // Lógica de seleção (apenas simulação)
    content.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que o link navegue
            button.firstChild.textContent = this.textContent + ' '; // Atualiza o texto do botão
            content.style.display = 'none'; // Fecha o dropdown após a seleção
            alert(`Filtro "${this.textContent}" selecionado.`);
            // Aqui você adicionaria a lógica real para filtrar os resultados
        });
    });
});

// Simulação do botão de "Marcar Consulta"
document.querySelectorAll('.btn-primary-consultar').forEach(button => {
    button.addEventListener('click', function() {
        const doctorName = this.closest('.doctor-card').querySelector('h3').textContent;
        alert(`Você clicou em "Marcar Consulta" para ${doctorName}. (Simulação)`);
        // Em uma aplicação real, aqui você redirecionaria para uma página de agendamento
        // ou abriria um modal com mais opções.
    });
});

// Simulação do botão "Procurar"
document.querySelector('.btn-primary-procurar').addEventListener('click', function() {
    alert('Busca realizada! (Simulação)');
    // Aqui você coletaria os valores dos filtros e da barra de busca
    // e faria uma requisição para carregar os resultados reais.
});

// Simulação do botão de busca principal
document.querySelector('.search-button').addEventListener('click', function() {
    const searchTerm = document.querySelector('.search-bar input').value.trim();
    if (searchTerm) {
        alert(`Buscando por: "${searchTerm}" (Simulação)`);
    } else {
        alert('Digite algo para buscar!');
    }
});

