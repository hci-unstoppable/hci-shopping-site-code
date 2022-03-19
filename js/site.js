
var creditCardPaymentFieldset = document.querySelector('fieldset[name="credit-payment"]');

if (creditCardPaymentFieldset !== null) {

  creditCardPaymentFieldset.setAttribute('disabled', 'disabled');
  creditCardPaymentFieldset.setAttribute('aria-hidden', 'true');
}
