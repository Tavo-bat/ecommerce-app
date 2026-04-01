/**
 * ProductCard — genera el HTML de una tarjeta de producto.
 * @param {Object}  product
 * @param {string}  product.name     - Nombre del producto
 * @param {number}  product.price    - Precio
 * @param {string}  product.image    - URL de la imagen
 * @param {number}  [product.rating=4.5]  - Calificación (0-5)
 * @param {boolean} [product.isNew=false] - Mostrar badge "Nuevo"
 */
function ProductCard(product) {
    const rating  = product.rating  ?? 4.5;
    const isNew   = product.isNew   ?? false;

    const fullStars  = Math.floor(rating);
    const halfStar   = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    const starsHTML =
        '★'.repeat(fullStars) +
        (halfStar ? '⯨' : '') +
        '☆'.repeat(emptyStars);

    return `
        <div class="product-card" role="listitem">
            <div class="product-image-wrapper">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-image"
                    loading="lazy"
                    width="400"
                    height="240"
                >
                ${isNew ? '<span class="product-badge">Nuevo</span>' : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating" aria-label="Calificación: ${rating} de 5">
                    <span class="stars" aria-hidden="true">${starsHTML}</span>
                    <span class="rating-count">(${rating})</span>
                </div>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart-btn" aria-label="Añadir ${product.name} al carrito">
                    <i class="fa-solid fa-cart-plus" aria-hidden="true"></i>
                    Añadir al carrito
                </button>
            </div>
        </div>
    `;
}
