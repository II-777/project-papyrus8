const switcherTheme = () => {
  const rootStyle = document.documentElement;
  let dataTheme = rootStyle.getAttribute('data-theme'),
    newTheme;
  newTheme = dataTheme === 'light' ? 'dark' : 'light';

  rootStyle.setAttribute('data-theme', newTheme);

  localStorage.setItem('theme', newTheme);
};
document.querySelector('#theme-switcher')
  .addEventListener('click', switcherTheme);