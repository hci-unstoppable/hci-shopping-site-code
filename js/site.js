var html = document.querySelector('html');
//create array of the quantity fields
var quantityFields = document.getElementsByClassName('cart-quantity');
var inputCardNum = document.getElementById("card-number");
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
//------------------------Codee for updating the cart on shipping page from localStorage---------------
  var itemsToSplit = window.localStorage.getItem('itemsBought');
  var quantityFormatted = itemsToSplit.replace(/"/g, '');
  quantityFormatted = quantityFormatted.replace(/[\[\]']+/g, '');
  var splitQuantity = quantityFormatted.split(',');
  document.getElementById('item1').innerHTML = "Mugs " + splitQuantity[0];
  document.getElementById('item2').innerHTML = "Cups " + splitQuantity[1];
  document.getElementById('item3').innerHTML = "Table Mats: " + splitQuantity[2];
  document.getElementById('item4').innerHTML = "Napkins (50 Ct.): " + splitQuantity[3];

}
if(html.id === "payment-information-page"){
  var nextButton = document.getElementById('continue-confirmation');
  nextButton.addEventListener('click', validateInputs);
//------------------------Codee for updating the cart on payment page from localStorage---------------
  var itemsToSplit = window.localStorage.getItem('itemsBought');
  var quantityFormatted = itemsToSplit.replace(/"/g, '');
  quantityFormatted = quantityFormatted.replace(/[\[\]']+/g, '');
  var splitQuantity = quantityFormatted.split(',');
  document.getElementById('item1').innerHTML = "Mugs: " + splitQuantity[0];
  document.getElementById('item2').innerHTML = "Cups: " + splitQuantity[1];
  document.getElementById('item3').innerHTML = "Table Mats: " + splitQuantity[2];
  document.getElementById('item4').innerHTML = "Napkins (50 Ct.): " + splitQuantity[3];
}
if(html.id === "confirmation-page"){
//------------------------Codee for updating the cart on confirmation page from localStorage---------------
  var itemsToSplit = window.localStorage.getItem('itemsBought');
  var quantityFormatted = itemsToSplit.replace(/"/g, '');
  quantityFormatted = quantityFormatted.replace(/[\[\]']+/g, '');
  var splitQuantity = quantityFormatted.split(',');
  document.getElementById('item1').innerHTML = "Mugs: " + splitQuantity[0];
  document.getElementById('item2').innerHTML = "Cups: " + splitQuantity[1];
  document.getElementById('item3').innerHTML = "Table Mats: " + splitQuantity[2];
  document.getElementById('item4').innerHTML = "Napkins (50 Ct.): " + splitQuantity[3];
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
  var roundedSub = parseFloat(subtotal).toFix(2);
  var totalTag = document.getElementById('total');
  window.localStorage.setItem('subtotal', roundedSub);
  totalTag.innerHTML = "Total: $" + roundedSub;
}
function validateInputs(event){
  if(html.id==='shopping-page'){
	//Convert items to array, pass into localStorage
	var itemsBought = [quantityFields[0].value, quantityFields[1].value, quantityFields[2].value, quantityFields[3].value];
	localStorage.setItem("itemsBought", JSON.stringify(itemsBought));
  window.location="shipping-information/index.html";
}
  if(html.id==='shipping-information-page'){
   window.location="../payment-information/index.html";
  }
  if(html.id==='payment-information-page'){
    window.location="../confirmation/index.html";
  }
}
