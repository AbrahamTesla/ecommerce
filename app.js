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
      title: 'Hoodie Red',
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
            code: 'blue',
            img: './img/hoodieBlue.png',
         },
         {
            code: 'blue',
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
            code: 'blue',
            img: './img/hoodieYellow.png',
         },
      ],
   },
];

const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');

menuItems.forEach((item, index) => {
   item.addEventListener('click', () => {
      wrapper.style.transform = `translateX(${-100 * index}vw)`;
   });
});
