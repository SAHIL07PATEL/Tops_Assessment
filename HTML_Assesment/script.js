document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.querySelector('input[name="name"]').value;
  const mobile = document.querySelector('input[name="mobile"]').value;

  // Name validation
  if (name.length < 3 || name.length > 6 || !/^[a-zA-Z]+$/.test(name)) {
      alert('Name must be between 3 and 6 letters and contain only alphabets.');
      return;
  }

  // Mobile validation
  if (!/^\d{10}$/.test(mobile)) {
      alert('Mobile number must be 10 digits.');
      return;
  }

  // submit the form
  alert('Form submitted successfully!');
});
