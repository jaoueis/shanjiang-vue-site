const appHeight = () => {
	const doc = document.documentElement;

	doc.style.setProperty('--app-height', `${window.innerHeight}px`);
}

window.addEventListener('load', appHeight);
window.addEventListener('resize', appHeight);