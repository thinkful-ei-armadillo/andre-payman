/* global $ */

'use strict';

function changeImg(src, alt) {
  $('.hero > img')
    .attr('src', src)
    .attr('alt', alt);
}

$(function() {
  $('.thumbnail').on('click', function(event) {
    let imgElement = $(this).find('img');
    changeImg(imgElement.attr('src'), imgElement.attr('alt'));
  });
});