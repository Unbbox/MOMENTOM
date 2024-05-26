const quotes = [
    {
        quote: "Be yourself: everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "When you believe in a thing, believe in it all the way, implicitly and unquestionable.",
        author: "Walt Disney",
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "Monsters are real, and ghosts are real, too. They live inside us - and sometimes, they win.",
        author: "Stephen King",
    },
    {
        quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison",
    },
    {
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein",
    },
    {
        quote: "Everything negative - pressure, challenges - is all an opportunity for me to rise.",
        author: "Kobe Bryant",
    },
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama",
    },
    {
        quote: "The two most important days in your life are the day you are born and the day you find out why.",
        author: "Mark Twain",
    },
    {
        quote: "Do not try to be original, just try to be good.",
        author: "Paul Rand",
    },
    {
        quote: "When you are actually powerful, you don’t need to be petty.",
        author: "Jon Stewart",
    },
    {
        quote: "Life is like playing a violin in public and learning the instrument as one goes on.",
        author: "Samuel Butler",
    },
    {
        quote: "Loving others brings love back to you.",
        author: "Catherine Pulsifer",
    },
    {
        quote: "We must be our own before we can be another’s.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "The more one judges, the less one loves.",
        author: "Honore de Balzac",
    },
    {
        quote: "To get the full value of joy you must have someone to divide it with.",
        author: "Mark Twain",
    },
    {
        quote: "The most important thing in life is to learn how to give out love, and to let it come in.",
        author: "Morrie Schwartz",
    },
    {
        quote: "When you have faults, do not fear to abandon them.",
        author: "Confucius",
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou",
    },
    {
        quote: "Life is a mountain. Your goal is to find your path, not to reach the top.",
        author: "Maxime Lagacé",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;