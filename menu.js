function menu(){

  const menucontainer = document.createElement('div');
  menucontainer.textContent = "Menu Items \n We have an extensive menu of ove 100+ dishes. For your sanity's sake, we are only showing you our top 3.";
  menucontainer.classList.add('menucontainer')

  addMenuItem(1, "The Big One", "30$", "images/bigone.png", "A giant 10lbs lump of mystery meat slathered in Uncle Zac's mystery gravy sauce, a side of locally-grown vegetables, and rice.")
  addMenuItem(2, "Neptune's Garden", "100$", "images/seafood.png", "An array of fresh and sought-after seafood." )
  addMenuItem(3, "Snoop Dogg's Famous Steamed Lobster", "50$", "images/sdpie.png", "One of Snoop Dogg's side quests. Pretty tasty." )

  function addMenuItem(index, name, price, imgsource, description) {

    const itemcontainer = document.createElement('div');
    itemcontainer.textContent = `${name} - ${price}`;
    itemcontainer.classList.add('itemcontainer', `itemcontainer${index}`)
  
    const itemimg = document.createElement('img');
    itemimg.src=`${imgsource}`;
    itemimg.classList.add('itemimg', `itemimg${index}`)
  
    const iteminfo = document.createElement('p');
    iteminfo.textContent=`${description}`
    iteminfo.classList.add('iteminfo')
  
    itemcontainer.append(itemimg, iteminfo);
  
    menucontainer.appendChild(itemcontainer);
  }

  return menucontainer;
}

export default menu;



