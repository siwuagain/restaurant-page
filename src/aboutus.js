function aboutus() {
  const aboutuscontainer = document.createElement('div');
  aboutuscontainer.classList.add('aboutuscontainer')
  aboutuscontainer.innerHTML = `
      <h2>About Us</h2>

      <div class="team-member" id="owner">
        <p>
          SpongeBob Squarepants, award-winning chef and jellyfish-lover, 
          decided to open The BouG Resto after countless years of preparation and effort. 
          With the help of his mentor, John Cena, Mr. SquarePants has been running the restaurant 
          ever since its opening.<br>
          <br>
          Contact: imreadyimready@pineapple.com
        <p>
        <img class="team-member-img" id="owner-image" src="images/spongebob.png">
      </div>

      <div class="team-member" id="headchef">
        <p>
          Snoop Dogg, current headchef and co-owner of the business, just completing side quests. <br>
          <br>
          Contact: itsthaDOdoubleG@yahoo.com
        <p>
        <img class="team-member-img" id="headchef-image" src="images/snoopdogg.png">
      </div>

      <div class="team-member" id="staff">
        <p>
          Our team is full of experienced veterans and aspiring newcomers 
          ready to welcome you with warm smiles and great service. <br>
          <br>
          Contact: thebouGresto@thebouGresto.com \n 1800-123-1412314
        <p>
        <img class="team-member-img" id="staff-image" src="images/staff.png">
      </div>
  `
  return aboutuscontainer;
} 

export default aboutus;