const menu = document.querySelector('#menu-bar');
const cover = document.querySelector('.menu-cover');
const navbarEl = document.querySelector('.navbar-menu');
const btnWedding = document.getElementById('wedding');
const btnBirthday = document.getElementById('birthday');
const btnCocktail = document.getElementById('cocktail');
const btnSport = document.getElementById('sport');
const btnFundraiser = document.getElementById('fundraiser');
const btnBaby = document.getElementById('baby');
const btnGraduation = document.getElementById('graduation');
const btnWorkshop = document.getElementById('workshop');
const btnDinner = document.getElementById('dinner');
const body = document.querySelector('body');
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector('.close');
const eventBox = document.querySelector('.event-box');
const eventText = document.querySelector('.event-text');
const cover = document.querySelector('.cover');
const eventSection = document.querySelector('.event-section');
const footer = document.querySelector('.footer');
let title = document.querySelector('.event-title');


menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navbarEl.classList.toggle('active');
    body.classList.toggle("active");
})

const wedding = "Your wedding day is one of the most important moments of your life—and the food you serve should be just as unforgettable. At BrownBag HQ, we specialize in taking your big day to the next level with mouthwatering gourmet burgers and a catering experience that will delight your guests from the first bite to the last. From intimate ceremonies to extravagant receptions, we bring bold flavors, creative options, and impeccable service to your wedding celebration.";
const birthday = "Planning a birthday celebration? Let BrownBag HQ elevate your party with mouthwatering, gourmet burgers and an unforgettable catering experience that will delight your guests and leave them talking long after the party ends. At BrownBag HQ, we believe a birthday celebration deserves more than just ordinary food. Our gourmet burgers are crafted using the finest, locally sourced ingredients, delivering rich and bold flavors that your guests will absolutely love. Choose from a range of options, including classic beef burgers, BBQ chicken, vegetarian, and vegan choices, all designed to satisfy even the most discerning appetites. From juicy patties to delectable toppings, every bite is a mouthful of joy.";
const cocktail = "Hosting a cocktail party and looking to elevate the experience with something extraordinary? At BrownBag HQ, we offer a unique and unforgettable catering solution that pairs perfectly with your cocktail hour. Gone are the days of predictable appetizers—our gourmet burgers bring a creative, mouthwatering twist to your event, turning your party into a true culinary celebration. Whether it’s an intimate gathering or a grand soirée, our expertly crafted gourmet burgers will be the star of your event, leaving your guests talking long after the last bite. Let us take care of the food while you enjoy the drinks and the company!";
const baby = "Your baby shower is a special moment to celebrate the joy of your growing family, and the food should be just as memorable as the occasion itself. At BrownBag HQ, we offer a fun and delicious twist on traditional baby shower catering, serving up gourmet burgers and irresistible sides that will have your guests talking long after the party. Whether you’re having a casual, intimate gathering or a grand celebration, we’ll make sure your baby shower is filled with flavor and fun!";
const sport= "Are you planning a sporting event and looking for food that packs a punch? Whether it's a local tournament, a game day party, or a sports league banquet, BrownBag HQ is here to bring the flavor and energy to your event with our mouthwatering gourmet burgers and sides. Let us take your game day experience to the next level by offering your guests the perfect food to enjoy before, during, and after the action. At BrownBag HQ, we know that the right food can make any sporting event even more exciting. Our burgers are crafted with premium ingredients, and our catering options are designed to feed crowds of all sizes with ease and flair. Whether you're hosting an intimate gathering or a large-scale event, we offer customizable catering solutions that cater to your team's and fans' needs.";
const fundraiser = "Are you planning a fundraiser and want to create a buzz that draws in a crowd and leaves a lasting impression? At BrownBag HQ, we believe that great food can fuel great causes. We offer exciting, mouthwatering catering options that will keep your guests coming back for more, all while raising funds for your worthy cause. Let us help you turn your fundraising event into a flavorful, unforgettable experience that everyone will love! Whether you’re hosting a gala, silent auction, community gathering, or charity walk, our gourmet burgers and delicious sides are the perfect way to bring people together, engage your audience, and make your event a success. With flexible options tailored to your needs, we provide more than just food—we provide an experience that will keep your guests talking and help you raise funds with ease!";
const graduation = "Graduation day is a monumental occasion, filled with hard-earned success, excitement, and the promise of new beginnings. Whether you're celebrating high school, college, or any other graduation milestone, the right food can make the celebration even more special. At BrownBag HQ, we offer the perfect catering solution to make your graduation party or ceremony unforgettable. With our gourmet burgers, tasty sides, and customized menu options, we’ll provide an experience your guests will rave about long after the celebration ends.";
const workshop = "Hosting a workshop? Whether it's a corporate training, creative seminar, educational conference, or team-building event, the right food can transform a good workshop into a great one. At BrownBag HQ, we specialize in offering the perfect gourmet burger experience that will fuel your participants and keep them energized and engaged throughout the day. Our diverse catering options are crafted to satisfy a range of tastes and dietary needs, providing fresh, flavorful meals that complement the learning experience.";
const dinner = "Looking to make your dinner party unforgettable? At BrownBag HQ, we offer more than just a meal—we create an experience. Whether you’re hosting an intimate dinner gathering with friends, a celebratory evening with family, or a sophisticated soirée, our gourmet burger catering service is the perfect way to add a delicious and unique twist to your event. Let us take the hassle out of dinner while delighting your guests with mouthwatering burgers, sides, and exceptional service. From casual get-togethers to elegant sit-down dinners, we provide a variety of catering options that will make your dinner party an extraordinary occasion. With our signature burgers, customizable sides, and professional service, we guarantee a meal that will leave your guests talking long after the evening ends.";

var swiper = new Swiper("#card-content", {
    effect: "cards",
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
});


var swiper = new Swiper("#mySwiper", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
});

btnWedding.addEventListener('click', (e) => {
    console.log("Hello World")
    title.innerHTML = "Wedding";
    eventText.innerHTML = wedding;
    body.classList.add("active");
    overlay.classList.add("active");
    eventBox.classList.add("active");
    navbarEl.classList.add("active");
    cover.classList.add("active");
});

btnBirthday.addEventListener('click', (e) => {
    console.log("Hello World")
    title.innerHTML = "Birthday Party";
    eventText.innerHTML = birthday;
    body.classList.add("active");
    overlay.classList.add("active");
    eventBox.classList.add("active");
    navbarEl.classList.add("active");
    cover.classList.add("active");
});

btnCocktail.addEventListener('click', (e) => {
    console.log("Hello World")
    title.innerHTML = "Cocktail Party";
    eventText.innerHTML = cocktail;
    body.classList.add("active");
    overlay.classList.add("active");
    eventBox.classList.add("active");
    navbarEl.classList.add("active");
    cover.classList.add("active");
});

btnBaby.addEventListener('click', (e) => {
    console.log("Hello World")
    title.innerHTML = "Baby Shower";
    eventText.innerHTML = baby;
    body.classList.add("active");
    overlay.classList.add("active");
    eventBox.classList.add("active");
    navbarEl.classList.add("active");
    cover.classList.add("active");
});

btnSport.addEventListener('click', (e) => {
    console.log("Hello World")
    title.innerHTML = "Sporting Event";
    eventText.innerHTML = sport;
    body.classList.add("active");
    overlay.classList.add("active");
    eventBox.classList.add("active");
    navbarEl.classList.add("active");
});

btnFundraiser.addEventListener('click', (e) => {
    console.log("Hello World")
    title.innerHTML = "Fundraiser";
    eventText.innerHTML = fundraiser;
    body.classList.add("active");
    overlay.classList.add("active");
    eventBox.classList.add("active");
    navbarEl.classList.add("active");
    cover.classList.add("active");
});

btnGraduation.addEventListener('click', (e) => {
    console.log("Hello World")
    title.innerHTML = "Graduation Ceremony";
    eventText.innerHTML = graduation;
    body.classList.add("active");
    overlay.classList.add("active");
    eventBox.classList.add("active");
    navbarEl.classList.add("active");
    cover.classList.add("active");
});

btnWorkshop.addEventListener('click', (e) => {
    console.log("Hello World")
    title.innerHTML = "Workshop";
    eventText.innerHTML = workshop;
    body.classList.add("active");
    overlay.classList.add("active");
    eventBox.classList.add("active");
    navbarEl.classList.add("active");
    cover.classList.add("active");
});

btnDinner.addEventListener('click', (e) => {
    console.log("Hello World")
    title.innerHTML = "Dinner Party";
    eventText.innerHTML = dinner;
    body.classList.add("active");
    overlay.classList.add("active");
    eventBox.classList.add("active");
    navbarEl.classList.add("active");
    cover.classList.add("active");
});



overlay.addEventListener('click', (e) => {
    body.classList.remove("active");
});

btnClose.addEventListener('click', (e) =>{
    overlay.classList.remove("active");
    eventBox.classList.remove("active");
    navbarEl.classList.remove("active");
    cover.classList.remove("active");
})
  
