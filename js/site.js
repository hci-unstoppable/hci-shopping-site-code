
var creditCardPaymentFieldset = document.querySelector('fieldset[name="credit-payment"]');

if (creditCardPaymentFieldset !== null) {

  creditCardPaymentFieldset.setAttribute('disabled', 'disabled');
  creditCardPaymentFieldset.setAttribute('aria-hidden', 'true');
}

var billingFieldset = document.querySelector('fieldset[name="billing-payment"]');

if (billingFieldset !== null) {

  billingFieldset.setAttribute('disabled', 'disabled');
  billingFieldset.setAttribute('aria-hidden', 'true');
}

var billingLocationFieldset = document.querySelector('fieldset[name="shipping-location"]');

if (billingLocationFieldset !== null) {

  billingLocationFieldset.setAttribute('disabled', 'disabled');
  billingLocationFieldset.setAttribute('aria-hidden', 'true');
}

var personalInformationFieldset = document.querySelector('fieldset[name="personal-information-field"]');

if (personalInformationFieldset !== null) {

  personalInformationFieldset.setAttribute('disabled', 'disabled');
  personalInformationFieldset.setAttribute('aria-hidden', 'true');
}
