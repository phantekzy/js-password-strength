// ==========================
// Variables
// ==========================
const pass = document.getElementById('password');
const msg  = document.getElementById('msg');
const btn  = document.getElementById('btn');

// ==========================
// Events
// ==========================

// Listen for input in password field
pass.addEventListener('input', () => {
  const val = pass.value;

  // Show message only if user typed something
  msg.style.display = val.length > 0 ? "block" : "none";

  // ==========================
  // Password strength checks
  // ==========================
  let score = 0;
  if (/[a-z]/.test(val)) score++;       // lowercase
  if (/[A-Z]/.test(val)) score++;       // uppercase
  if (/[0-9]/.test(val)) score++;       // number
  if (/[^A-Za-z0-9]/.test(val)) score++; // special character
  if (val.length > 6) score++;          // length > 6

  // ==========================
  // Decide strength level
  // ==========================
  if (score <= 2) {
    msg.innerHTML = "Password is weak";
    msg.style.color = "red";
    pass.style.borderColor = "red";
    btn.style.borderColor = "red";

  } else if (score >= 3 && score <= 4) {
    msg.innerHTML = "Password is medium";
    msg.style.color = "orange";
    pass.style.borderColor = "orange";
    btn.style.borderColor = "orange";

  } else {
    msg.innerHTML = "Password is strong";
    msg.style.color = "green";
    pass.style.borderColor = "green";
    btn.style.borderColor = "green";
  }
});

