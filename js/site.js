/*const validate = function(ev){
  if (html.id === "shipping-information-page") {
      let failure = []
      //for select statements
      let select = document.getElementById('shipping-options')
      //if it's the first option, output an error
      if (select.selectedIndex === 0) {
        failure.push({input:'shipping-options', msg:'Three Options Available'})
      }
    return failure;
  }
}

if (html.id === "personal-information-page") {
  const name = document.getElementById('full-name')
  const email = document.getElementById('email')
  const phone = document.getElementById('phone')
  const form = document.getElementById('personal-information')
  const errorElement = document.getElementById('error')

  form.addEventListener('submit', (e) => {
    let error = []
    if (name.value === '') {
      error.push('Name is required')
    }

    if (phone.value.length <= 9 || phone.value.length > 12) {
      error.push("Not a Real Phone Number")
    }

    if (error.length > 0) {
      e.preventDefault()
      errorElement.innerText = error.join(', ')
    }
  })
}*/

let cartProducts = [];
const parentElement = document.querySelector("#items-in-cart");
const totalPrice = document.querySelector("#total");
const productN1 = document.querySelector('.item1');
const productN2 = document.querySelector('.item2');
const productN3 = document.querySelector('.item3');
const productN4 = document.querySelector('.item4');


const calculateSumPriceN1 = function() {
  let sumPrice = 0;
  cartProducts.forEach(product => {
    sumPrice += productN1.price;
  });
  return sumPrice;
}

const updateProductsInCartHTML() = function() {
  if(cartProducts.length > 0) {
    let result = cartProducts.map(productN1 => ) {
      return '
      <li>
        <label for="productN1.name">Mug $<span class="productN1.value"/>13.99</label>
        <button type="button" class="add-item-button" data-product-id="productID">Add to cart: </button>
      </li>
      '
    });
    parentElement.innerHTML = result.join('');
    document.querySelector('.shopping-cart').classList.remove('hidden');
    totalPrice.innerHTML = "$" + calculateSumPriceN1;
  }
  else{
    document.querySelector('.shopping-cart').classList.add('hidden');
    parentElement.innerHTML = "Your Shopping Cart is Empty";
    totalPrice.innerHTML = "";
  }
}

function updateProductsInCart(productN1) {
  for(let i=0; i < cartProducts.length; i++) {
    if(cartProducts[i].id == productN1.id) {
      cartProducts[i].count += 1;
      cartProducts[i].price = cartProducts[i].basePrice * cartProducts[i].count;
      return;
    }
  }
  cartProducts.push(productN1);
}



productN1.forEach(product => {
  product.addEventListener('click', (event) => {
    if(event.target.classList.contains('add-item-button')) {
      const productID = event.target.dataset.productID;
      const productName = product.querySelector('item1').innerHTML;
      const productPrice = product.querySelector('value').innerHTML;
      //const productImage = product.querySelector(img).src;
      let addProductToCart = {
        name: mug.
        //productImage
        id: productID,
        count: 1,
        price: +productPrice,
        basePrice: +productPrice
      }
      updateProductsInCart(addProductToCart);
      updateProductsInCartHTML();


    }
  })
})

parentElement.addEventListener('click', (addEventListener) => {
  const addItem = event.target.classList.contains('add-item-button');
  const removeItem = event.target.classList.contains('remove-button');
  if(addItem || removeButton) {
    for(let i=0; i < cartProducts.length; i++) {
      if(cartProducts[i].id === event.target.dataset.id) {
        if(addItem) {
          cartProducts[i].count += 1;
        }
        else if(removeItem) {
          cartProducts[i].count -= 1;
        }
        cartProducts[i].price = productsInCart[i].basePrice * productsInCart[i].count;
      }
      if(cartProducts[i].count <= 0) (
        cartProducts.splice(i, 1);
      )
    }
    updateProductsInCartHTML();
  }
}
