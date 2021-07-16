/* headerScroll
 * 一定量スクロールでヘッダー固定
   ----------------------------------------------------------------- */
import { throttle } from 'throttle-debounce';

const headerScroll = () => {
  $(() => {
    let winScrollTop = window.scrollY || window.pageYOffset;
    let startPos = 190;
    const header = document.getElementById('header');
    const headerHeight = 80;

    // .is-scroll - スクロール検知した時に付与
    // .is-active - 上にスクロールしたときに付与

    const headerScroll = () => {
      winScrollTop = window.scrollY || window.pageYOffset;
      if (winScrollTop === 0) {
        startPos = 0;
      }
      console.log(startPos);
      if (winScrollTop >= headerHeight) {
        header.classList.add('is-scroll');

        if (winScrollTop < startPos) {
          header.classList.add('is-show');
        } else {
          header.classList.remove('is-show');
        }
        startPos = winScrollTop;
      } else {
        header.classList.remove('is-scroll');
        header.classList.remove('is-show');
      }
    };

    window.addEventListener('scroll', throttle(200, headerScroll));
  });
};

export default headerScroll();
