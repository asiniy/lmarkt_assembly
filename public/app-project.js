$(document).ready(function () {
  // Catalog show/hide
  function navShowHideDesktop(element) {
    $(element).on('click', function () {
      $(this).toggleClass('header__btn--active')
      $(this).toggleClass('nav__title--active');
      $('.nav').toggleClass('nav--active');
      $('.header__overlay').toggleClass('header__overlay--active');
    });
    $('.header__overlay').on('click', function () {
      $('.header__btn').removeClass('header__btn--active')
      $('.nav').removeClass('nav--active');
      $(this).removeClass('header__overlay--active');
    });
  }
  navShowHideDesktop('.header__btn');

  // Profile show/hide
  function profileShowHideDesktop(element) {
    $(element).on('click', function () {
      $(this).closest('.header__profile-wrapper').toggleClass('header__profile-wrapper--active');
      $('.header__overlay').toggleClass('header__overlay--active');
    });
    $('.header__overlay').on('click', function () {
      $('.header__profile-wrapper').removeClass('header__profile-wrapper--active');
      $('.header__overlay').removeClass('header__overlay--active');
    });
  }
  profileShowHideDesktop('.header__add-nav-item--profile');

  // Sign in
  function maskPhone () {
    $.mask.definitions['~'] = '[9]';
    $('.sign-in__form-input--phone').mask('+7 (~99) 999-99-99', {
      autoclear: false
    });
  }
  maskPhone();

  // Footer
  function showHideFooterNav () {
    $('.footer__nav-title-mobile').on('click', function () {
      $(this).closest('.footer__nav-group-mobile').toggleClass('footer__nav-group-mobile--active');
    });
  }
  showHideFooterNav();

  // Cover slider
  function initSliderCover () {
    let $coverSlider = $('.cover__slider');

    $coverSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    });
    $('.cover__nav-item--prev').on('click', function () {
      $coverSlider.slick('slickPrev');
    });
    $('.cover__nav-item--next').on('click', function () {
      $coverSlider.slick('slickNext');
    });
  }
  initSliderCover();

  // Popular categories slider
  function initSliderPopCategories() {
    let $popularCategoriesSlider = $('.popular-categories__slider');

    $popularCategoriesSlider.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    });
    $('.popular-categories__nav-item--prev').on('click', function () {
      $popularCategoriesSlider.slick('slickPrev');
    });
    $('.popular-categories__nav-item--next').on('click', function () {
      $popularCategoriesSlider.slick('slickNext');
    });
  }
  initSliderPopCategories();

  // Popular products slider
  function initSliderPopProducts() {
    let $popularProductsSlider = $('.popular-products__slider');

    $popularProductsSlider.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    });
    $('.popular-products__nav-item--prev').on('click', function () {
      $popularProductsSlider.slick('slickPrev');
    });
    $('.popular-products__nav-item--next').on('click', function () {
      $popularProductsSlider.slick('slickNext');
    });
  }
  initSliderPopProducts();

  // Tools by type slider
  function initSliderToolsByType() {
    let $toolsByTypeSlider = $('.tools-by-type__slider');

    $toolsByTypeSlider.slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    });
    $('.tools-by-type__nav-item--prev').on('click', function () {
      $toolsByTypeSlider.slick('slickPrev');
    });
    $('.tools-by-type__nav-item--next').on('click', function () {
      $toolsByTypeSlider.slick('slickNext');
    });
  }
  initSliderToolsByType();
});
