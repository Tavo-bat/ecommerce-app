document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');

    const sampleProducts = [
        {
            name: 'Camisa Casual de Lino',
            price: 49.99,
            image: 'https://images.unsplash.com/photo-1622470953794-3d5f5aa96113?q=80&w=1964&auto=format&fit=crop'
        },
        {
            name: 'Zapatillas Urbanas',
            price: 89.90,
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop'
        },
        {
            name: 'Reloj Clásico de Cuero',
            price: 150.00,
            image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1888&auto=format&fit=crop'
        },
        {
            name: 'Gafas de Sol Aviador',
            price: 75.50,
            image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1780&auto=format&fit=crop'
        },
        {
            name: 'Mochila de Lona',
            price: 60.00,
            image: 'https://images.unsplash.com/photo-1553062407-98eeb68c6a62?q=80&w=1887&auto=format&fit=crop'
        },
        {
            name: 'Jeans Slim Fit',
            price: 95.00,
            image: 'https://images.unsplash.com/photo-1602293589930-45a9ecba3ab4?q=80&w=1887&auto=format&fit=crop'
        },
        {
            name: 'Sudadera con Capucha',
            price: 65.00,
            image: 'https://images.unsplash.com/photo-1556821843-a79b4b0853a4?q=80&w=1887&auto=format&fit=crop'
        },
        {
            name: 'Chaqueta de Cuero',
            price: 220.00,
            image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=1887&auto=format&fit=crop'
        }
    ];

    function renderProducts() {
        if (productsContainer) {
            productsContainer.innerHTML = sampleProducts.map(product => ProductCard(product)).join('');
        }
    }

    renderProducts();
});
