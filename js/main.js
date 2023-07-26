function getQuote() {
    var random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
    document.getElementById("quote").innerHTML = `\"${arrayOfQuotes[random].quote}\"`;
    document.getElementById("author").innerHTML = `\"${arrayOfQuotes[random].author}\"`;
}


var arrayOfQuotes = [
    {
        'quote': 'Be yourself; everyone else is already taken.',
        'author': 'Oscar Wilde'
    },
    {
        'quote': 'It\'s not what happens to you, but how you react to it that matters.',
        'author': 'Epictetus'
    },
    {
        'quote': "Two things are infinite: the universe and human stupidity",
        'author': 'Albert Einstein'
    },
    {
        'quote': 'You miss 100% of the shots you don\'t take.',
        'author': 'Wayne Gretzy'
    },
    {
        'quote': 'Resentment is like drinking poison and waiting for your enemies to die.',
        'author': 'Nelson Mandela'
    },
    {
        'quote': 'Do not take life too seriously. You will not get out alive.',
        'author': 'Elbert Hubbard'
    },
    {
        'quote': 'So many books, so little time.',
        'author': 'Frank Zappa'
    },
    {
        'quote': 'A room without books is like a body without a soul.',
        'author': 'Marcus Tullius Cicero'
    },
    {
        'quote': 'Be the change that you wish to see in the world.',
        'author': 'Mahatma Gandhi'
    },
    {
        'quote': "If you tell the truth, you don't have to remember anything.",
        'author': 'Mark Twain'
    },
];
