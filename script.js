// 모바일 메뉴 모달 토글
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenuModal = document.querySelector('.mobile-menu-modal');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuModal.style.display = 'flex';
});

mobileMenuModal.addEventListener('click', (event) => {
  if (event.target === mobileMenuModal) {
    mobileMenuModal.style.display = 'none';
  }
});

document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    alert('준비중입니다.');
  });
});

document.querySelectorAll('.mobile-menu-modal nav ul li a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    alert('준비중입니다.');
  });
});

// 배경 이미지 롤링
const bgImage = document.querySelector('.bg-image');
const bgImages = ['background1.png', 'background2.png', 'background3.png'];
let currentImageIndex = 0;

setInterval(() => {
  currentImageIndex = (currentImageIndex + 1) % bgImages.length;
  bgImage.style.backgroundImage = `url('${bgImages[currentImageIndex]}')`;
}, 5000);
