document.addEventListener('DOMContentLoaded', () => {
  const circles = document.querySelectorAll('.progress-circle');
  circles.forEach(circle => {
    const percentage = circle.getAttribute('data-percentage');
    const radius = 15.9155;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    const meter = circle.querySelector('.meter');
    meter.style.strokeDasharray = `${circumference} ${circumference}`;
    meter.style.strokeDashoffset = offset;
  });
});
