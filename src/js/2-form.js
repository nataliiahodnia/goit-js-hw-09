document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  const formData =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  if (formData.email) {
    emailInput.value = formData.email;
  }
  if (formData.message) {
    messageInput.value = formData.message;
  }

  form.addEventListener('input', () => {
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    const formData =
      JSON.parse(localStorage.getItem('feedback-form-state')) || {};
    if (formData.email && formData.message) {
      console.log(formData);
      localStorage.removeItem('feedback-form-state');
      emailInput.value = '';
      messageInput.value = '';
      alert('Дякуємо за ваш відгук!');
    } else {
      alert('Будь ласка, заповніть поля електронної пошти та повідомлення.');
    }
  });
});