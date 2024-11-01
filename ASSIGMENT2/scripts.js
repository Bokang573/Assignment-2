const products = [
    {
        name: "Organic Tomatoes",
        description: "Fresh organic tomatoes from local farms.",
        price: "M3.00",
        image: "images/tomatoes.png" 
    },
    {
        name: "Handmade Pottery",
        description: "Beautiful handmade pottery crafted by local artisans.",
        price: "M350.95",
        image: "images/pottery.jpg" 
    },
    {
        name: "Freshly Baked Bread",
        description: "Daily fresh bread from local bakeries.",
        price: "M15.50",
        image: "images/bread.jpg" 
    },
    {
        name: "Local Honey",
        description: "Pure and natural honey sourced from local beekeepers.",
        price: "M49.99",
        image: "images/honey.png"
    },
];


function displayProducts() {
    const productList = document.getElementById('product-list');
    
    
    productList.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.innerHTML = `<style>
        h3{color:#333;}
        </style>
            <h3>${product.name}</h3>
            <img src="${product.image}" alt="${product.name}" style="max-width:200px;background-color:white;paddind:1em;margin-bottom:1em;box-shadow:0 2px 5px rgba(0,0,0,0.1);border-radius:5px;
            display:inline">
            <p>${product.description}</p>
            <p style="font-weight:bold;color:#007bff">Price: ${product.price}</p>
        `;
        productList.appendChild(productItem);
    });
}


document.addEventListener('DOMContentLoaded', displayProducts);
