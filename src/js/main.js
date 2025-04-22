const dropdownButton = document.querySelector('.header-language-btn');
const dropdownContent = document.querySelector('.header-language-list');
const selectedLanguage = document.querySelector('.selected-language');
const arrowSVG = document.querySelector(".header-language-btn svg use"); 


dropdownButton.addEventListener('click', (event) => {
  event.stopPropagation(); 
  const isMenuOpen = dropdownContent.style.display === 'block';
  arrowSVG.setAttribute(
    "href",
    isMenuOpen ? "./public/svg/icons.svg#icon-arrow-down" : "./public/svg/icons.svg#icon-arrow-up"
  );
  isMenuOpen ? selectedLanguage.style.color = '#919192' : selectedLanguage.style.color = '#e9e9e9';
  dropdownContent.style.display = isMenuOpen ? 'none' : 'block';
});


dropdownContent.addEventListener('click', (event) => {
  event.stopPropagation(); 
  const li = event.target.closest('li');
  if (li) {
    const languageCode = li.getAttribute('data-lang');
    selectedLanguage.textContent = languageCode;
    dropdownContent.style.display = 'none';
    selectedLanguage.style.color = '#919192';
    arrowSVG.setAttribute("href", "./public/svg/icons.svg#icon-arrow-down");
  }
});


document.addEventListener('click', () => {
  dropdownContent.style.display = 'none';
  arrowSVG.setAttribute("href", "./public/svg/icons.svg#icon-arrow-down");
  selectedLanguage.style.color = '#919192'; 
});


//Бургер меню
const burgerInput = document.querySelector('.burger-input');
const modal = document.querySelector('.modal');
const menuItems = document.querySelectorAll('.modal-item');

function checkScreenSize() {
  if (window.innerWidth >= 1440 && modal.classList.contains('active')) {
    modal.classList.remove('active');
    burgerInput.checked = false;
  }
}

window.addEventListener('resize', checkScreenSize);

burgerInput.addEventListener('change', () => {
  if (burgerInput.checked) {
    modal.classList.add('active');
  } else {
    modal.classList.remove('active');
  }
});

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    modal.classList.remove('active');
    burgerInput.checked = false;
  });
});

checkScreenSize();
