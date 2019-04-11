const START_TIMER = 120;

var score = 0;

var $dragElement = null;
var $selectedBottomCard = null;

var timer = START_TIMER;
var replaceCardTimer = randIntBetween(10, 20);

var $playBtn = document.getElementById('play-btn');
var $overlayWrapper = document.getElementById('overlay-wrapper');
var $timerSpan = document.getElementById("timer");
var $suffleBtn = document.getElementById("suffle");
var $discardBtn = document.getElementById("discard");
var $topCards = document.getElementsByClassName("top-card");
var $bottomCards = document.getElementsByClassName("bottom-card");
var $scoreValue = document.getElementById("score-value");
var $winningConditons = document.getElementById('conditions-wrapper');
var $status = document.getElementById('status-wrapper');
var $gameOverText = document.getElementById('gameover-text');
var $gameOverScore = document.getElementById('gameover-score');
var $selectedCardForReplacement;


var takeCard = new Audio('sounds/takeCard.wav');
var placeCard = new Audio('sounds/placeCard.wav');
var suffleCards = new Audio('sounds/suffleCards.wav');
var win = new Audio('sounds/win.wav');
var cardDiscard = new Audio('sounds/cardDiscard.wav');

var timerInterval;
var replaceCardInterval;
var nextScore;
var nextTime;
var level = 0;
var gameOver = false;

var isShuffleling = false;
var shuffleIndex = 0;

var conditionsAsserter = new ConditionsAsserter();

function clearCards() {
    [].forEach.call($topCards, function($topCard) {
        $topCard.innerHTML = "";
    });

    [].forEach.call($bottomCards, function($bottomCard) {
        $bottomCard.innerHTML = "";
    });
} 


function fillConditions() {
    var html = '<p>Winning conditions</p>';

    html += '<p class="winning-condition">' + conditionsAsserter.getTypeMessage() + conditionsAsserter.getType() + '</p>';
    html += '<p class="winning-condition">' + conditionsAsserter.getNumberMessage() + conditionsAsserter.getNumber() + '</p>';

    $winningConditons.innerHTML = html;
}

function fillStatus() {
    var html = '<p>Level: ' + level + '</p>';

    html += '<p class="winning-condition">Next Time: ' + nextTime + '</p>';
    html += '<p class="winning-condition">Next score: ' + nextScore + '</p>';

    $status.innerHTML = html;
}

function addCardsHoverEventListeners() {
    var cards = document.querySelectorAll('.top-card, .bottom-card');
    [].forEach.call(cards, function($card) {
        $card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#292B31';
            
        });

        $card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#191A1D';
        });
    });
}

function addBottomCardsClickEventListeners() {
    [].forEach.call($bottomCards, function($bottomCard) {
        $bottomCard.addEventListener('click', function() {
            if($selectedBottomCard != this) {
                if($selectedBottomCard != null) {
                    $selectedBottomCard.classList.remove("setelcted-bottom-card");
                }
                $selectedBottomCard = this;
                this.classList.add("setelcted-bottom-card");
            }
             else if($selectedBottomCard == this && $selectedBottomCard.classList.contains('setelcted-bottom-card')) {
                this.classList.remove("setelcted-bottom-card");
                $selectedBottomCard = null;
            }
        });
    });
}




$playBtn.addEventListener('click', function() {
    $overlayWrapper.style.display = 'none';
    timer = START_TIMER;
    init();
});

function showGameOver() {
    $overlayWrapper.style.display = 'flex';
    $gameOverText.style.display = 'block';
    $gameOverScore.innerHTML = 'Your score is: ' + score;
    clearInterval(replaceCardInterval);
}

$discardBtn.addEventListener('click', function() {
    console.log($selectedBottomCard);
    if($selectedBottomCard) {
        $selectedBottomCard.innerHTML = ""
        $selectedBottomCard.classList.remove("setelcted-bottom-card");
        cardDiscard.play();
        decrementNextTime();
        fillStatus();
    }
});

$suffleBtn.addEventListener('click', onSuffle);

function onSuffle() {
    if(gameOver || isShuffleling) {
        return;
    }
    suffleCards.play();
    decrementNextScore();
    fillStatus();
    var offsetTime = 0;
    isShuffleling = true;
    [].forEach.call($topCards, function($topcard) {
        var $card;
        
        if($topcard.children.length === 0) {
            $card = document.createElement('img');
            addCardEventListeners($card);
        } else {
            $card = $topcard.getElementsByClassName('card')[0];
        }
        if($card) {
            offsetTime += 300;
            var card = CARDS[randIntBetween(0, CARDS.length - 1)];

            $card.setAttribute('number', card.number);
            $card.setAttribute('type', card.type);
            $card.classList.add('card');
            $card.setAttribute('draggable', false);
            $topcard.appendChild($card);
            $card.setAttribute('src', './images/cardBack_blue2.png');
            setTimeout(function() {
                $card.setAttribute('draggable', true);
                $card.setAttribute('src', card.src);
                shuffleIndex++;
                if(shuffleIndex == 4) {
                    shuffleIndex = 0;
                    isShuffleling = false;
                }
            }, offsetTime);
        }
    });
}

function generateNextTime() {
    nextTime = randIntBetween(20, 40);
}

function decrementNextTime() {
    nextTime -= randIntBetween(4, 8);
    if(nextTime < 0) {
        nextTime = 0;
    }
}

function generateNextScore() {
    nextScore = randIntBetween(10, 20) * (level + 1);
}

function decrementNextScore() {
    nextScore -= level;
    if(nextScore < 0) {
        nextScore = 0;
    }
}

function spinCards() {

    [].forEach.call($topCards, function($topcard) {
        if($topcard.children.length === 0) {
            var $card = document.createElement('img');
            var card = CARDS[randIntBetween(0, CARDS.length - 1)];
            //cardBack_blue2
            
            $card.classList.add('card');
            $card.setAttribute('number', card.number);
            $card.setAttribute('type', card.type);
            $card.setAttribute('draggable', true);
            $topcard.appendChild($card);
            addCardEventListeners($card);
            $card.setAttribute('src', './images/cardBack_blue2.png');
            setTimeout(function() {
                $card.setAttribute('src', card.src);
            }, 400);
        }

    });
}

function emptyBottomCards() {
    var winOffsetTime = 0;
    [].forEach.call($bottomCards, function($bottomCard) {
        $card = $bottomCard.getElementsByClassName('card')[0];
        $card && $card.setAttribute('src', './images/cardBack_blue2.png');
        winOffsetTime += 200;
        setTimeout(function() {
            $bottomCard.innerHTML = "";
        }, winOffsetTime);
    });
}

function checkConditions() {
    var areConditionsMet = true;
    var currentBottomCard;
    var card;

    for(var i = 0; i < $bottomCards.length; i++) {
        currentBottomCard = $bottomCards[i];
        var cards = currentBottomCard.getElementsByClassName('card');
        if(cards.length == 0) {
            areConditionsMet = false;
            break;
        }
        if(!conditionsAsserter.assertType(cards[0].getAttribute('type'))) {
            areConditionsMet = false;
            break;
        }
        if(!conditionsAsserter.assertNumber(cards[0].getAttribute('number'))) {
            areConditionsMet = false;
            break;
        }
    }

    console.log("areConditionsMet", areConditionsMet);

    return areConditionsMet;
}


function buildHighScore() {
   // var heighscore = JSON.parse(localStorage.getItem('highscore'));
    // console.log('====================================');
    // console.log(heighscore);
    // console.log('====================================');


}

// buildHighScore();
/* EVENT LISTENERS */

function addCardEventListeners($card) {
    $card.addEventListener('dragstart', handleDragStart, false);
    $card.addEventListener('dragenter', handleDragEnter, false);
    $card.addEventListener('dragover', handleDragOver, false);
    $card.addEventListener('dragleave', handleDragLeave, false);
}

function addEventListeners() {
    var $cards = document.querySelectorAll('.card');
    [].forEach.call($cards, function($card) {
        $card.addEventListener('dragstart', handleDragStart, false);
        $card.addEventListener('dragenter', handleDragEnter, false);
        $card.addEventListener('dragover', handleDragOver, false);
        $card.addEventListener('dragleave', handleDragLeave, false);
    });
}

function addDropEventListeners() {
    var $bottomCards = document.querySelectorAll('.bottom-card');
    [].forEach.call($bottomCards, function($bottomCard) {
        $bottomCard.addEventListener('drop', handleDrop, false);
        $bottomCard.addEventListener('dragover', handleDragOver, false);
        $bottomCard.setAttribute('droppable', true);
    });
}

/* DRAG AND DROP HANDLERS */

function handleDragStart(e) {
    $dragElement = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.parentNode.innerHTML);
    takeCard.play();

}

function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault(); // Necessary. Allows us to drop.
    }
  
    e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
  
    return false;
  }
  
  function handleDragEnter(e) {
    // this / e.target is the current hover target.
    //this.parentNode.style.backgroundColor = '#191A1D';
  }
  
  function handleDragLeave(e) {
    this.parentNode.style.backgroundColor = '#191A1D';  // this / e.target is previous target element.
  }

  function handleDrop(e) {
    // this/e.target is current target element.
  
    if (e.stopPropagation) {
      e.stopPropagation(); // Stops some browsers from redirecting.
    }
  


    // Don't do anything if dropping the same column we're dragging.
    if ($dragElement != this) {
      // Set the source column's HTML to the HTML of the column we dropped on.
      console.log("Drop event", this);
      console.log("Drop children", e.target.children);
      console.log("Children len on drop", e.target.children.length);
      if(this.children.length > 0) return;
      $dragElement.parentNode.innerHTML = "";
      this.innerHTML = e.dataTransfer.getData('text/html');
      console.log(e.dataTransfer.getData('text/html'));

      if(checkConditions()) {
        win.play();
        emptyBottomCards();
        

        //score += 10;
        //timer += 60;
        conditionsAsserter.generateConditions();
        fillConditions();
        score += nextScore;
        $scoreValue.innerHTML = score;
        timer += nextTime;
        level++;
        generateNextScore();
        generateNextTime();
        fillStatus();
      } else {
        placeCard.play();
      }
      spinCards();
    } else {
        
    }
  
    return false;
}

function initEventListeners() {
    addCardsHoverEventListeners();
    addBottomCardsClickEventListeners();
    addDropEventListeners();
}

function replaceCard($selectedCardForReplacement) {
    console.log("replaced a card");
    if(isShuffleling) return;

    $card = $selectedCardForReplacement.getElementsByClassName('card')[0];
    console.log('=============DRAG================');
    console.log($dragElement);
    console.log('=============CARD==================');
    console.log($card);
    if ($dragElement == $card) return;
    if($card) {
        var card = CARDS[randIntBetween(0, CARDS.length - 1)];
        $card.setAttribute('number', card.number);
        $card.setAttribute('type', card.type);
        $card.setAttribute('src', card.src);
    }

}

function init() {
    fillConditions();
    generateNextScore();
    generateNextTime();
    fillStatus();
    spinCards();
    gameOver = false;
    $scoreValue.innerHTML = score;
    timerInterval = setInterval(function() {
        timer--;
        if(timer == 0) {
            clearInterval(timerInterval);
            gameOver = true;
            clearCards();
            showGameOver();
        }
        var hours = Math.floor(timer / 3600);
        var minutes =  Math.floor(timer / 60 - hours * 60);
        var seconds = timer - (minutes * 60) - (hours * 3600);
        if(minutes < 10) minutes = "0" + minutes;
        if(seconds < 10) seconds = "0" + seconds;
        $timerSpan.innerText = hours + ":" + minutes + ":" + seconds;
    }, 1000);

    $selectedCardForReplacement = $topCards[randIntBetween(0, $topCards.length)];
    $selectedCardForReplacement.style.border = '2px dashed #FB7D44';
    replaceCardInterval = setInterval(function() {
        replaceCardTimer--;

        if(replaceCardTimer == 0) {
            $selectedCardForReplacement.style.border = 'none';
            replaceCard($selectedCardForReplacement);
            replaceCardTimer = randIntBetween(10, 20);
            $selectedCardForReplacement = $topCards[randIntBetween(0, $topCards.length)];
            $selectedCardForReplacement.style.border = '2px dashed #FB7D44';
        }
    }, 1000);
}

initEventListeners();

