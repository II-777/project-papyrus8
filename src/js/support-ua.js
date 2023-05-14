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


import icon from '../images/icon.svg';
// import {saveTheChildren} from '../images/support-ua/save-the-children.png';
const saveTheChildren = require('../images/support-ua/save-the-children.png');

const supportList = document.querySelector('.js-support');
const markup = createImageCardMarkup(supportArray);

supportList.insertAdjacentHTML('beforeend', markup);
supportList.addEventListener('click', onClick);

function createImageCardMarkup(supportArray) {

  // const saveTheChildren = require('../images/support-ua/save-the-children.png');

  return supportArray
    .map(({ url }) => {
      return `<li class="js-support">
        <a class="js-target" href="${url}" target="_blank">
          <span class="support-number">${num}
          <svg class="support-img" width="129px" height="32px"><use href="${icon}${svg}"></use></svg></span>
        </a>
      </li>`;
    })
    .join('');
}

function onClick(evt) {
  if (!evt.target.classList.contains('js-support')) {
    return;
  }
}
