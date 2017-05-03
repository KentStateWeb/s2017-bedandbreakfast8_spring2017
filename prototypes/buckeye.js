$(document).ready(function() {
  $('body').addClass('js');
  var $menu = $('#menu'),
    $menulink = $('.menu-link');

$menulink.click(function() {
  $menulink.toggleClass('active');
  $menu.toggleClass('active');
  return false;
});});
/* Requires JQuery */

var modal = $('.modal');

$( ".btn" ).on( "click", function() {
  $( modal ).toggleClass('modal--show');
});

$( ".overlay" ).on( "click", function() {
  $( modal ).toggleClass('modal--show');
});

$( ".modal__close" ).on( "click", function() {
  $( modal ).toggleClass('modal--show');
});
