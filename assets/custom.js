document.addEventListener('DOMContentLoaded', function() {
  // Make home button clickable
  document.body.addEventListener('click', function(e) {
    // Check if click is in the top-left area where the home icon button is
    if (e.clientX < 120 && e.clientY < 80) {
      window.location.href = '/';
    }
  });
});
