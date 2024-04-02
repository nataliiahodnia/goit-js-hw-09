const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener('input', () => {
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim()
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  if (formData.email && formData.message) {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = ''; 
  } else {
    console.log('Please fill in both email and message fields.');
  }
});

window.addEventListener('beforeprint', () => {
  const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  if (formData.email) {
    emailInput.value = formData.email;
  }
  if (formData.message) {
    messageInput.value = formData.message;
  }
});


