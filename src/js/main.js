import headerScroll from './modules/headerScroll';

$(() => {
  // ドロワーメニューの開閉
  $('.js-drawer').on('click', function () {
    $('.c-menu-icon').toggleClass('is-open');
    $('#header').toggleClass('is-open');
  });
  // sp時お問合せフォームポップアップの開閉
  $('#inquiry-popup-button').on('click', function () {
    $('#inquiry-popup').addClass('is-open');
  });

  $('#inpuiry-popup-close').on('click', function () {
    $('#inquiry-popup').removeClass('is-open');
  });

  // formの高さがwindowの高さよりも大きいとき、display:blockに
  const windowHeight = window.innerHeight;
  const formHeight = $('#inquiry-form').height();
  if (windowHeight < formHeight) {
    $('#inquiry-popup').css('display', 'block');
  }
});

export default {
  headerScroll
};
