document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".content-box");

    boxes.forEach(box => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "#004cff";
            box.style.color = "#222";
        });

        box.addEventListener("mouseout", () => {
            box.style.backgroundColor = "#fff";
            box.style.color = "black";
        });
    });

    console.log("Bienvenue sur la plateforme القلعة التعليمية للشطرنج !");
});
document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdown.addEventListener("click", function () {
        dropdownMenu.style.display = (dropdownMenu.style.display === "block") ? "none" : "block";
    });

    // Fermer le menu si on clique ailleurs
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});
