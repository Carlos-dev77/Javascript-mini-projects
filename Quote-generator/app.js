// Javascript code for the quote generator
  
let quote = document.querySelector('.quotes');
let person = document.querySelector('.person');
let quoteButton = document.querySelector('.generate-btn');
//Array for the quotes
let quotes = [
    { 
        quote:"I can do all things through Christ who strengthens me",
        person:"Apostle Paul"
    },
    { 
        quote:"Life is what happens when you're busy making other plans",
        person:"John Lennon"
    },
    { 
        quote:"The only way to do great work is to love what you do",
        person:"Steve Jobs"
    },
    { 
        quote:"Innovation distinguishes between a leader and a follower",
        person:"Steve Jobs"
    },
    {
        quote:"Life is either a daring adventure or nothing at all",
        person:"Helen Keller"
    },
    {
        quote:"The future belongs to those who believe in the beauty of their dreams",
        person:"Eleanor Roosevelt"
    },
    {
        quote:"It is during our darkest moments that we must focus to see the light",
        person:"Aristotle"
    },
    {
        quote:"The best time to plant a tree was 20 years ago. The second best time is now",
        person:"Chinese Proverb"
    }
];



function changeQuote(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
}

quoteButton.addEventListener('click', changeQuote);






























































