document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggle-btn');
  const statusText = document.getElementById('status-text');

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
});
