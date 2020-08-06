// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:
  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
const menuButton = document.querySelector('.menu-button')
const header = document.querySelector('.header')

function menuMaker (menuData){
  const menu = document.createElement('div')
  const list = document.createElement('ul')
  const listItem1 = document.createElement('li')
  const listItem2 = document.createElement('li')
  const listItem3 = document.createElement('li')
  const listItem4 = document.createElement('li')
  const listItem5 = document.createElement('li')
  const listItem6 = document.createElement('li')

  menu.appendChild(list)
  list.appendChild(listItem1)
  list.appendChild(listItem2)
  list.appendChild(listItem3)
  list.appendChild(listItem4)
  list.appendChild(listItem5)
  list.appendChild(listItem6)

  menu.classList.add('menu')

  listItem1.textContent = menuData[0]
  listItem2.textContent = menuData[1]
  listItem3.textContent = menuData[2]
  listItem4.textContent = menuData[3]
  listItem5.textContent = menuData[4]
  listItem6.textContent = menuData[5]


  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu--open')
  })
  console.log(menu)
  return menu
}

const final = menuMaker(menuItems)
header.appendChild(final)