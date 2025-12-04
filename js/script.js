document.addEventListener("DOMContentLoaded", () => {

    // --- POPUP (se você quiser continuar usando em algum lugar) ---
    const openPopup = document.getElementById("openPopup");
    const closePopup = document.getElementById("closePopup");
    const popup = document.getElementById("emailPopup");
    const formPopup = document.getElementById("emailForm");

    if (openPopup) {
        openPopup.addEventListener("click", () => {
            popup.style.display = "flex";
        });
    }

    if (closePopup) {
        closePopup.addEventListener("click", () => {
            popup.style.display = "none";
        });
    }

    if (popup) {
        popup.addEventListener("click", (event) => {
            if (event.target === popup) popup.style.display = "none";
        });
    }

    if (formPopup) {
        formPopup.addEventListener("submit", (event) => {
            event.preventDefault();

            const subject = encodeURIComponent(document.getElementById("emailSubject").value);
            const body = encodeURIComponent(document.getElementById("emailBody").value);

            window.location.href = `mailto:brunasoeiro@hotmail.com?subject=${subject}&body=${body}`;
        });
    }


    // --- FORMULÁRIO DA ABA CONTATO ---
    const contatoForm = document.getElementById("contatoForm");

    if (contatoForm) {
        contatoForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const nome = encodeURIComponent(document.getElementById("nomeContato").value);
            const email = encodeURIComponent(document.getElementById("emailContato").value);
            const msg = encodeURIComponent(document.getElementById("msgContato").value);

            const assunto = `Mensagem do site - ${nome}`;
            const corpo = `Nome: ${nome}%0D%0AEmail: ${email}%0D%0A%0D%0AMensagem:%0D%0A${msg}`;

            window.location.href = `mailto:brunasoeiro@hotmail.com?subject=${assunto}&body=${corpo}`;
        });
    }

});
