import home from './home';
import aboutus from './aboutus';
import menu from './menu';

function display() {

  const pagecontainer = document.createElement('div')

  const title = document.createElement('div');
  title.textContent="The BouG Resto";
  title.classList.add('title');

  const btnbar = document.createElement('div');
  btnbar.classList.add('btnbar')

  const homebtn = document.createElement('button');
  homebtn.textContent='HOME';

  const menubtn = document.createElement('button');
  menubtn.textContent='MENU';

  const aboutusbtn = document.createElement('button');
  aboutusbtn.textContent='ABOUT US';

  const btnarray = [homebtn, menubtn, aboutusbtn];

  btnarray.forEach((btn => {
    btn.addEventListener('click', () => {
      changePageDisplay(event.target);
    })
  })) 

  btnbar.append(homebtn, menubtn, aboutusbtn);

  const contentcontainer = document.createElement('div')

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

  pagecontainer.append(title, btnbar, contentcontainer);
  return pagecontainer;
}

document.body.appendChild(display())