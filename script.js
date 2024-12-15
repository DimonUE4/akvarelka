document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Предотвращаем стандартное поведение ссылки
            const page = link.getAttribute("data-page");
            if (page) {
                window.location.href = page; // Переход на нужную страницу
            }
        });
    });
});

function redirectToForm() {
    event.preventDefault(); // Останавливаем стандартное поведение формы
    window.location.href = "form.html"; // Перенаправляем на нужную страницу
}
