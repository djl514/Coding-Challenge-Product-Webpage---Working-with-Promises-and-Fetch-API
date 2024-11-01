const productList = document.getElementById('productList');
const container = document.getElementById('theProducts');

// Fetch data from the supplier's product API
fetch('https://fakestoreapi.com/products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(products => {
        displayProducts(products);
    })
    // 4. 
    .catch(error => {
        console.error('Failed to load products', error);
    });

function displayImage(products){

}

function displayProducts(products){
    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `Product: ${product.title} - $${product.price}
        Company: ${product.image}`;
        productList.appendChild(listItem);
        });
    }


// function displayProducts(products){
//     products.forEach(product => {
//         const { name, price, company, image } = product.fields;
//         const listItem = document.createElement('div');
//         listItem.innerHTML = 
//         `
//             <img src="${product.image.url}" alt="${product.name}" />
//             <h2>${product.name}</h2>
//             <p>Company: ${product.company}</p>
//             <p>Price: ${(product.price price / 100).toFixed(2)}</p>
        
//         `;
//         productList.appendChild(listItem);
//     });
// }