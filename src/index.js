import home from './home';
import aboutus from './aboutus';
import menu from './menu';
import './styles/index.css'
import './styles/aboutus.css'
import './styles/home.css'
import './styles/menu.css'

function display() {

  const pagecontainer = document.createElement('div')
  pagecontainer.classList.add("pagecontainer")
  pagecontainer.innerHTML = 
  `
    <h1 class="title">The BouG Resto</h1>
  `

  const contentcontainer = document.createElement('div')
  contentcontainer.classList.add('contentcontainer')

  const btnbar = document.createElement('div');
  btnbar.classList.add('btnbar')

  const homebtn = document.createElement('button');
  homebtn.textContent='HOME';

  const menubtn = document.createElement('button');
  menubtn.textContent='MENU';

  const aboutusbtn = document.createElement('button');
  aboutusbtn.textContent='ABOUT US';

  const btnarray = [homebtn, menubtn, aboutusbtn];

  changePageDisplay(homebtn);

  btnarray.forEach((btn => {
    btn.classList.add('btn')
    btn.addEventListener('click', () => {
      changePageDisplay(event.target);
    })
  })) 

  btnbar.append(homebtn, menubtn, aboutusbtn);

  function changePageDisplay(currentButton) {

    contentcontainer.innerHTML = ''

    if (currentButton === homebtn) {
      contentcontainer.appendChild(home());
    } else if (currentButton === menubtn) {
      contentcontainer.appendChild(menu());
    } else if (currentButton === aboutusbtn) {
      contentcontainer.appendChild(aboutus());
    }
  }

  pagecontainer.append(btnbar, contentcontainer);
  console.log(pagecontainer)
  return pagecontainer;
}

document.body.appendChild(display())