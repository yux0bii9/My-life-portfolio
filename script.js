// 01｜點擊左側選單，切換右側章節
const buttons = document.querySelectorAll('.menu-btn');
const pages = document.querySelectorAll('.page');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.dataset.page;
    buttons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      if (selected) item.setAttribute('aria-current', 'page');
      else item.removeAttribute('aria-current');
    });
    pages.forEach((page) => {
      const selected = page.id === targetId;
      page.hidden = !selected;
      page.classList.toggle('active', selected);
    });
    document.querySelector('.content-panel').scrollTop = 0;
  });
});

/* ========================================
   LIFE QUESTS - 人生故事照片輪播
======================================== */

document.querySelectorAll(".memory-gallery").forEach((gallery) => {

    // 取得這個相簿的所有照片路徑
    const photos = gallery.dataset.photos
        .split(",")
        .map(name => "image/" + name.trim());

    // 記錄目前顯示第幾張照片
    let currentIndex = 0;

    // 取得相簿內的 HTML 元素
    const image = gallery.querySelector(".memory-photo");
    const counter = gallery.querySelector(".gallery-counter");
    const prevBtn = gallery.querySelector(".prev");
    const nextBtn = gallery.querySelector(".next");

    // 更新照片及張數
    function updateGallery() {
        image.src = photos[currentIndex];
        counter.textContent = `${currentIndex + 1} / ${photos.length}`;
    }

    // 下一張照片
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % photos.length;
        updateGallery();
    });

    // 上一張照片
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
        updateGallery();
    });

    // 初始化相簿
    updateGallery();

});
