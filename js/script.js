document.addEventListener("DOMContentLoaded", () => {

    const openPopup = document.getElementById("openPopup");
    const closePopup = document.getElementById("closePopup");
    const popup = document.getElementById("emailPopup");
    const form = document.getElementById("emailForm");

    // abrir
    openPopup.addEventListener("click", () => {
        popup.style.display = "flex";
    });

    // fechar
    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // fechar clicando fora
    popup.addEventListener("click", (event) => {
        if (event.target === popup) popup.style.display = "none";
    });

    // enviar email
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const subject = encodeURIComponent(document.getElementById("emailSubject").value);
        const body = encodeURIComponent(document.getElementById("emailBody").value);

        window.location.href = `mailto:brunasoeiro@hotmail.com?subject=${subject}&body=${body}`;
    });
});
