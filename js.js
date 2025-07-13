let cart = [];
let cartCount = 0;

function addToCart(productName, price) {
    cart.push({
        name: productName,
        price: price
    });
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    
    // Animación del botón
    const button = event.target;
    button.style.transform = 'translateY(-2px)';
    button.textContent = 'Agregado';
    button.style.background = '#1a1a1a';
    button.style.color = 'white';
    
    setTimeout(() => {
        button.style.transform = 'translateY(0)';
        button.textContent = 'Agregar al Carrito';
        button.style.background = 'transparent';
        button.style.color = '#1a1a1a';
    }, 1200);
}

function toggleCart() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    let cartContent = 'Carrito de Compras:\n\n';
    let total = 0;
    
    cart.forEach((item, index) => {
        cartContent += `${index + 1}. ${item.name} - $${item.price}\n`;
        total += item.price;
    });
    
    cartContent += `\nTotal: $${total}`;
    alert(cartContent);
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.borderBottom = '1px solid rgba(0, 0, 0, 0.05)';
    }
});

// Product cards animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out';
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card').forEach(card => {
    observer.observe(card);
});