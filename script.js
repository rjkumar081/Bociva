// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if(btn && menu){
    btn.addEventListener('click', () => {
      const isShown = menu.classList.toggle('show');
      menu.setAttribute('aria-hidden', String(!isShown));
    });
  }

  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      setTimeout(() => {
        alert('Thank you! We received your request. We will contact you shortly.');
        form.reset();
      }, 400);
    });
  }

  const copy = document.querySelector('.copyright');
  if(copy){
    copy.textContent = `© ${new Date().getFullYear()} MeraPopi Digital Seva Center. All rights reserved.`;
  }
});