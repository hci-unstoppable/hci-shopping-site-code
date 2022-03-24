const validate = function(ev){
  if (html.id === "shipping-information-page") {
      let failure = [];
      //for select statements
      let select = document.getElementById('shipping-options');
      //if it's the first option, output an error
      if (select.selectedIndex === 0) {
        failure.push({input:'shipping-options', msg:'Three Options Available'})
      }
    return failure;
  }
}
