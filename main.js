const icons = [
  {
    name: "cat",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "crow",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dog",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dove",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dragon",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "horse",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "hippo",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "fish",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "carrot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "apple-alt",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "lemon",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "pepper-hot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "user-astronaut",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-graduate",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-ninja",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-secret",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
];

const container = document.querySelector(".card-container");
const el = document.getElementById('select-menu');

cardSelect();

el.addEventListener('change', (event) => {
  let type = event.target.value;
  cardSelect(type);
})

const animalIcons = icons.filter((icons) => icons.type === 'animal')
const vegetableIcons = icons.filter((icons) => icons.type === 'vegetable')
const userIcons = icons.filter((icons) => icons.type === 'user')

function cardSelect(type){
  if(type == 4){
    printAllCards(userIcons)
  }else if(type == 3){
    printAllCards(vegetableIcons)
  }else if(type == 2){
    printAllCards(animalIcons)
  }else{
    printAllCards(icons)
  }
}

function printAllCards(cardsArray) {
  container.innerHTML = '';
  cardsArray.forEach((icons) => {
    container.innerHTML += `
    <div class="box">
      <div class="fontIcons ${icons.color}"><i class="${icons.family} ${icons.prefix}${icons.name}"></i></div>
      <div class="font-text fw-bold">${icons.name}</div>
    </div>
  `;
  })
}





