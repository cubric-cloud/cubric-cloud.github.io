// 모바일 메뉴 모달 토글
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenuModal = document.querySelector('.mobile-menu-modal');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuModal.style.display = 'block';
});

mobileMenuModal.addEventListener('click', (event) => {
  if (event.target === mobileMenuModal) {
    mobileMenuModal.style.display = 'none';
  }
});

// 모바일 메뉴 클릭 이벤트 핸들러
const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');

mobileMenuItems.forEach((item) => {
  item.addEventListener('click', () => {
    // 메뉴 항목 클릭 시 동작
    mobileMenuModal.style.display = 'none';
    // 추가적인 동작 수행 (예: 페이지 이동, 내용 변경 등)
  });
});
