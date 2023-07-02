
var merciAnimation = anime.timeline({
	loop: true 
});



merciAnimation.add([
	{ 	// merci go fram left
		targets: "#merci",
		scale: [1, 1],
		opacity: [1, 1],
		translateX: ['-2000px', 0],
		delay: 500,
		duration: 400,
		easing: [0.000, 0.805, 0.625, 1.05],
	},	
	{ 	// round init 
		targets: "#round",
		opacity: ['0', '0'],
		translateY: ['12vh', '12vh'],
		translateX: ['-2vh', '-2vh'],
		scale: ['0.8', '0.8'],
		duration: 1,
		offset: '-=100',
		easing: "easeInOutBack",
	},		
	{ 	// flash fall
		targets: "#flash",
		translateY: ['-200vh', 0],
		duration: 1100,
		easing: "easeInCirc",
	},
	{ 	// flash viber
		targets: "#flash",
		rotate: ['-4deg', 0],
		duration: 1550,
		elasticity: 100000,
	},

	{ 	// round up
		targets: "#round",
		offset: '-=300',
		opacity: ['1', '1'],
		translateY: ['4vh', '-1vh'],
		translateX: ['-1vh', 0],
		scale: [1, 1],
		offset: '-=500',
		duration: 500,
		easing: [0, 0.01, 0, 8],
		elasticity: 100000,
	},
	{ 	// all growing
		targets: "#merciGroup",
		scale: [1, 5],
		opacity: [1, 0],
		delay: 800,
		duration: 200,
		easing: "easeInOutQuint",
		easing: [0.315, -0.475, 0.990, 1.005],
	},
	{ 	// loop delay
		targets: "#merciGroup",
		scale: 5,
		opacity: 0,
		duration: 700,
	},
]);

