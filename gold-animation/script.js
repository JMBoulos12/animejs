var body = $('body');
var svgWrap = $('.svg-wrap');
var btnReplay = $('#btnReplay');
var starburst, tilt, lineMaker;
var animationTimeline = anime.timeline({
 begin: function() {
  buildLinemaker();
  lineMaker.animateLinesIn();
 },
 complete: animateBody
});

function buildStarburst() {
 starburst = new mojs.Burst({
  radius: { 0: 400 },
  count: 35,
  children: {
    shape: 'circle',
    points: 5,
    fill: { '#F5C21B' : '#D17000' },
    angle: { 360: 0 },
    radius: 10,
    duration: 1000,
    delay: 'stagger( rand(0, 100) )'
  }
 });
}

function buildLinemaker() {
 lineMaker = new LineMaker({
        position: 'fixed',
        lines: [
          {top: '15%', left: 0, width: '100%', height: 2, color: '#ddd', hidden: true},
          {top: '85%', left: 0, width: '100%', height: 2, color: '#ddd', hidden: true},
          {top: 0, left: '90%', width: 2, height: '100%', color: '#ddd', hidden: true},
          {top: 0, left: '10%', width: 2, height: '100%', color: '#ddd', hidden: true},
          {top: '15%', left: 0, width: '100%', height: 2, color: '#000', hidden: true, animation: { duration: 1000, easing: 'easeInOutExpo', delay: 0, direction: 'LeftRight' }},
          {top: '85%', left: 0, width: '100%', height: 2, color: '#000', hidden: true, animation: { duration: 1000, easing: 'easeInOutExpo', delay: 100, direction: 'RightLeft' }},
          {top: 0, left: '90%', width: 2, height: '100%', color: '#000', hidden: true, animation: { duration: 1000, easing: 'easeInOutExpo', delay: 200, direction: 'BottomTop' }},
          {top: 0, left: '10%', width: 2, height: '100%', color: '#000', hidden: true, animation: { duration: 1000, easing: 'easeInOutExpo', delay: 300, direction: 'TopBottom' }}
        ]
 });
}

function animateBody() {
 body.addClass('animation-complete');
 buildStarburst();
 starburst.replay();
 enableTilt();
}

animationTimeline
 .add({
  targets: '.element-border',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutCubic',
  opacity: 1,
  duration: 1400,
  direction: 'alternate',
 })
 .add({
  duration: 800,
  targets: '#au-element .element-name',
  easing: 'easeInOutCubic',
  scale: .7,
  opacity: 1,
  translateY: -50
 });

btnReplay.on('click', function() {
 tilt.tilt.destroy.call(tilt);
 lineMaker.removeLines();
 starburst.el.remove();
 body.removeClass('animation-complete');
 
