import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

function saveFormData() {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function formFields() {
  const savedFormData = localStorage.getItem('feedback-form-state');
  if (savedFormData) {
    const formData = JSON.parse(savedFormData);
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
}
window.addEventListener('load', formFields);

form.addEventListener('input', throttle(saveFormData, 500));

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

    console.log(formData);
    
    localStorage.removeItem('feedback-form-state');

  emailInput.value = '';
  messageTextarea.value = '';
});