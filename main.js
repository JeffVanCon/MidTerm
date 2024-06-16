function get_info() {
  let api = "https://dummyjson.com/products/1";
  fetch(api)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      display_img(data.images);
      display_title(data.title);
      display_description(data.description);
      display_price(data.price);
      display_rating(data.rating);
      display_brand(data.brand);
      display_stock(data.stock);
    })
    .catch(function (error) {
      console.log("Error: " + error);
    });
  function display_img(img) {
    document.getElementById("img-panel").src = img;
  }
  function display_title(title) {
    document.querySelector(".title").innerHTML = title;
  }
  function display_description(desciption) {
    document.querySelector(".description").innerHTML = desciption;
  }
  function display_price(price) {
    document.querySelector(".price").innerHTML = "$" + price;
  }
  function display_rating(rating) {
    document.querySelector(".rating").innerHTML = rating;
  }
  function display_brand(brand) {
    document.querySelector(".brand").innerHTML = brand;
  }
  function display_stock(stock) {
    document.querySelector(".stock").innerHTML = stock;
  }
}
get_info();

// data.images
// data.title
// data.desciption
// data.price
// data.rating
// data.brand
// data.stock
