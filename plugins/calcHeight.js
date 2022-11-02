const appHeight = () => {
	const doc = document.documentElement;
	doc.style.setProperty('--app-height', `${window.innerHeight}px`);

	VANTA.TOPOLOGY({
		el: ".page-canvas",
		mouseControls: true,
		touchControls: true,
		gyroControls: false,
		minHeight: 200.00,
		minWidth: 200.00,
		scale: 1.00,
		scaleMobile: 1.00,
		color: 0xddc086,
		backgroundColor: 0xffffff
	})
}

window.addEventListener('load', appHeight);
window.addEventListener('resize', appHeight);
