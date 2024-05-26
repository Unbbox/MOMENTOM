// const and let
// const : 상수(값이 변할 수 없음)
// let : 변수

// boolean => true, false
const amIFat = null;
let something;

console.log("amIFat : " + amIFat); // null : 값이 null인 상태(절대 자동으로 발생되지 않음)
console.log("something : " + something); // undefined : 값이 없는 상태


// arrays
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];
const daysOfWeeks = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeek);
console.log(daysOfWeeks);

// Get item from Array
console.log(daysOfWeeks[4]);

// Add one more day to the array
daysOfWeeks.push("sun");
console.log(daysOfWeeks);


// Object
const player = {
    name: "unbox",
    points: 10,
    fat: true,
    handsome: false
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

player.fat = false;
console.log(player.fat);

player.lastName = "potato";
player.points = player.points + 15;
console.log(player);


// Fuctions
function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " +  nameOfPerson + " and I'm " + age);
}

sayHello("nico", 10);
sayHello("unbox", 23);
sayHello("lemon", 21);
sayHello("gada", 24);


function plus(a, b) {
    console.log(a + b);
}
function divide(a, b) {
    console.log(a / b);
}

plus(8, 60);
divide(98, 20);

const player2 = {
    name: "unbox",
    sayHello: function(otherPersonsName) {
        console.log("hello " + otherPersonsName + ", nice to meet you!");
    }
};

player2.sayHello("nico");
player2.sayHello("lynn");


// Recap
// a+b, a-b, a/b, a**b 가 가능한 calculator object 작성
const calculator = {
    add: function(a,b) {
        console.log(a + b);
    },
    sub: function(a,b) {
        console.log(a - b);
    },
    div: function(a,b) {
        console.log(a / b);
    },
    powerof: function(a,b) {
        console.log(a ** b);
    }
};

calculator.add(5, 2);
calculator.sub(10, 3);
calculator.div(11, 4);
calculator.powerof(2, 3);


// Returns
const age = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);

const calculators = {
    add: function(a,b) {
        return a + b;
    },
    sub: function(a,b) {
        return a - b;
    },
    times: function(a,b) {
        return a * b;
    },
    div: function(a,b) {
        return a / b;
    },
    powerof: function(a,b) {
        return a ** b;
    }
};

const plusResult = calculators.add(2, 3);
const minusResult = calculators.sub(plusResult, 10);
const timesResult = calculators.times(10, minusResult);
const divideResult = calculators.div(timesResult, plusResult);
const powerResult = calculators.powerof(divideResult, minusResult);
console.log(plusResult, minusResult, timesResult, divideResult, powerResult);


// Conditionals
// 프롬프트 실행 시 자바스크립트를 멈추게 함, 옛날에만 사용하였고 css 적용도 되지 않음
// 따라서 prompt function은 더 이상 사용하지 않음
// const age2 = prompt("How old are you?"); // prompt는 숫자를 입력받아도 기본적으로 문자열로 저장함

// console.log(typeof age2);
// console.log(typeof parseInt(age2)); // age2에 문자 입력 시 NaN(Not a Number) 출력

const age3 = parseInt(prompt("How old r u?"));

console.log(isNaN(age3));

if (isNaN(age3) || age3 < 0) {
    console.log("Please write a real positive number");
} else if (age3 < 18){
    console.log("You are too young!");
} else if (age3 >= 18 && age3 <= 50){
    console.log("You can drink");
} else if (age3 > 50 && age3 <= 80){
    console.log("You should exercise");
} else if (age3 === 100) {
    console.log("wow you are wise");
} else if (age3 > 80) {
    console.log("You can do whatever you want.")
}


// The Document Object
// console.dir(document);
// console.dir(document.title);

// document.title = "hi"
// console.log(document.title); // title => hi 로 변경


// HTML in Javascript
// const title = document.getElementById("title");
// title.innerText = "Got you!";
// console.log(title.id);
// console.log(title.className);


// Searching For Elements
// 클래스 명으로 element 검색
const hellos = document.getElementsByClassName("hello");
console.log(hellos);

// css에서 사용하는 방식대로 element 검색
// const title = document.getElementById("hello");
// const title = document.querySelector("#hello");
// title.innerText = "Hello";
// console.log(title);


// Events
// const title = document.querySelector(".hello h1");

// console.dir(title);

// function handleTitleClick() {
//     title.style.color = "blue";
// }

// function handleMouseEnter() {
//     title.innerText = "Mouse is here!"
// }

// function handleMouseLeave() {
//     title.innerText = "Mouse is gone!"
// }

// title.onclick = handleTitleClick;
// title.onmouseenter = handleMouseEnter;
// title.addEventListener("mouseleave", handleMouseLeave);

// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handlerWindowOffline() {
    alert("SOS no WIFI");
}

function handlerWindowOnline() {
    alert("ALL GOOOOD");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handlerWindowOffline)
window.addEventListener("online", handlerWindowOnline)


// CSS in Javascript
const h1 = document.querySelector(".hello h1");

// function handleTitleClick1() {
//     const currentColor = h1.style.color;
//     let newColor;

//     if(currentColor === "blue") {
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleClick1);

function handleTitleClick() {
    // const clickedClass = "clicked";
    // if(h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // }
    h1.classList.toggle("clicked")
}

h1.addEventListener("click", handleTitleClick);