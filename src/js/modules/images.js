const images = () => {
	const body = document.querySelector('body'),
				imgPopup = document.createElement('div'),
				workSection = document.querySelector('.works'),
				bigImage = document.createElement('img');

	imgPopup.classList.add('popup');
	workSection.appendChild(imgPopup);

	imgPopup.style.justifyContent = 'center';
	imgPopup.style.alignItems = 'center';
	imgPopup.style.display = 'none';

	imgPopup.style.backgroundColor = '#000000c7';

	bigImage.style.width = '60%'
	bigImage.style.height = '80%'

	imgPopup.appendChild(bigImage);

	workSection.addEventListener('click', (e) => {
			e.preventDefault();

			let target = e.target;

			if (target && target.classList.contains('preview')) {
					imgPopup.style.display = 'flex';
					body.style.overflow = 'hidden';
					const path = target.parentNode.getAttribute('href');
					bigImage.setAttribute('src', path);
			}

			if (target && target.matches('div.popup')) {
					imgPopup.style.display = 'none';
					body.style.overflow = '';
			}
	});
};

export default images;