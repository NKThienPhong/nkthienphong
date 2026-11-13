const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const GOOGLE_SHEETS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbz6x3tjToWyreXWMXpswhKBb-NSubxRC0nnwEiAwWDEXWgcqLz1rNaYwn5hZgh2j4-w/exec';
const form = document.querySelector('.contact-form');

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!GOOGLE_SHEETS_ENDPOINT) {
      alert('Form chưa được cấu hình. Vui lòng liên hệ quản trị viên.');
      return;
    }

    const button = form.querySelector('button[type="submit"]');
    const originalButtonText = button.innerHTML;
    const formData = new FormData(form);

    button.disabled = true;
    button.textContent = 'Đang gửi...';

    try {
      await fetch(GOOGLE_SHEETS_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
          name: formData.get('name'),
          phone: formData.get('phone'),
          email: formData.get('email'),
          message: formData.get('message')
        })
      });

      alert('Cảm ơn bạn! Thiên Phong đã nhận được thông tin và sẽ liên hệ sớm.');
      form.reset();
    } catch (error) {
      alert('Có lỗi xảy ra, vui lòng gọi trực tiếp hotline 0945 948 894.');
      console.error('Không thể gửi form tư vấn:', error);
    } finally {
      button.disabled = false;
      button.innerHTML = originalButtonText;
    }
  });
}

const filters = document.querySelectorAll('.filter');
const portfolioItems = document.querySelectorAll('.portfolio-item');
filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    filter.classList.add('active');
    const selected = filter.dataset.filter;
    portfolioItems.forEach((item) => {
      item.hidden = selected !== 'all' && item.dataset.category !== selected;
    });
  });
});
