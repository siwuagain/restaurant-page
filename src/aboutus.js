
function aboutus() {

  const container = document.createElement('div');

  const aboutustitle = document.createTextNode('About Us');

  const owner = document.createElement('div');
  owner.classList.add('owner');

  const ownertext = document.createTextNode('SpongeBob Squarepants, award-winning chef and jellyfish-lover, decided to open The BouG Resto after countless years of preparation and effort. With the help of his mentor, John Cena, Mr. SquarePants has been running the restaurant ever since its opening. \n Contact: imreadyimready@pineapple.com');
  owner.appendChild(ownertext);

  const ownerimage = document.createElement('img');
  ownerimage.src = "images/spongebob.png";
  owner.appendChild(ownerimage);

  const headchef = document.createElement('div'); 
  headchef.classList.add('headchef');

  const headchefimage = document.createElement('img');
  headchefimage.src = "images/snoopdogg.png";
  headchef.appendChild(headchefimage);

  const headcheftext = document.createTextNode('Snoop Dogg, current headchef and co-owner of the business, just completing side quests. \n Contact: itsthaDOdoubleG@yahoo.com');
  headchef.appendChild(headcheftext);

  const others = document.createElement('div');
  others.classList.add('others');

  const othersimage = document.createElement('img');
  othersimage.src = "images/staff.png";
  others.appendChild(othersimage);

  const otherstext = document.createTextNode('Our team is full of experienced veterans and aspiring newcomers ready to welcome you with warm smiles and great service. \n Contact: thebouGresto@thebouGresto.com \n 1800-123-1412314');
  others.appendChild(otherstext)

  container.append(aboutustitle, owner, headchef, others);

  return container;
} 

export default aboutus;