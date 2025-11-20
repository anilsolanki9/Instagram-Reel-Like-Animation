let playBtn = document.querySelector('i.play');
let video = document.querySelector('video');
let videoContainer = document.querySelector('.video-container');
let container = document.querySelector('.container');
let overlay = document.querySelector('#overlay');
let isPlaying = false;
let audibleIcon = document.querySelector('i.audible');
let mutedIcon = document.querySelector('i.muted');
let followBtn = document.querySelector('.follow-btn');
let likeBtn = document.querySelector('.line-heart');
let dislikeBtn = document.querySelector('.filled-heart');


playBtn.addEventListener('click', function () {
  video.play();
  isPlaying = true;
  document.querySelector('.mid').style.opacity = '0';
  overlay.style.zIndex = 10;
});

overlay.addEventListener('click', function () {
  if (isPlaying) {
    document.querySelector('.mid').style.opacity = '1';
    video.pause();
    overlay.style.zIndex = -10;
    isPlaying = false;
  } else {
    document.querySelector('.mid').style.opacity = '0';
    video.play();
    isPlaying = true;
  }
});

audibleIcon.addEventListener('click', () => {
  overlay.style.zIndex = 10;
  audibleIcon.style.display = 'none';
  video.muted = true;
  mutedIcon.style.display = 'flex';
  video.play();
  document.querySelector('.mid').style.opacity = '0';
  isPlaying = true;
});

mutedIcon.addEventListener('click', () => {
  overlay.style.zIndex = 10;
  mutedIcon.style.display = 'none';
  video.muted = false;
  audibleIcon.style.display = 'flex';
  video.play();
  document.querySelector('.mid').style.opacity = '0';
  isPlaying = true;
});

followBtn.addEventListener('click', function () {
  if (followBtn.textContent === 'Following') {
    followBtn.textContent = 'Follow';
  } else {
    followBtn.textContent = 'Following';
  }
  followBtn.classList.toggle('follow');
});

likeBtn.addEventListener('click', function () {
  likeBtn.style.display = 'none';
  dislikeBtn.style.display = 'block';
});

dislikeBtn.addEventListener('click', function () {
  dislikeBtn.style.display = 'none';
  likeBtn.style.display = 'block';
});

