/* babel.js */

let svgPath = document.querySelectorAll('g');

svgPath = Array.from(svgPath).map(item => item.children)

var myAudio = new Audio("https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-31172/zapsplat_office_chalk_stick_thick_write_slowly_on_small_chalk_board_34620.mp3?_=6");


const svgText = anime({
  targets: svgPath,
  direction: 'normal',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 700,
  delay: (el, i, arr) => { i >= 1  && i < 20 && console.log(arr, el.style.stroke= "white"); return i * 500 },
  update: () => {myAudio.play();},
  complete: () => {myAudio.pause()},
  loop: true

});
