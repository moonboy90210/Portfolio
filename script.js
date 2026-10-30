// ===========================================
// CAROUSEL
// The card at `current` is centred; neighbours sit behind it.
// ===========================================
const carousel = document.querySelector('.carousel');
const cards = [...document.querySelectorAll('.card')];
const dots = [...document.querySelectorAll('.dot')];
const total = cards.length;
let current = 1; // start on the middle card (The Developer)

function render() {
	cards.forEach((card, i) => {
		const diff = (i - current + total) % total;

		card.classList.remove('active', 'prev', 'next', 'hidden');
		if (diff === 0) card.classList.add('active');
		else if (diff === 1) card.classList.add('next');
		else if (diff === total - 1) card.classList.add('prev');
		else card.classList.add('hidden');

		// Keyboard users tab to the focused card only
		card.tabIndex = diff === 0 ? 0 : -1;
	});

	dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
}

function go(index) {
	current = (index + total) % total;
	render();
}

// Arrows
document.querySelector('.arrow-left').addEventListener('click', () => go(current - 1));
document.querySelector('.arrow-right').addEventListener('click', () => go(current + 1));

// Dots
dots.forEach((dot, i) => dot.addEventListener('click', () => go(i)));

// Clicking a side card brings it to the centre; clicking the centre card opens it
cards.forEach((card, i) => {
	card.addEventListener('click', (e) => {
		if (i !== current) {
			e.preventDefault();
			go(i);
		}
	});
});

// Keyboard arrows
document.addEventListener('keydown', (e) => {
	if (e.key === 'ArrowLeft') go(current - 1);
	if (e.key === 'ArrowRight') go(current + 1);
});

// Swipe on touch screens
let startX = 0;
carousel.addEventListener('touchstart', (e) => {
	startX = e.changedTouches[0].clientX;
}, { passive: true });

carousel.addEventListener('touchend', (e) => {
	const dx = e.changedTouches[0].clientX - startX;
	if (Math.abs(dx) > 50) go(dx < 0 ? current + 1 : current - 1);
}, { passive: true });

render();

// Let the cards fan out once the page has loaded
setTimeout(() => carousel.classList.add('ready'), 250);

// ===========================================
// FOOTER YEAR (never needs manual updating)
// ===========================================
document.getElementById('year').textContent = new Date().getFullYear();