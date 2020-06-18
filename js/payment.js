// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

// LINKING THE PAYMENT PAGE TO THE INTEREST CALCULATOR BUTTON

const interestBtn = document.querySelector('.interest-calculator');
const paymentform = document.querySelector('.payment');
const safelockMain = document.querySelector('#safelock-main');
const paymentCloseBtn = document.querySelector('#close');


interestBtn.addEventListener('click', () => {
  paymentform.style.display = 'block';
  safelockMain.classList.add('blur');
  // paymentform.style.opacity = 1;
});
paymentCloseBtn.addEventListener('click', () => {
  paymentform.style.display = 'none';
  safelockMain.classList.remove('blur');
  // paymentform.style.opacity = 1;
});