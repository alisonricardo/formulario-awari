document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o elemento do formulário
    const form = document.querySelector('#contact-form');

    // Adiciona um ouvinte de evento de envio ao formulário
    form.addEventListener('submit', function(event) {
        // Impede a ação padrão de envio do formulário
        event.preventDefault();

        // Recupera os dados do formulário
        const formData = new FormData(form);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const message = formData.get('message').trim();

        // Validação básica
        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Aqui você pode adicionar a lógica para enviar os dados do formulário
        // para o servidor usando, por exemplo, fetch ou XMLHttpRequest.
        // ...

        // Exibe um alerta de sucesso
        alert('Mensagem enviada');

        // Opcionalmente, limpe o formulário após o envio
        form.reset();
    });
});
