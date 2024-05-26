const clock = document.querySelector("h1#clock");
const date_today = document.querySelector(".date_today")
const weeks = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
function getClock() {
    const date = new Date();

    const year = String(date.getFullYear()).padStart(4, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const days = String(date.getDate()).padStart(2, "0");
    const week = weeks[date.getDay() - 1];

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");

    const today = `${year}/${month}/${days} ${week}`;
    const times = `${hours}:${minutes}`;
    // const milsec = String(date.getMilliseconds()).substring(0,2).padStart(2, "0");


    date_today.innerText = today;
    clock.innerText = times;
}

getClock();
setInterval(getClock, 1000);

// setInterval(함수, 시간(ms)) : 매 시간만큼 지나면 함수 실행
// setInterval(sayHello, 5000);

// setTimeout(함수, 시간(ms)) : 시간만큼 지난 후 함수 실행(단 1번)
// setTimeout(sayHello, 5000);

// padStart(문자열 길이, 채울 문자)
// : 해당 문자열의 길이를 제한하고, 제한길이보다 문자열의 길이가 작을 경우 빈칸을 앞쪽부터 설정한 문자로 채운다

// padEnd(문자열 길이, 채울 문자)
// : 해당 문자열의 길이를 제한하고, 제한길이보다 문자열의 길이가 작을 경우 빈칸을 뒤쪽부터 설정한 문자로 채운다