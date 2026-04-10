// ── Toggle Password Visibility ──────────────────────────────
function togglePassword(id) {
  var input = document.getElementById(id);
  input.type = input.type === 'password' ? 'text' : 'password';
}

// ── Show Error ──────────────────────────────────────────────
function showError(fieldId, message) {
  var input = document.getElementById(fieldId);
  var error = document.getElementById(fieldId + '-error');
  input.classList.add('border-red-400');
  input.classList.remove('border-slate-200');
  error.textContent = message;
  error.classList.remove('hidden');
}

// ── Clear Error ─────────────────────────────────────────────
function clearError(fieldId) {
  var input = document.getElementById(fieldId);
  var error = document.getElementById(fieldId + '-error');
  input.classList.remove('border-red-400');
  input.classList.add('border-slate-200');
  error.classList.add('hidden');
}

// ── Validate Form ───────────────────────────────────────────
function validateForm() {
  var isValid = true;

  var fullname = document.getElementById('fullname').value.trim();
  var email    = document.getElementById('email').value.trim();
  var password = document.getElementById('password').value;
  var confirm  = document.getElementById('confirmPassword').value;
  var terms    = document.getElementById('terms').checked;

  // Clear all errors first
  clearError('fullname');
  clearError('email');
  clearError('password');
  clearError('confirmPassword');
  document.getElementById('terms-error').classList.add('hidden');

  // Full name
  if (!fullname) {
    showError('fullname', 'Please enter your full name.');
    isValid = false;
  } else if (fullname.length < 2) {
    showError('fullname', 'Name must be at least 2 characters.');
    isValid = false;
  }

  // Email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    showError('email', 'Please enter your email address.');
    isValid = false;
  } else if (!emailRegex.test(email)) {
    showError('email', 'Please enter a valid email (e.g. john@example.com).');
    isValid = false;
  }

  // Password
  if (!password) {
    showError('password', 'Please enter a password.');
    isValid = false;
  } else if (password.length < 8) {
    showError('password', 'Password must be at least 8 characters.');
    isValid = false;
  }

  // Confirm Password
  if (!confirm) {
    showError('confirmPassword', 'Please confirm your password.');
    isValid = false;
  } else if (confirm !== password) {
    showError('confirmPassword', 'Passwords do not match.');
    isValid = false;
  }

  // Terms
  if (!terms) {
    document.getElementById('terms-error').textContent =
      'You must agree to the terms to continue.';
    document.getElementById('terms-error').classList.remove('hidden');
    isValid = false;
  }

  return isValid;
}

// ── Form Submit ─────────────────────────────────────────────
document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  if (validateForm()) {
    var btn = document.getElementById('submitBtn');
    btn.textContent = 'Creating account...';
    btn.disabled = true;
    btn.classList.add('opacity-70', 'cursor-not-allowed');

    // Simulate delay
    setTimeout(function() {

      // ✅ Store user data in localStorage
      var userData = {
        fullname: document.getElementById('fullname').value.trim(),
        email: document.getElementById('email').value.trim(),
        password: document.getElementById('password').value
      };

      localStorage.setItem('user', JSON.stringify(userData));

      // Show success message
      document.getElementById('successMsg').classList.remove('hidden');

      // Redirect
      setTimeout(function() {
        window.location.href = 'login.html';
      }, 2000);

    }, 1200);

  } else {
    // Shake animation
    var card = document.getElementById('formCard');
    card.classList.add('shake');
    setTimeout(function() {
      card.classList.remove('shake');
    }, 400);
  }
});

// ── Live: clear errors as user types ───────────────────────
['fullname', 'email', 'password', 'confirmPassword'].forEach(function(id) {
  document.getElementById(id).addEventListener('input', function() {
    clearError(id);
  });
});