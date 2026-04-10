const container = document.getElementById("products")
fetch ("https://dummyjson.com/products")

  .then(res => res.json())
  .then(data => {
   data.products.forEach(product => {  
      const card = document.createElement("div");

      card.innerHTML = `
        <h3>${product.title}</h3>
        <img src="${product.images}" width="100">
        <p>description : "${product.description}" </p>
        <p>Price: ₹${product.price}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.log(err));
