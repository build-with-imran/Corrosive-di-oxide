// ── Login Function ─────────────────────────────
function login() {
  var email = document.getElementById('email').value.trim();
  var password = document.getElementById('password').value;

  var emailError = document.getElementById('emailError');
  var passwordError = document.getElementById('passwordError');

  emailError.textContent = '';
  passwordError.textContent = '';

  var isValid = true;

  if (!email) {
    emailError.textContent = 'Enter email';
    isValid = false;
  }

  if (!password) {
    passwordError.textContent = 'Enter password';
    isValid = false;
  }

  if (!isValid) return;

  // Get stored user
  var storedUser = JSON.parse(localStorage.getItem('user'));

  if (!storedUser) {
    alert('No user found. Please signup first.');
    return;
  }

  // Check credentials
  if (email === storedUser.email && password === storedUser.password) {
    alert('Login successful!');
    // redirect or do something
  } else {
    alert('Invalid email or password');
  }
}

// ── Go To Signup ─────────────────────────────
function goToSignup() {
  window.location.href = "register.html";
}