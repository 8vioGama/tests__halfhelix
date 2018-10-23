import translate from './translations/index'

let dropdownButton = document.querySelector('.footer__dropdown-button');
let dropdownItems = Array.from(document.querySelectorAll('.footer__dropdown-item'));

dropdownItems.map(element => {
  element.addEventListener('click', (event) => {
    let target = event.target;
    let currentLanguage = dropdownButton.textContent;
    let language = target.getAttribute('value');
    let value = target.text;

    if (currentLanguage === value) {
      return;
    }
    translate(language);
    dropdownButton.textContent = language;
  })
})
