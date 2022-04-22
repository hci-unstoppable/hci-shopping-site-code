var html = document.querySelector('html');
//create array of the quantity fields
var quantityFields = document.getElementsByClassName('cart-quantity');

//--------------------------------CART MANIPULATION------------------------------
if (html.id === 'shopping-page') {
  var nextButton = document.getElementById('continue-shipping');
  nextButton.addEventListener('click', validateInputs)
  //Create array of all elements with class 'add-item-button'
  var addItemButtons = document.getElementsByClassName('add-item-button');
  //cycle through all elements in that array; create event listener for each
  for (var i =0; i < addItemButtons.length; i++){
    var button = addItemButtons[i];
	button.addEventListener('click', addQuantity);
  }
  //repeat of array creation/subsequent event listener creation; this time for removing items
  var removeItemButtons = document.getElementsByClassName('remove-button');
  for (var i=0; i < removeItemButtons.length; i++){
    var button = removeItemButtons[i];
	button.addEventListener('click', removeQuantity);
  }

  //event listeners for if the incrementers on the number field are used rather than buttons
  for (var i =0; i < quantityFields.length; i++){
    var field = quantityFields[i];
	field.addEventListener('change', updatePrice);
  }
}
//-------------------------Event Listeners for Interpage Navigation---------------------
if(html.id === "shipping-information-page"){
  var nextButton = document.getElementById('continue-payment');
  nextButton.addEventListener('click', validateInputs);
}
if(html.id === "payment-information-page"){
  var nextButton = document.getElementById('continue-confirmation');
  nextButton.addEventListener('click', validateInputs);
}

function addQuantity(event){
  //buttonClicked is set to be the button that was clicked to call the function
  var buttonClicked = event.target;
  //matches the clicked item to its field; adds one to quantity of that field
  if(event.target.name == "addproduct1"){
    quantityFields[0].value++;
  }
  if(event.target.name == "addproduct2"){
    quantityFields[1].value++;
  }
  if(event.target.name == "addproduct3"){
    quantityFields[2].value++;
  }
  if(event.target.name == "addproduct4"){
    quantityFields[3].value++;
  }
  //call function to calculate price for new quantity
  updatePrice();
}
function removeQuantity(event){
  var buttonClicked = event.target;
  if(event.target.name == "removeproduct1" && quantityFields[0].value > 0){
    quantityFields[0].value--;
    //call function to calculate price for new quantity
	updatePrice();

  }
  if(event.target.name == "removeproduct2" && quantityFields[1].value > 0){
    quantityFields[1].value--;
	updatePrice();
  }
  if(event.target.name == "removeproduct3" && quantityFields[2].value > 0){
    quantityFields[2].value--;
	updatePrice();

  }
  if(event.target.name == "removeproduct4" && quantityFields[3].value > 0){
    quantityFields[3].value--;
    updatePrice();
  }
}

function updatePrice(event){
  var subtotal = (quantityFields[0].value * 13.99) + (quantityFields[1].value * 11.99) + (quantityFields[2].value * 3.99) + (quantityFields[3].value * 5.99);
  var totalTag = document.getElementById('total');
  window.localStorage.setItem('subtotal', subtotal);
  totalTag.innerHTML = "Total: $" + subtotal;
}
function validateInputs(event){
  if(html.id==='shopping-page'){
	//Convert items to array, pass into localStorage
	var itemsBought = [quantityFields[0].value, quantityFields[1].value, quantityFields[2].value, quantityFields[3].value];
	localStorage.setItem("itemsBought", JSON.stringify(itemsBought));
  window.location="shipping-information/index.html";
}
  if(html.id==='shipping-information-page'){
  //  window.location="../payment-information/index.html";
    var items = window.localStorage.getItem('itemsBought');
    items.split(',');
    alert(items[0]);
    alert(items[1]);
    alert(items[2]);
    alert("this alert works");
  }
  if(html.id==='payment-information-page'){
    window.location="../confirmation/index.html";
  }
}
