
  
let cards = [
    {
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Tweety.svg/1200px-Tweety.svg.png",
        value: 1,
        status: "closed"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Tweety.svg/1200px-Tweety.svg.png",
        value: 1,
        status: "closed"
    },
    {
        image: "https://i.pinimg.com/736x/12/f5/ed/12f5edcec8fd9e38597dfa6e9adb0a29.jpg",
        value: 2,
        status: "closed"
    },
    {
        image: "https://i.pinimg.com/736x/12/f5/ed/12f5edcec8fd9e38597dfa6e9adb0a29.jpg",
        value: 2,
        status: "closed"
    },
    {
        image: "https://i.pinimg.com/originals/d7/59/e9/d759e93a7dddf8ed34932529432b8f2e.jpg",
        value: 3,
        status: "closed"
    },
    {
        image: "https://i.pinimg.com/originals/d7/59/e9/d759e93a7dddf8ed34932529432b8f2e.jpg",
        value: 3,
        status: "closed"
    },
    {
        image: "https://sites.google.com/site/doraemon1161104319/_/rsrc/1518075394469/characters-2/nobi-nobita/Sitting-Image-Of-Nobita.png?height=200&width=188",
        value: 4,
        status: "closed"
    },
    {
        image: "https://sites.google.com/site/doraemon1161104319/_/rsrc/1518075394469/characters-2/nobi-nobita/Sitting-Image-Of-Nobita.png?height=200&width=188",
        value: 4,
        status: "closed"
    },
    {
        image: "https://1.bp.blogspot.com/-n6YS7pWH9L8/XtI0hYgqztI/AAAAAAAAEso/hhxAX4y2ooYfdYMkX6qXLLfV95rQNEHEQCK4BGAsYHg/Ninja%2BHattori%2B%2528Zona%2BAnimasi%2529%2B%25282%2529.png",
        value: 5,
        status: "closed"
    },
    {
        image: "https://1.bp.blogspot.com/-n6YS7pWH9L8/XtI0hYgqztI/AAAAAAAAEso/hhxAX4y2ooYfdYMkX6qXLLfV95rQNEHEQCK4BGAsYHg/Ninja%2BHattori%2B%2528Zona%2BAnimasi%2529%2B%25282%2529.png",
        value: 5,
        status: "closed"
    },

]


let temp;
for (let i = cards.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
}

let cardsCopy = cards;



function displayCards(data) {

    let cardsString = "";



    data.forEach(function (card, index) {
        cardsString += `
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">
                </div>
            </div>
        `;
    });


    document.getElementById('cards').innerHTML = cardsString;

}


displayCards(cards);





let cardCount = 1;
let val1 = null, val2 = null;
let score = 0;
function openCard(index) {

    console.log(cards);

    cards[index].status = "opened";
    if (cardCount === 1) {
        val1 = cards[index].value;
        cardCount++;
    }
    else if (cardCount === 2) {
        val2 = cards[index].value;

        if (val1 === val2) {
            score++;
            document.getElementById('score').innerText = score;

            // reste after one guess 
            val1 = null;
            val2 = null;
            cardCount = 1;

        }
        else {

            alert("game over");
            location.reload();

        }


    }

    displayCards(cards);

}
