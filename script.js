document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("https://dummyjson.com/products?limit=10");
        const data = await response.json();
        const products = data.products;
        const productList = document.getElementById("product-list");
        
        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("card");
            productCard.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.description.substring(0, 50)}...</p>
                <p><strong>Harga:</strong> $${product.price}</p>
                <p><strong>Rating:</strong> ${product.rating} ⭐</p>
            `;
            
            productCard.addEventListener("click", () => showProductInfo(product));
            
            productList.appendChild(productCard);
        });
        
    } catch (error) {
        console.error("Gagal mengambil data produk", error);
    }
});
