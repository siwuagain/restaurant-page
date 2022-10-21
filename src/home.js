
function home(){
  const homecontainer = document.createElement('div');
  homecontainer.classList.add('homecontainer')
  homecontainer.innerHTML = 
  `
    <div class="intro">
      <p class="introtext">Established in 10 B.G.S. (Before GangNam Style), The BouG Resto has been in the heart of every family in the beautiful town of Masalasacasa. We hold the record for being voted 'Worst Restaurant' for the most consecutive years (we lost count, we've had the title ever since we opened, really). We serve traditional Gomoloco cuisine with an exciting modern twist: the 'BouG style'.</p>
      <figure>
        <img class="introimg" src="images/resto.png" alt="Picture of the restaurant when it first opened.">
        <figcaption>The restaurant when it first opened</figcaption>
      <figure>
    </div>

    <div class="openhours">
      <span>OPEN HOURS</span>: <br>
      Monday : 3 PM - 11 PM <br>
      Tuesday : 3 PM - 11 PM <br>
      Wednesday : 3 PM - 11 PM <br>
      Thursday : 3 PM - 11 PM <br>
      Friday : 3 PM - 11 PM <br>
      Saturday : <span>CLOSED</span> <br>
      Sunday : <span>CLOSED</span>
    </div>

    <p class="location">
      <span>LOCATION</span> <br>
      888 Hall of Fame Avenue, Masalacasa, Prouvania
    <p>
  `
  
  return homecontainer;
}

export default home;