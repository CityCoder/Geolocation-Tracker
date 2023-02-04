// Get the user's current location using the Geolocation API
navigator.geolocation.getCurrentPosition(function(position) {
  // Call the API to get products based on the user's location
  fetch(`/api/products?lat=${position.coords.latitude}&long=${position.coords.longitude}`)
    .then(response => response.json())
    .then(products => {
      // Render the products on the page
      let productCards = "";
      products.forEach(product => {
        productCards += `
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <a href="#"><img class="card-img-top" src="${product.image}" alt="Product Image"></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">${product.name}</a>
                </h4>
                <p class="card-text">${product.description}</p>
              </div>
              <div class="card-footer">
                <a href="#" class="btn btn-primary">View Product</a>
              </div>
            </div>
          </div>
        `;
      });
      document.getElementById('products').innerHTML = productCards;
    });
}, function(error) {
  console.error("Error getting the user's location: ", error);
  document.getElementById('products').innerHTML = "Unable to display products at this time.";
});
