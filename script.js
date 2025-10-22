document.addEventListener('DOMContentLoaded', function () {
    const f = document.getElementById('contactForm');
    if (f) {
        f.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Form submitted (demo).');
            f.reset();
        });
    }
});