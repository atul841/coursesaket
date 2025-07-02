function showForm(formId) {
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('signupForm').classList.remove('active');
    document.getElementById(formId + 'Form').classList.add('active');
  }