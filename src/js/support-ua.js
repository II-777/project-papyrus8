const supportArray = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: '../images/support-ua/save-the-children.png',
    img2x: '../images/support-ua/save-the-children2x.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: '../images/support-ua/project-hope.png',
    img2x: '../images/support-ua/project-hope2x.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: '../images/support-ua/united24.png',
    img2x: '../images/support-ua/united24-2x.png',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: '../images/support-ua/international-medical-corps.png',
    img2x: '../images/support-ua/international-medical-corps2x.png',
  },
  {
    title: 'Medecins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: '../images/support-ua/medecins-sans-frontieres.png',
    img2x: '../images/support-ua/medecins-sans-frontieres2x.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: '../images/support-ua/razom.png',
    img2x: '../images/support-ua/razom2x.png',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: '../images/support-ua/action-against-hunger.png',
    img2x: '../images/support-ua/action-against-hunger2x.png',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: '../images/support-ua/world-vision.png',
    img2x: '../images/support-ua/world-vision2x.png',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: '../images/support-ua/serhiy-prytula.png',
    img2x: '../images/support-ua/serhiy-prytula2x.png',
  },
];

const supportList = document.querySelector('.js-support');
const markup = createImageCardMarkup(supportArray);

supportList.insertAdjacentHTML('beforeend', markup);
supportList.addEventListener('click', onClick);

function createImageCardMarkup(supportArray) {
  return supportArray.map(({ img, url, title }) => { 
    return `<ul class="support-list js-support">
      <li>
        <a class="js-target" href="${url}">
          <span class="support-number">01</span>
          <img class="support-img" src="${img}" alt="${title}" height="32px" />
        </a>
      </li>
    </ul>`;
  }).join('');
}




function onClick(evt) {
  if (!evt.target.classList.contains("js-support")) {
    return;
  }
}





// const sliderImages = new Swiper('.slider__images .swiper-container', { // ищем слайдер превью по селектору
// 	// задаем параметры
// 	direction: 'vertical', // вертикальная прокрутка
// 	slidesPerView: 1, // показывать по 1 изображению
// 	spaceBetween: 32, // расстояние между слайдами
// 	mousewheel: true, // можно прокручивать изображения колёсиком мыши
// 	navigation: { // задаем кнопки навигации
// 		nextEl: '.slider__next', // кнопка Next
// 		prevEl: '.slider__prev' // кнопка Prev
// 	},
// 	grabCursor: true, // менять иконку курсора
// 	thumbs: { // указываем на превью слайдер
// 		swiper: sliderThumbs // указываем имя превью слайдера
// 	},
// 	breakpoints: { // условия для разных размеров окна браузера
// 		0: { // при 0px и выше
// 			direction: 'horizontal', // горизонтальная прокрутка
// 		},
// 		768: { // при 768px и выше
// 			direction: 'vertical', // вертикальная прокрутка
// 		}
// 	}
// });