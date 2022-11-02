const appHeight = () => {
	const doc = document.documentElement;
	doc.style.setProperty('--app-height', `${window.innerHeight}px`);
}

window.addEventListener('load', function () {
	appHeight();

	VANTA.TOPOLOGY({
		el: ".page-canvas",
		mouseControls: false,
		touchControls: false,
		gyroControls: false,
		minHeight: 200.00,
		minWidth: 200.00,
		scale: 1.00,
		scaleMobile: 1.00,
		color: 0xddc086,
		backgroundColor: 0xffffff
	});

	document.querySelector('html').classList.add('loaded');
});

let prevW = window.innerWidth;

window.addEventListener('resize', function () {
	appHeight();
});
