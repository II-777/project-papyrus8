const supportArray = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    svg:'#icon-charity1',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    svg:'#icon-charity2',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    svg:'#icon-charity4',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    svg:'#icon-charity6',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    svg:'#icon-charity7',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    svg:'#icon-charity9',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    svg:'#icon-charity3',
  },
  {
    title: 'Medecins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    svg:'#icon-charity5',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    svg:'#icon-charity8',
  },
  
];

import icon from '../images/icon.svg'

const supportList = document.querySelector('.js-support');
const markup = createImageCardMarkup(supportArray);

supportList.insertAdjacentHTML('beforeend', markup);
supportList.addEventListener('click', onClick);

function createImageCardMarkup(supportArray) {
    return supportArray.map(({url, svg},ind) => { 
   let num = String(ind + 1).padStart(2,'0');
    return `<li class="support-link js-support">
        <a class="js-target" href="${url}" target="_blank">
          <span class="support-number">${num}
          <svg class="support-img" width="129px" height="32px"><use href="${icon}${svg}"></use></svg></span>
        </a>
      </li>`   
      
  }).join('');
}

function onClick(evt) {
  if (!evt.target.classList.contains("js-support")) {
    return;
  }
}

const sliderButton = document.querySelector('.slider-button');
let currentIndex = 0;
const slideHeight = supportList.querySelector('.js-support').offsetHeight;
const slidesToShow = 6;

sliderButton.addEventListener('click', () => {
  const maxIndex = supportList.children.length - 1;
  if (currentIndex < maxIndex) {
    currentIndex++;
    if (currentIndex > maxIndex - slidesToShow) {
      supportList.style.transform = `translateY(-${slideHeight * (maxIndex - slidesToShow)}px)`;
    } else {
      supportList.style.transform = `translateY(-${slideHeight * currentIndex}px)`;
    }
  }
});










