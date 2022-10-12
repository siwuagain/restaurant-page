function menu(){
  const container = document.createElement('div');

  const menutitle = document.createTextNode("Menu Items \n We have an extensive menu of ove 100+ dishes. For your sanity's sake, we are only showing you our top 3.");
  
  const item1 = document.createElement('div')
  const item1info = document.createTextNode("The Big One - 30$ \n A giant 10lbs lump of mystery meat slathered in Uncle Zac's mystery gravy sauce, a side of locally-grown vegetables, and rice." )
  const item1img = document.createElement('img');
  item1img.src = "images/bigone.png";
  item1.appendChild(item1img);

  const item2 = document.createElement('div')
  const item2info = document.createTextNode("Neptune's Garden - 100$ \n An array of fresh and sought-after seafood.")
  const item2img = document.createElement('img');
  item2img.src = "images/seafood.png";
  item2.appendChild(item2img);

  const item3 = document.createElement('div')
  const item3info = document.createTextNode("Snoop Dogg's Homemade Apple Pie - 40$ \n One of Snoop Dogg's side quests. Pretty tasty.")
  const item3img = document.createElement('img');
  item3img.src = "images/sdpie.png";
  item3.appendChild(item3img);

  container.append(menutitle, item1, item2, item3);

  return container;
}

export default menu;