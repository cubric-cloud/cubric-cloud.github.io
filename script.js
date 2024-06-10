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
  link.addEventListener('click', () => {
    alert('준비중입니다.');
  });
});

document.querySelectorAll('.mobile-menu-modal nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    alert('준비중입니다.');
  });
});

// 배경 이미지 페이드 인 애니메이션
const bgImage = document.querySelector('.bg-image');
const mainText = document.querySelector('main h1');

window.addEventListener('load', () => {
  bgImage.classList.add('fade-in');
  setTimeout(() => {
    mainText.classList.add('fade-in');
  }, 1000);
});
