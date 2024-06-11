// 모바일 메뉴 모달 토글
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenuModal = document.querySelector('.mobile-menu-modal');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuModal.style.display = mobileMenuModal.style.display === 'flex' ? 'none' : 'flex';
});

mobileMenuModal.addEventListener('click', (event) => {
  if (event.target === mobileMenuModal) {
    mobileMenuModal.style.display = 'none';
  }
});

// 배경 이미지 페이드 인 애니메이션
const bgImage = document.querySelector('.bg-image');
const mainText = document.querySelector('.coming-soon');
const hiddenText = document.querySelector('.hidden-text');

window.addEventListener('load', () => {
  bgImage.classList.add('fade-in');
  setTimeout(() => {
    mainText.classList.add('fade-in');
    setTimeout(() => {
      hiddenText.classList.add('visible');
    }, 2000);
  }, 1000);
});

// 메뉴 클릭 시 준비중입니다 팝업
const menuLinks = document.querySelectorAll('nav ul li a, .mobile-menu-modal nav ul li a');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');

menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    popup.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});

// 페이지 로드 시 모바일 메뉴 모달이 열리지 않도록 수정
window.addEventListener('DOMContentLoaded', () => {
  mobileMenuModal.style.display = 'none';
});
