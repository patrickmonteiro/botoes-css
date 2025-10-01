document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggle-btn');
  const statusText = document.getElementById('status-text');
  const asyncBtn = document.getElementById('async-btn');

  // Update status text when toggle changes
  toggleBtn.addEventListener('change', function () {
    if (this.checked) {
      statusText.textContent = 'ON';
      statusText.style.color = '#4ecdc4';
    } else {
      statusText.textContent = 'OFF';
      statusText.style.color = '#ff6b6b';
    }
  });

  // Add click animation
  toggleBtn.addEventListener('click', function () {
    const slider = document.querySelector('.slider');
    slider.style.transform = 'scale(0.95)';

    setTimeout(() => {
      slider.style.transform = '';
    }, 150);
  });

  // Async button behavior
  if (asyncBtn) {
    asyncBtn.addEventListener('click', function () {
      if (asyncBtn.classList.contains('is-loading')) return;

      asyncBtn.classList.add('is-loading');

      // Simulate async task
      setTimeout(() => {
        asyncBtn.classList.remove('is-loading');
      }, 2000);
    });
  }
});
