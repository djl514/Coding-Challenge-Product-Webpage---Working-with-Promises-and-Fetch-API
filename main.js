const productList = document.getElementById('productList');
const container = document.getElementById('theProducts');

// 2. Fetch data from the supplier's product API
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
    // 4. uses catch to handle errors
    .catch(error => {
        console.error('Failed to load products', error);
    });

//3. Display Product Details Dynamically
function displayProducts(products){
    products.forEach(product => {
        const listItem = document.createElement('li');

        //uses innerHTML to input data into the li elements
        listItem.innerHTML = 
        `
        <ul><b>Product:</b> ${product.title} 
        <br><b>Price:</b> $${(product.price / 100).toFixed(2)}
        <br>
        <img src=${product.image} style= "width: 10%" alt=${product.title}  />
        </ul>
        `;

        //adds the li element to the ul from index.html
        productList.appendChild(listItem);
        });
    }

