
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            const name = document.getElementById("name").value.trim();
            const surname = document.getElementById("surname").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();

            if (!name || !surname || !email || !phone) {
                alert("გთხოვთ შეავსეთ ყველა ველი!");
                e.preventDefault();
            } else {
                alert("მადლობა! თქვენი მონაცემები მიღებულია.");
            }
        });
    }
});


const carCards = document.querySelectorAll(".car-card");
carCards.forEach(card => {
    card.addEventListener("click", () => {
        window.location.href = "contact.html";
    });
});


    function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
  }



function searchFunction() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const items = document.querySelectorAll("#resultsList li");

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(input) ? "list-item" : "none";
    });
}
