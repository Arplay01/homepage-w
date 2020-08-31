import moment from 'moment';

/* alert('Hello!') */
console.log("hello! nice to see you");

const x = 25;
console.log(x);
let y = "hi";
console.log(y);
/* let y = 32
console.log(y) */

const dogName = "Nel";
const dogAge = 2;
console.log(
  `Cześć! Poznaj mojego psiaka ${dogName}, która ma ${dogAge} lata. Żałuj, że jej nie znasz... :D `
);

const note = document.querySelector(".note__description--js");
note.innerHTML =
  "Ten tekst dodałem dzięki js. Mam nadzieje że to działa, bo jak nie to dupa";

const noteSucceed = document.querySelector(".note__description--js2");
noteSucceed.innerHTML = `Udało się! A mój pies to ${dogName} i ma ${dogAge} lata.`;

const noteSucceedDescription = document.querySelector(
  ".note__description--js3"
);
noteSucceedDescription.innerHTML =
  "🎉🎉 Z programowaniem jest jak z gotowaniem. Serio. Ważne! Uważnie zatrzymać się na początku i precyzyjnie i łopatologicznie ustalić co chcę osiągnąć - jakie aktywności muszę wykonać, w jakiej kolejności. Czego potrzebuję do ugotowania tego rozwiązania? 🏀🎉";

const title = document.querySelector(".note__title--js");
title.innerHTML = "14.08.2020 have fun (added by js)";

/* const gree142 = (name, age) => {
    alert(`Hello, my name is ${name} i mam ${age}`);
    console.log(`Hello, my name is ${name} i mam ${age}`);
} 

gree142('Arek', 24) */

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

createContent(
  ".note__description--js4",
  "Hello World (contend created by function in JS) First function in my life 🍎"
);

const specialSection = (querySelectorContent, content) => {
  const special = document.querySelector(querySelectorContent);
  special.innerHTML = content;
};

specialSection(".special__heading--js", "To jest test i DZIAŁA");
specialSection(
  ".special__description--js",
  "Funkcja dodana przy pomocy => (Fat) arrow function!🔥"
);
specialSection(
  ".special__description--js2",
  "Mega mnie to jara i daje dużo przyjemności! 🔊"
);

/* const calculate = (myNumber) => {
    return myNumber*7

}

calculate(1)
console.log(myNumber) */

function calculate(myNumber) {
  console.log(`dostałam ${myNumber}`);
  myNumber = myNumber * 7;
  return `Mój wynik to ${myNumber}`;
}
const myResult = calculate(dogAge);
console.log(myResult);

console.log(dogAge);

const greet = (dogName, dogAge, addedAge) => {
  let futureAge = dogAge + addedAge;
  console.log(
    `Cześć jestem ${dogName} i mam ${dogAge}. A za ${addedAge} lata będę miała ${futureAge}`
  );
};

greet("Nel", 2, 4);

/* OBJECT */

const nel = {
  age: 2,
  firstName: "Nel",
  lastName: 0,
  weight: 10,
  /*  weightWithMetrics: `${nel.weight}kg`, */
  sex: "female",
  isHungry: true,
};

console.log(nel);
console.log(nel.weight);

function js5(querySelectorContent, content) {
  const paragraph = document.querySelector(querySelectorContent);
  paragraph.innerHTML = content;
}

js5(
  ".note__description--js5",
  "Czy aby na pewno??? Monotonia niekoniecznie, ale rutyna jest jak najbardziej wskazana. Jak ma się gram ochoty, to monotonię można łatwo pożegnać. Urozmaicając sobie cokolwiek bym nie robił. :D Poza tym trzeba regularnie i wytrwale pracować."
);

const contenthinio = {
  important: {
    sleep: "sen",
    food: "jedzenie",
    regeneration: "regeneracja",
    movment: "ruch i ćwiczenia fizyczne",
  },
  topPriority: "Codzienne pisanie kodu!",
};

console.log(contenthinio);

function js6(contentQuerySelector, contenthinio) {
  const content = document.querySelector(contentQuerySelector);
  content.innerHTML = contenthinio;
}

js6(
  ".note__description--js6",
  `TOP ${contenthinio.topPriority}, & ${contenthinio.important.sleep} & ${contenthinio.important.food} & ${contenthinio.important.regeneration}`
);

function greetAgain(name) {
  console.log(
    `Hello my friend ${name}! Very important thing is "${contenthinio.important.sleep}" in Polish. That's mean sleep.`
  );
}

greetAgain("Arek");

if (0 == 0) {
  console.log("To jest prawda");
}

if ("test" > 0) {
  console.log("prawda");
}
if (!("test" > 0)) {
  console.log("nie prawda");
}

if ("test" > 0) {
  console.log("prawda");
} else {
  console.log("nie prawda po raz drugi (with else)");
}

if (2 === "2") {
  console.log("PRAWDA");
} else if (2 !== "2") {
  console.log("Prawda druga");
} else {
  console.log("a może jednak nie prawda - pssikus! 😎");
}

if (2 == "2" && 1 == 1) {
  console.log('Czy to "i" && zadziała??');
} else {
  console.log('jednak działa, ale teraz jest "else');
}

const somebody = "somebodya";

if ("somebody" == somebody || 2 > 1) {
  console.log("sama prawda, albo częsciowa za pomocą ||");
} else {
  console.log(somebody);
}

switch (13 + 4) {
  case 17:
    console.log('17 to jest ta liczba z pomocą "switch"');
    break;
  case 1:
    console.log('1 to jest ta liczba z pomocą "switch"');
    break;
  default:
    console.log("żadne z tych nie jest prawdą. Switch");
}

2 > 3 ? console.log(true) : console.log(false);

const result = 2 !== "2" ? true : false;

console.log(result);
/* Taka tam zabawa xD */
const myRange = document.querySelector(".range--js");
console.log(myRange.value);
const rangeContent = document.querySelector(".range-content--js");
rangeContent.innerHTML = `wybierasz ${myRange.value}`;

const js7 = document.querySelector(".note__description--js7");
js7.innerHTML = "Dalej ciśniemy tabele";

const button = document.querySelector(".action--js");

function buttonChange() {
  const myButton = document.querySelector(".note__description--click");
  myButton.innerHTML =
    "Właśnie nauczyłem się zmieniać paragraf przez eventy w JS";
  console.log("kliknąłeś");
}

button.addEventListener("click", buttonChange);
console.log(button);

const button2 = document.querySelector(".action--js2");
console.log(button2);

const change2 = () => {
  const change = document.querySelector(".note__description--click2");
  change.innerHTML = "tym razem funkcja strzałkowa!! <3";
};

button2.addEventListener("mouseleave", change2);

const anotherButton = document.querySelector(".action--js3");

anotherButton.addEventListener("click", (e) /* Może być bez "e" */ => {
  const change = document.querySelector(".note__description--click3");
  change.innerHTML = "<strong>lecimy</strong> z tematem";
});

const click4 = document.querySelector(".action--js4");

click4.addEventListener("click", () => {
  const click44 = document.querySelector(".note__description--click4");
  click44.classList.add("note__description--click4", "test--js4");
  click44.innerHTML = "hello world zmieniona treść i classy!";
  console.log("zmieniłeś klasę i treść");
});

/*   function classChanger() {
  const click44 = document.querySelector('.note__description--click4');
click44.classList.add('note__description--click4','test--js4');
console.log('zmieniłeś klasę')
  }

click4.addEventListener('click', classChanger) */

/* HAMBURGER1 TEST */

const hamburger1 = document.querySelector(".hamburger1--js");

hamburger1.addEventListener("click", () => {
  const hamburgerShow = document.querySelector(".navigation1--js");
  hamburgerShow.classList.toggle("navigation1--off");
});

const hamburgerButton = document.querySelector('.hamburger-button--js');

hamburgerButton.addEventListener('click', function () {
  const navigation = document.querySelector('.navigation--js');
  navigation.classList.toggle('navigation--off');
  const navigationLogo = document.querySelector('.note__picture--box-model-logo')
  navigationLogo.classList.toggle('note__picture--box-model-logo--js')
/*   const navigationDescription = document.querySelector('.menu--js')
  navigationDescription = document.classList.toggle('menu--off') */
});

const showTitle = document.querySelector('.button--js11');

showTitle.addEventListener('click', () => {
  const title = document.querySelector('.note__title--js11')
  title.classList.toggle('note__title--off')
})

moment().format('MMMM Do YYYY, h:mm:ss a')

const currentDate = moment().format('MMMM Do YYYY, h:mm:ss a')
const date12 = document.querySelector('.date--js');
date12.innerHTML = (`Hello marian o tej godnej godzinie ` + moment().format('MMMM Do YYYY, h:mm:ss a'))

const buttonDark1 = document.querySelector('.dark-mode1__button--js');
let isDark1 = false;
console.log(`hello isDark1`);

buttonDark1.addEventListener('click', () => {
    if (isDark1 === false) {
        isDark1 = true;
        document.documentElement.style.setProperty('--background1', '#002d36');
        document.documentElement.style.setProperty('--font1', '#ffc6ac');
        document.documentElement.style.setProperty('--section-background1', '#014553');
        console.log('darkMode');
    } else {
        isDark1 = false;
        document.documentElement.style.setProperty('--background1', '#ffc6ac');
        document.documentElement.style.setProperty('--font1', '#014553');
        document.documentElement.style.setProperty('--section-background1', '#ebeb11');
        console.log('lightMode');
    }
})

/* MAIN DARK MODE BELOW */

const buttonDark2 = document.querySelector('.dark-mode2__button--js');
let isDark2 = false;
console.log(`hello isDark2`);

buttonDark2.addEventListener('click', () => {
    if (isDark2 === false) {
        isDark2 = true;
        document.documentElement.style.setProperty('--background', '#002d36');
        document.documentElement.style.setProperty('--background-gradient', '#77a69f');
        document.documentElement.style.setProperty('--font', '#ffc6ac');
        document.documentElement.style.setProperty('--font3', '#eba6a9ff');
        document.documentElement.style.setProperty('--section-background', '#197fc4');
        document.documentElement.style.setProperty('--section-background2', '#197fc4');
        console.log('darkMode');
    } else {
        isDark2 = false;
        document.documentElement.style.setProperty('--background', '#ffc6ac');
        document.documentElement.style.setProperty('--background-gradient', '#77a69f');
        document.documentElement.style.setProperty('--font', '#014553');
        document.documentElement.style.setProperty('--font3', '#571616');
        document.documentElement.style.setProperty('--section-background', '#eba6a9ff');
        document.documentElement.style.setProperty('--section-background2', '#ffc6ac');
        console.log('lightMode');
    }
})

const footerDate = document.querySelector('.footer__description--js');
footerDate.innerHTML =  `Hello man this is: ${moment().format('MMMM Do YYYY, h:mm:ss a')}`;

const emptyText = document.querySelector('.empty-note--js');

function addContent(querySelectorElement, newClass, content) {
  document.querySelector(querySelectorElement).classList.add(newClass)
  document.querySelector(querySelectorElement).innerHTML = content;
} 

addContent('.empty-note--js', 'note--box-model2', 'Paragraf dodany dla przećwiczenia funkcji i innych. Enjoy! 😊.')

const showParagraph = document.querySelector('.showParagraph--js');

showParagraph.addEventListener('click', () => {
  const paragraphClass = document.querySelector('.note__description--js8');
  paragraphClass.classList.toggle('note__description--js8-off');
  const newParagraph = document.querySelector('.note__description--js8');
  newParagraph.innerHTML = 'Mega przydatne jest robienie planningów, Review i Retro, oraz praca nad backlogiem. A potem rzetelna praca w sprincie. :) Mozna powiedzieć, że praca leci!'
})