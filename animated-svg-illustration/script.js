/* babel.js */

var planesCard = anime.timeline({
    direction: 'forwards',
    loop: true
});

planesCard
    .add({
        targets: '#card2 .card_text',
        scaleX: [0, 1],
        delay: function(target, index) {
            return index * 300;
        },
        easing: [0.17, 0.17, 0.35, 1.00],
        duration: 300,
        offset: 0
    })
    .add({
        targets: '#plane1',
        opacity: {
            value: [0, 1],
            duration: 100,
            delay: 84
        },
        translateX: {
            value: ['-199','+888']
        },
        translateY: {
            value: ['-36','+404']
        },
        rotate: {
            value: -12,
        },
        scale: {
            value: 0,
            duration: 200,
            delay: 300
        },
        easing: [0.17, 0.17, 0.79, 1.00],
        duration: 541,
        offset: 250
    })
    .add({
        targets: '#card1',
        opacity: 0,
        loop: true,
        easing: [0.68, 0.00, 0.33, 1.00],
        duration: 750,
        offset: 708
    })
    .add({
        targets: '#card3_bg-white',
        easing: [0.17, 0.11, 0.40, 1.26],
        duration: 666,
        offset: 625,
        scale: [0, 1]
    })
    .add({
        targets: '#cards',
        easing: [0.68, 0.00, 0.33, 1.00],
        duration: 750,
        offset: 708,
        translateY: ['-=257']
    })
    .add({
        targets: '#card3_icon',
        translateX: ['+=35', 0],
        translateY: ['+=35', 0],
        scale: [0, 1],
        loop: true,
        easing: [0.41, 1.9, 0.59, 0.94],
        duration: 708,
        offset: 780
    })
    .add({
        targets: '#card3 .card_text',
        scaleX: [0, 1],
        delay: function(target, index) {
            return index * 300;
        },
        easing: [0.17, 0.17, 0.35, 1.00],
        duration: 300,
        offset: 989
    })
    .add({
        targets: '#plane2',
        opacity: {
            value: [0, 1],
            duration: 167,
            delay: 84
        },
        scaleX: {
            value: -1,
            duration: 0
        },
        translateX: {
            value: [-1620, -180]
        },
        translateY: {
            value: [-78,320]
        },
        rotate: {
            value: -12,
            duration: 500,
            delay: 100,
        },
        scale: {
            value: 0,
            duration: 250,
            delay: 285
        },
        easing: [0.17, 0.17, 0.79, 1.00],
        duration: 600,
        offset: 1380
    })
    .add({
        targets: '#card2',
        opacity: 0,
        loop: true,
        easing: [0.68, 0.00, 0.33, 1.00],
        duration: 750,
        offset: 1875
    })
    .add({
        targets: '#card4_bg-white',
        easing: [0.17, 0.11, 0.40, 1.26],
        duration: 666,
        offset: 1793,
        scale: [0, 1]
    })
    .add({
        targets: '#cards',
        easing: [0.68, 0.00, 0.33, 1.00],
        duration: 750,
        offset: 1875,
        translateY: ['-=257']
    })
    .add({
        targets: '#card4_icon',
        translateX: ['+=35', 0],
        translateY: ['+=35', 0],
        scale: [0, 1],
        loop: true,
        easing: [0.41, 1.9, 0.59, 0.94],
        duration: 708,
        offset: 1957
    });
