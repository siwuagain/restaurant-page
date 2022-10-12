
function home(){
  const container = document.createElement('div');

  const intro = document.createElement('div');
  intro.classList.add('intro');

  const introtext = document.createTextNode(("Established in 10 B.G.S. (Before GangNam Style), The BouG Resto has been in the heart of every family in the beautiful town of Masalasacasa. We hold the record for being voted 'Worst Restaurant' for the most consecutive years (we lost count, we've had the title ever since we opened really). We serve traditional Gomoloco cuisine with an exciting modern twist: the 'BouG style'."));
  intro.appendChild(introtext);

  const introimage = document.createElement('img');
  introimage.src = "images/resto.png";
  intro.appendChild(introimage);

  const openhours = document.createElement('div');
  openhours.classList.add('openhours');

  const openhourstext = document.createTextNode("Monday : 3 PM - 11 PM \n Tuesday : 3 PM - 11 PM \n Wednesday : 3 PM - 11 PM \n Thursday : 3 PM - 11 PM \n Friday : 3 PM - 11 PM \n Saturday : CLOSED \n Sunday : CLOSED");
  openhours.appendChild(openhourstext);

  const location = document.createElement('div');
  location.classList.add('location');

  const locationtext = document.createTextNode('888 Hall of Fame Avenue, Masalacasa, Prouvania');
  location.appendChild(locationtext);

  container.append(intro, openhours, location);

  return container;
}

export default home;