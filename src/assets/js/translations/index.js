import languages from './translations'

const translate = (language) => {
  let selectedLanuage = languages[language];

  Object.keys(selectedLanuage).map(function (key, index) {
    let string = selectedLanuage[key];
    window.localStorage.language = language;
    document.querySelector('[localized="' + key + '"]').innerText = string;
  });
}

let selectedLanuage = window.localStorage.language ? window.localStorage.language : 'english';
translate(selectedLanuage);
document.querySelector('.footer__dropdown-button').textContent = selectedLanuage;

export default translate;
