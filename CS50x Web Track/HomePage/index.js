

function randomGenerator()
{
    const habitlist = [
        "Write down three things that you're grateful for", "Give a random person a compliment" , "Meditate for 5 minutes" , "Take 5 minutes to visualize yourself reaching your #1 goal",
        "Create a habit tracker" , "Take 5 deep breaths" 
    ];

    document.querySelector('#gen').innerHTML = habitlist[Math.floor(Math.random() * habitlist.length)];
}

function iamgratefulfor()
{
    const gratefullist = [
        "My teacher","This pen","This book","This website","The internet","My water bottle","My parents","My siblings","The meal I had yesterday","My friend","The opportunity I received on __",
        "My country","X influencer","The knowledge from __","The author of this book I'm reading __","My pet(s)","My phone","My laptop","This journal","The gym near me","The worker at my gym",
        "My car","The weather"
    ];

    document.querySelector('#gratefulfor').innerHTML = gratefullist[Math.floor(Math.random() * gratefullist.length)];
}

function randomCompliment()
{
    const compliments = [
        "I like your shirt","I like your hat","You have a nice smile","Your hair looks good today","I like your cologne/perfum, what is that?","I like your style, where do you shop?","You're nice",
        "You're  a funny guy"
    ];

    document.querySelector('#compliment').innerHTML = compliments[Math.floor(Math.random() * compliments.length)];
}

