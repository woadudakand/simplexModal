/*
	Name:  ATModal
	Version: 1.0
	Author: AazzTech
	Author URI: http://aazztech.com
*/

const aazztechModal = (selector) => {
	const element = document.querySelectorAll(selector);
	element.forEach(function (el, index) {
		el.style.display = 'none';

		const item = document.querySelectorAll(`*[data-target="${el.getAttribute('id')}"]`);
		item.forEach(function (clickitem, index) {
			clickitem.style.cursor = 'pointer';
			clickitem.addEventListener('click', (e) => {
				e.preventDefault();
				el.style.display = 'block';
				setTimeout(function () {
					el.classList.add("atm-show");
				}, 100)

			});
		});

		el.querySelector('a.at-modal-close').addEventListener('click', (e) => {
			e.preventDefault();
			el.classList.remove("atm-show");
			setTimeout(function () {
				el.style.display = 'none';
			}, 100)
		});
		el.addEventListener('click', function (e) {
			if (e.target.closest('.at-modal-content'))
				return;
			el.classList.remove("atm-show");
			setTimeout(function () {
				el.style.display = 'none';
			}, 100)
		})

	});

}