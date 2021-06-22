const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

savedThemeValue()

checkboxRef.addEventListener('change', onCheckboxClick);

function onCheckboxClick(event) {
    if (event.target.checked) {
        bodyRef.classList.add(Theme.DARK);
        bodyRef.classList.remove(Theme.LIGHT);

        localStorage.setItem('Theme', Theme.DARK);
    }
    else {
        bodyRef.classList.add(Theme.LIGHT);
        bodyRef.classList.remove(Theme.DARK);
    
        localStorage.setItem('Theme', Theme.LIGHT);
    }
}

function savedThemeValue() {
    const savedTheme = localStorage.getItem('Theme');
    
    if (savedTheme) {
        bodyRef.classList.add(savedTheme);
       
        if (savedTheme === Theme.DARK) {
            checkboxRef.checked = true;
        }
    } else {bodyRef.classList.add(Theme.LIGHT)}
}