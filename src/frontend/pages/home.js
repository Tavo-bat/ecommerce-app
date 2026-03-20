document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');

    const sampleProducts = [
        {
            name: 'Camisa Casual de Lino',
            price: 49.99,
            image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1964&auto=format&fit=crop'
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
            image: 'https://images.unsplash.com/photo-1509762774605-f07235a08f1f?q=80&w=1887&auto=format&fit=crop'
        },
        {
            name: 'Jeans Slim Fit',
            price: 95.00,
            image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1887&auto=format&fit=crop'
        },
        {
            name: 'Sudadera con Capucha',
            price: 65.00,
            image: 'https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
