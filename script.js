document.addEventListener("DOMContentLoaded", () => {
    // Cibler automatiquement tous les titres h2, sections et images
    const elementsToAnimate = document.querySelectorAll(
        "h2, section, .collection-card, .service-card, .about-container, #testimonials"
    );

    // Les rendre invisibles au départ
    elementsToAnimate.forEach(el => {
        el.style.opacity = 0;
    });

    // Observer pour déclencher l'animation au scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-show");
            }
        });
    }, { threshold: 0.2 });

    elementsToAnimate.forEach(el => observer.observe(el));
});


let cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = 0;

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

function addToCart(name, price, qty) {
    cart.push({ name, price, qty });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert('Ajouté au panier !');
}

function buyNow(name, price) {
    window.location.href = 'pai
	