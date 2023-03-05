
const tabsLink = document.querySelectorAll('.tabs__nav-btn');
const tabsBody = document.querySelectorAll('.tabs__body');

tabsLink.forEach(el => {
  el.addEventListener('click', () => {

    tabsBody.forEach(el => {
      el.classList.remove('active')
    });
    const content = document.querySelector('#' + el.dataset.tab);
    content.classList.add('active');

    tabsLink.forEach(el => {
      el.classList.remove('active')
    });

    el.classList.add('active')

  })
})
