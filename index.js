'use strict';

function changeImg(src, alt) {
  $('.hero > img')
    .attr('src', src)
    .attr('alt', alt);
}

$(function() {
  $('a').on('click', function(event) {
    let imgElement = $(this).find('input');
    console.log(imgElement.src, $(imgElement).prop('src'));
    changeImg(imgElement.attr('src'), imgElement.attr('alt'));
  });
});