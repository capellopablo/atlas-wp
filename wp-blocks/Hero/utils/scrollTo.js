export const calculateScrollTopAdjustment = () => {
	const app = document.querySelector('#app');

	// Get padding-top from #app
	const topHeight = app ? parseInt(window.getComputedStyle(app).paddingTop) : 0;

	return topHeight;
};

export const scrollTo = (el) => {
	if (el.closest('header') || el.closest('footer') || el.classList.contains('no-scroll')) {
		return;
	}

	if (el.getAttribute('href') !== '#') {
		return;
	}

	el.addEventListener('click', (e) => {
		e.preventDefault();

		const form = document.querySelector('.b-hero-v2 .r-lead-form');

		if (!form) {
			return;
		}

		const scrollTopAdjustment = calculateScrollTopAdjustment();

		const formTop = window.scrollY + form.getBoundingClientRect().top - scrollTopAdjustment;

		window.scrollTo({
			top: formTop,
			behavior: 'smooth',
		});

		const firstInput = form.querySelector('.c-input input:not([type="hidden"])');

		if (!firstInput) {
			return;
		}

		firstInput.focus({preventScroll: true});
	});
};
