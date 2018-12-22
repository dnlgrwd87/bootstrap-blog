// original source:
// https://webdesign.tutsplus.com/tutorials/how-to-lazy-load-embedded-youtube-videos--cms-26743

(function() {
  'use strict';

  var videos = document.querySelectorAll('.youtube');

  if (videos.length === 0) {
    return;
  }

  function loadVideo(video, videoId) {
    var iframe = document.createElement('iframe');

    iframe.classList.add('embed-responsive-item');
    iframe.setAttribute('width', '760');
    iframe.setAttribute('height', '570');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId + '?rel=0');

    video.innerHTML = '';
    video.appendChild(iframe);
  }

  function appendImg(vid, img) {
    vid.appendChild(img);
  }

  for (var i = 0, len = videos.length; i < len; i++) {
    var video = videos[i];
    var id = video.getAttribute('data-embed');

    if (!id) {
      return;
    }

    var image = new Image();
    image.src = 'https://img.youtube.com/vi/' + id + '/default.jpg';
    image.addEventListener('load', appendImg.bind(null, video, image));

    video.addEventListener('click', loadVideo.bind(null, video, id));
  }
})();
