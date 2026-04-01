document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. ESTADO GLOBAL
    // ==========================================
    const productsContainer = document.getElementById('products-container');
    const searchForm = document.querySelector('.search-bar');
    const searchInput = document.getElementById('search-input');
    const cartBadge = document.getElementById('cart-count');
    const menuToggle = document.getElementById('menu-toggle');
    const navigation = document.getElementById('navigation');

    const sampleProducts = [
        {
            name: 'Camisa Casual de Lino',
            price: 49.99,
            rating: 4.5,
            isNew: true,
            image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1964&auto=format&fit=crop'
        },
        {
            name: 'Zapatillas Urbanas',
            price: 89.90,
            rating: 4.8,
            isNew: true,
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop'
        },
        {
            name: 'Reloj Clásico de Cuero',
            price: 150.00,
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1888&auto=format&fit=crop'
        },
        {
            name: 'Gafas de Sol Aviador',
            price: 75.50,
            rating: 4.3,
            image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1780&auto=format&fit=crop'
        },
        {
            name: 'Mochila de Lona',
            price: 60.00,
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1509762774605-f07235a08f1f?q=80&w=1887&auto=format&fit=crop'
        },
        {
            name: 'Jeans Slim Fit',
            price: 95.00,
            rating: 4.4,
            image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1887&auto=format&fit=crop'
        },
        {
            name: 'Sudadera con Capucha',
            price: 65.00,
            rating: 4.2,
            image: 'https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?q=80&w=688&auto=format&fit=crop'
        },
        {
            name: 'Chaqueta de Cuero',
            price: 220.00,
            rating: 4.9,
            isNew: true,
            image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=1887&auto=format&fit=crop'
        }
    ];

    let currentProducts = [...sampleProducts];
    let cart = JSON.parse(localStorage.getItem('cart')) || [];


    // ==========================================
    // 2. RENDERIZADO DE PRODUCTOS
    // ==========================================
    function renderProducts(products) {
        if (!productsContainer) return;
        
        if (products.length === 0) {
            productsContainer.innerHTML = '<p class="no-results" style="grid-column: 1/-1; text-align: center; color: var(--color-text-muted);">No se encontraron productos que coincidan con tu búsqueda.</p>';
            return;
        }

        productsContainer.innerHTML = products
            .map(product => ProductCard(product))
            .join('');
    }

    renderProducts(currentProducts);


    // ==========================================
    // 3. CARRITO DE COMPRAS (Event Delegation)
    // ==========================================
    function updateCartBadge() {
        if (!cartBadge) return;
        
        // Sumamos la cantidad de todos los items
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartBadge.textContent = totalItems;
        
        // Animación pequeña para dar feedback al usuario
        cartBadge.style.transform = 'scale(1.3)';
        setTimeout(() => cartBadge.style.transform = 'scale(1)', 200);
    }

    // Inicializar el badge al cargar la página
    updateCartBadge();

    if (productsContainer) {
        productsContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.add-to-cart-btn');
            if (!btn) return; // Si no hicieron clic en el botón, ignorar

            // Extraer datos del producto desde los atributos data-
            const name = btn.getAttribute('data-name');
            const price = parseFloat(btn.getAttribute('data-price'));
            const image = btn.getAttribute('data-image');

            // Buscar si ya existe en el carrito
            const existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name, price, image, quantity: 1 });
            }

            // Guardar en localStorage y actualizar UI
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartBadge();

            // Feedback visual en el botón
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-check"></i> Añadido';
            btn.style.backgroundColor = 'var(--color-primary-dark)';
            btn.style.color = 'white';
            
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.backgroundColor = '';
                btn.style.color = '';
            }, 1000);
        });
    }


    // ==========================================
    // 4. BÚSQUEDA DE PRODUCTOS
    // ==========================================
    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evitar que la página recargue
            
            const query = searchInput.value.trim().toLowerCase();
            
            if (query === '') {
                currentProducts = [...sampleProducts];
            } else {
                currentProducts = sampleProducts.filter(p => 
                    p.name.toLowerCase().includes(query)
                );
            }
            
            renderProducts(currentProducts);
            
            // Hacer scroll suave hacia los productos
            const section = document.getElementById('productos');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
        });
    }


    // ==========================================
    // 5. MENÚ MÓVIL (HAMBURGUESA)
    // ==========================================
    if (menuToggle && navigation) {
        menuToggle.addEventListener('click', () => {
            const isActive = navigation.classList.contains('active');
            
            // Alternar clase toggle y accesibilidad
            navigation.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', !isActive);
            
            // Cambiar el ícono (bars <-> xmark)
            const icon = menuToggle.querySelector('i');
            if (!isActive) {
                icon.classList.replace('fa-bars', 'fa-xmark');
            } else {
                icon.classList.replace('fa-xmark', 'fa-bars');
            }
        });
    }
});
