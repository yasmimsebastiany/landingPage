function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Fecha o modal se o usuário clicar fora dele
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
}

function validateForm() {
    let isValid = true;
    
    // Validação do campo nome
    const nome = document.getElementById('nome').value;
    const nomeError = document.getElementById('nomeError');
    const nomeRegex = /^[a-zA-Z\s]+$/;
    if (!nomeRegex.test(nome)) {
        nomeError.style.display = 'block';
        nomeError.innerText = 'O nome não deve conter números ou caracteres especiais.';
        isValid = false;
    } else {
        nomeError.style.display = 'none';
    }
    
    // Validação do campo celular
    const celular = document.getElementById('celular').value;
    const celularError = document.getElementById('celularError');
    const celularRegex = /^[0-9]+$/;
    if (!celularRegex.test(celular)) {
        celularError.style.display = 'block';
        celularError.innerText = 'O celular não deve conter letras ou caracteres especiais.';
        isValid = false;
    } else {
        celularError.style.display = 'none';
    }

    if (isValid) {
        // Substitui o conteúdo do modal com a mensagem de agradecimento
        const modalContent = document.getElementById('modal-content');
        modalContent.innerHTML = `
            <span class="close" onclick="closeModal()">&times;</span>
            <div class="thank-you-message">
                <h2>Obrigado pelo seu contato!</h2>
                <p>Recebemos suas informações e entraremos em contato em breve.</p>
            </div>
        `;
        // Muda a cor de fundo do modal
        modalContent.style.backgroundColor = '#333';
    }

    return false; 
}
