var COLORS = [
    "#FB7D44",
    "#2A92BF",
    "#F4CE46",
    "#00B961"
];

var CARD_TYPES = [
    "CLUBS",
    "HEARTS",
    "DIAMONDS",
    "SPADES"
];

var COLOR_EQUAL_TO_CONDTION = 1;
var COLOR_NOT_EQUAL_TO_CONDTION = 2;

var CARDS = [
    {
        type: 'CLUBS',
        number: 1,
        src: './images/cardClubsA.png'
    },
    {
        type: 'CLUBS',
        number: 2,
        src: './images/cardClubs2.png'
    },
    {
        type: 'CLUBS',
        number: 3,
        src: './images/cardClubs3.png'
    },
    {
        type: 'CLUBS',
        number: 4,
        src: './images/cardClubs4.png'
    },
    {
        type: 'CLUBS',
        number: 5,
        src: './images/cardClubs5.png'
    },
    {
        type: 'CLUBS',
        number: 6,
        src: './images/cardClubs6.png'
    },
    {
        type: 'CLUBS',
        number: 7,
        src: './images/cardClubs7.png'
    },
    {
        type: 'CLUBS',
        number: 8,
        src: './images/cardClubs8.png'
    },
    {
        type: 'CLUBS',
        number: 9,
        src: './images/cardClubs9.png'
    },
    {
        type: 'CLUBS',
        number: 10,
        src: './images/cardClubs10.png'
    },
    {
        type: 'CLUBS',
        number: 12,
        src: './images/cardClubsJ.png'
    },
    {
        type: 'CLUBS',
        number: 13,
        src: './images/cardClubsQ.png'
    },
    {
        type: 'CLUBS',
        number: 14,
        src: './images/cardClubsK.png'
    },
    {
        type: 'DIAMONDS',
        number: 1,
        src: './images/cardDiamondsA.png'
    },
    {
        type: 'DIAMONDS',
        number: 2,
        src: './images/cardDiamonds2.png'
    },
    {
        type: 'DIAMONDS',
        number: 3,
        src: './images/cardDiamonds3.png'
    },
    {
        type: 'DIAMONDS',
        number: 4,
        src: './images/cardDiamonds4.png'
    },
    {
        type: 'DIAMONDS',
        number: 5,
        src: './images/cardDiamonds5.png'
    },
    {
        type: 'DIAMONDS',
        number: 6,
        src: './images/cardDiamonds6.png'
    },
    {
        type: 'DIAMONDS',
        number: 7,
        src: './images/cardDiamonds7.png'
    },
    {
        type: 'DIAMONDS',
        number: 8,
        src: './images/cardDiamonds8.png'
    },
    {
        type: 'DIAMONDS',
        number: 9,
        src: './images/cardDiamonds9.png'
    },
    {
        type: 'DIAMONDS',
        number: 10,
        src: './images/cardDiamonds10.png'
    },
    {
        type: 'DIAMONDS',
        number: 12,
        src: './images/cardDiamondsJ.png'
    },
    {
        type: 'DIAMONDS',
        number: 13,
        src: './images/cardDiamondsQ.png'
    },
    {
        type: 'DIAMONDS',
        number: 14,
        src: './images/cardDiamondsK.png'
    },
    {
        type: 'HEARTS',
        number: 1,
        src: './images/cardHeartsA.png'
    },
    {
        type: 'HEARTS',
        number: 2,
        src: './images/cardHearts2.png'
    },
    {
        type: 'HEARTS',
        number: 3,
        src: './images/cardHearts3.png'
    },
    {
        type: 'HEARTS',
        number: 4,
        src: './images/cardHearts4.png'
    },
    {
        type: 'HEARTS',
        number: 5,
        src: './images/cardHearts5.png'
    },
    {
        type: 'HEARTS',
        number: 6,
        src: './images/cardHearts6.png'
    },
    {
        type: 'HEARTS',
        number: 7,
        src: './images/cardHearts7.png'
    },
    {
        type: 'HEARTS',
        number: 8,
        src: './images/cardHearts8.png'
    },
    {
        type: 'HEARTS',
        number: 9,
        src: './images/cardHearts9.png'
    },
    {
        type: 'HEARTS',
        number: 10,
        src: './images/cardHearts10.png'
    },
    {
        type: 'HEARTS',
        number: 12,
        src: './images/cardHeartsJ.png'
    },
    {
        type: 'HEARTS',
        number: 13,
        src: './images/cardHeartsQ.png'
    },
    {
        type: 'HEARTS',
        number: 14,
        src: './images/cardHeartsK.png'
    },
    {
        type: 'SPADES',
        number: 1,
        src: './images/cardSpadesA.png'
    },
    {
        type: 'SPADES',
        number: 2,
        src: './images/cardSpades2.png'
    },
    {
        type: 'SPADES',
        number: 3,
        src: './images/cardSpades3.png'
    },
    {
        type: 'SPADES',
        number: 4,
        src: './images/cardSpades4.png'
    },
    {
        type: 'SPADES',
        number: 5,
        src: './images/cardSpades5.png'
    },
    {
        type: 'SPADES',
        number: 6,
        src: './images/cardSpades6.png'
    },
    {
        type: 'SPADES',
        number: 7,
        src: './images/cardSpades7.png'
    },
    {
        type: 'SPADES',
        number: 8,
        src: './images/cardSpades8.png'
    },
    {
        type: 'SPADES',
        number: 9,
        src: './images/cardSpades9.png'
    },
    {
        type: 'SPADES',
        number: 10,
        src: './images/cardSpades10.png'
    },
    {
        type: 'SPADES',
        number: 12,
        src: './images/cardSpadesJ.png'
    },
    {
        type: 'SPADES',
        number: 13,
        src: './images/cardSpadesQ.png'
    },
    {
        type: 'SPADES',
        number: 14,
        src: './images/cardSpadesK.png'
    },
];