const form = document.querySelector('#inquiryForm');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Validate name input field
  if (nameInput.value === '') {
    alert('Please enter your name.');
    return;
  }

  // Validate email input field
  if (emailInput.value === '') {
    alert('Please enter your email.');
    return;
  }

  // Validate phone input field
  if (phoneInput.value === '') {
    alert('Please enter your phone number.');
    return;
  }

  // Form is valid, submit it
  form.submit();
});