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

// 배경 이미지 페이드 인 애니메이션
const bgImage = document.querySelector('.bg-image');
const mainText = document.querySelector('.main-content h1');
const hiddenText = document.querySelector('.hidden-text');

window.addEventListener('load', () => {
  bgImage.classList.add('fade-in');
  setTimeout(() => {
    mainText.classList.add('fade-in');
  }, 1000);

  mainText.addEventListener('animationend', () => {
    hiddenText.classList.add('visible');
  });
});

// 메뉴 클릭시 준비중입니다 알림
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    alert('준비중입니다.');
  });
});
