const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');

const products = [
   {
      id: 1,
      title: 'Hoodie Yellow',
      price: 50,
      colors: [
         {
            code: 'yellow',
            img: './img/hoodieYellow.png',
         },
         {
            code: 'blue',
            img: './img/hoodieBlue.png',
         },
      ],
   },
   {
      id: 2,
      title: 'Hoodie Green',
      price: 70,
      colors: [
         {
            code: 'green',
            img: './img/hoodieGreen.png',
         },
         {
            code: 'black',
            img: './img/hoodieOrange.png',
         },
      ],
   },
   {
      id: 3,
      title: 'Hoodie Blue',
      price: 80,
      colors: [
         {
            code: 'darkblue',
            img: './img/hoodieBlue.png',
         },
         {
            code: 'yellow',
            img: './img/hoodieRed.png',
         },
      ],
   },
   {
      id: 4,
      title: 'Hoodie Orange',
      price: 90,
      colors: [
         {
            code: 'orange',
            img: './img/hoodieOrange.png',
         },
         {
            code: 'blue',
            img: './img/hoodieBlue.png',
         },
      ],
   },
   {
      id: 5,
      title: 'Hoodie Red',
      price: 100,
      colors: [
         {
            code: 'red',
            img: './img/hoodieRed.png',
         },
         {
            code: 'gray',
            img: './img/hoodieGray.png',
         },
      ],
   },
];

//start with the first Item or first Element
let choosenProduct = products[0];

const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color');
const currentPiceColors = document.querySelectorAll('.sliderPrice');
const currentProductSizes = document.querySelectorAll('.size');

menuItems.forEach((item, index) => {
   item.addEventListener('click', () => {
      //change current slide
      wrapper.style.transform = `translateX(${-100 * index}vw)`;

      //change the choosen product by passing the parameter 'index'
      choosenProduct = products[index];

      //change text of currentProduct by using 'textContent' method
      currentProductTitle.textContent = choosenProduct.title;
      currentProductPrice.textContent = '$' + choosenProduct.price;

      //Initial image to show
      currentProductImg.src = choosenProduct.colors[0].img;

      //when colors are selected it will show appropriate product color & Image using the 'forEach' method
      currentProductColors.forEach((color, index) => {
         color.style.backgroundColor = choosenProduct.colors[index].code;
      });

      currentPiceColors.forEach(colors => {
         colors.style.color = choosenProduct.colors[0].code;
         colors.style.borderColor = choosenProduct.colors[0].code;
      });
   });
});

//changing image once color is selected. Using 'forEach' method & addEventListener.
currentProductColors.forEach((color, index) => {
   color.addEventListener('click', () => {
      currentProductImg.src = choosenProduct.colors[index].img;
   });
});

//changing the size text color & background color once it's click. Using 'forEach' method & addEventListener.
currentProductSizes.forEach(size => {
   size.addEventListener('click', () => {
      // this loop will reset the style of the backgroundColor and text color of the each size
      currentProductSizes.forEach(size => {
         size.style.backgroundColor = 'white';
         size.style.color = 'black';
      });
      //will set the current state of the size once click.
      size.style.backgroundColor = 'black';
      size.style.color = 'white';
   });
});

const payMentModal = document.querySelector('.payment');
const close = document.querySelector('.close');
const productButton = document.querySelector('.productButton');

//opening the payment modal once product button is click
productButton.addEventListener('click', () => {
   payMentModal.style.display = 'flex';
});

//close the payment modal once the 'X' button is click
close.addEventListener('click', () => {
   payMentModal.style.display = 'none';
});
