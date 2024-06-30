
const paragraphs = [
    "Congratulations, you've found a typing game lovingly crafted with a yummy vanilla Javascript front-end and a wicked Python Django back-end. It's an exercise showcasing my skills and catching the emails of employers interested in connecting with me. Now, see if you can reach the top of the leaderboard by wordsmithing with none other than the Bard himself. And remember, some are born great, some achieve greatness, and some have greatness thrust upon them. Best of luck, Joan Akibode",
    "Seems, madam! nay it is; I know not 'seems.' 'Tis not alone my inky cloak, good mother, Nor customary suits of solemn black, Nor windy suspiration of forced breath, No, nor the fruitful river in the eye, Nor the dejected 'havior of the visage, Together with all forms, moods, shapes of grief, That can denote me truly: these indeed seem, For they are actions that a man might play: But I have that within which passeth show; These but the trappings and the suits of woe.",
    "But, soft! what light through yonder window breaks? It is the east, and Juliet is the sun. Arise, fair sun, and kill the envious moon, Who is already sick and pale with grief, That thou her maid art far more fair than she: Be not her maid, since she is envious; Her vestal livery is but sick and green And none but fools do wear it; cast it off. It is my lady, O, it is my love! O, that she knew she were!",
    "She should have died hereafter; There would have been a time for such a word. To-morrow, and to-morrow, and to-morrow, Creeps in this petty pace from day to day To the last syllable of recorded time, And all our yesterdays have lighted fools The way to dusty death. Out, out, brief candle! Life's but a walking shadow, a poor player That struts and frets his hour upon the stage And then is heard no more: it is a tale Told by an idiot, full of sound and fury, Signifying nothing.",
    "Friends, Romans, countrymen, lend me your ears; I come to bury Caesar, not to praise him. The evil that men do lives after them; The good is oft interred with their bones; So let it be with Caesar. The noble Brutus Hath told you Caesar was ambitious: If it were so, it was a grievous fault, And grievously hath Caesar answer'd it. Here, under leave of Brutus and the rest-- For Brutus is an honourable man; So are they all, all honourable men--",
    "Her father loved me; oft invited me; Still question'd me the story of my life, From year to year, the battles, sieges, fortunes, That I have passed. I ran it through, even from my boyish days, To the very moment that he bade me tell it; Wherein I spake of most disastrous chances, Of moving accidents by flood and field Of hair-breadth scapes i' the imminent deadly breach, Of being taken by the insolent foe And sold to slavery, of my redemption thence.",
    "Our revels now are ended. These our actors, As I foretold you, were all spirits and Are melted into air, into thin air: And, like the baseless fabric of this vision, The cloud-capp'd towers, the gorgeous palaces, The solemn temples, the great globe itself, Yea, all which it inherit, shall dissolve And, like this insubstantial pageant faded, Leave not a rack behind. We are such stuff As dreams are made on, and our little life Is rounded with a sleep.",
    "Blow, winds, and crack your cheeks! rage! blow! You cataracts and hurricanoes, spout Till you have drench'd our steeples, drown'd the cocks! You sulphurous and thought-executing fires, Vaunt-couriers to oak-cleaving thunderbolts, Singe my white head! And thou, all-shaking thunder, Strike flat the thick rotundity o' the world! Crack nature's moulds, an germens spill at once, That make ingrateful man!",
    "I know a bank where the wild thyme blows, Where oxlips and the nodding violet grows, Quite over-canopied with luscious woodbine, With sweet musk-roses and with eglantine: There sleeps Titania sometime of the night, Lull'd in these flowers with dances and delight; And there the snake throws her enamell'd skin, Weed wide enough to wrap a fairy in: And with the juice of this I'll streak her eyes, And make her full of hateful fantasies.",
    "O, that I were a man! What, bear her in hand until they come to take hands; and then, with public accusation, uncovered slander, unmitigated rancour,--O God, that I were a man! I would eat his heart in the market-place. Talk with a man out at a window!--a proper saying! Sweet Hero! She is wronged, she is slandered, she is undone. Princes and counties! Surely, a princely testimony, a goodly count, Count Comfect; a sweet gallant surely!",
    "Come away, come away, death, And in sad cypress let me be laid; Fly away, fly away, breath; I am slain by a fair cruel maid. My shroud of white, stuck all with yew, O, prepare it! My part of death, no one so true Did share it. Not a flower, not a flower sweet, On my black coffin let there be strown; Not a friend, not a friend greet My poor corpse, where my bones shall be thrown: A thousand thousand sighs to save, Lay me, O, where Sad true lover never find my grave, To weep there!",
    "The quality of mercy is not strain'd, It droppeth as the gentle rain from heaven Upon the place beneath: it is twice blest; It blesseth him that gives and him that takes: 'Tis mightiest in the mightiest: it becomes The throned monarch better than his crown; His sceptre shows the force of temporal power, The attribute to awe and majesty, Wherein doth sit the dread and fear of kings; But mercy is above this sceptred sway; It is enthroned in the hearts of kings, It is an attribute to God himself; And earthly power doth then show likest God's When mercy seasons justice.",
    "All the world's a stage, And all the men and women merely players: They have their exits and their entrances; And one man in his time plays many parts, His acts being seven ages. At first the infant, Mewling and puking in the nurse's arms. And then the whining school-boy, with his satchel And shining morning face, creeping like snail Unwillingly to school. And then the lover, Sighing like furnace, with a woeful ballad Made to his mistress' eyebrow.",
    "Now is the winter of our discontent Made glorious summer by this sun of York; And all the clouds that lour'd upon our house In the deep bosom of the ocean buried. Now are our brows bound with victorious wreaths; Our bruised arms hung up for monuments; Our stern alarums changed to merry meetings, Our dreadful marches to delightful measures. Grim-visaged war hath smooth'd his wrinkled front; And now, instead of mounting barded steeds To fright the souls of fearful adversaries, He capers nimbly in a lady's chamber To the lascivious pleasing of a lute.",
    "The barge she sat in, like a burnish'd throne, Burn'd on the water: the poop was beaten gold; Purple the sails, and so perfumed that The winds were lovesick with them; the oars were silver, Which to the tune of flutes kept stroke, and made The water which they beat to follow faster, As amorous of their strokes. For her own person, It beggar'd all description: she did lie In her pavilion--cloth-of-gold of tissue-- O'er-picturing that Venus where we see The fancy outwork nature.",
    "Why, sir, I trust I may have leave to speak; And speak I will; I am no child, no babe: Your betters have endured me say my mind, And if you cannot, best you stop your ears. My tongue will tell the anger of my heart, Or else my heart, concealing it, will break; And rather than it shall, I will be free Even to the uttermost, as I please, in words.",
    "To be, or not to be: that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take arms against a sea of troubles And by opposing end them. To die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep; To sleep: perchance to dream: ay, there's the rub; For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause.",
    "O, beware, my lord, of jealousy; It is the green-eyed monster which doth mock The meat it feeds on; that cuckold lives in bliss Who, certain of his fate, loves not his wronger; But, O, what damned minutes tells he o'er Who dotes, yet doubts, suspects, yet strongly loves! Poor and content is rich and rich enough, But riches fineless is as poor as winter To him that ever fears he shall be poor. Good heaven, the souls of all my tribe defend From jealousy!",];


const typingText = document.querySelector(".typing-text p");
const inpField = document.querySelector(".wrapper .input-field");
const tryAgainBtn = document.getElementById("tryAgainBtn");
const registerButton = document.getElementById("registerButton");
const timeTag = document.querySelector(".time span b");
const mistakeTag = document.querySelector(".mistake span");  
const wpmTag = document.querySelector(".wpm span");
const cpmTag = document.querySelector(".cpm span");


let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = mistakes = isTyping = 0;
let scoreSubmitted = false;
let ranIndex = 0
let isGamePlaying = false; 




// function loadParagraph() {
//     if (isAuthenticated) {
//         ranIndex = Math.floor(Math.random() * paragraphs.length);
//         const text = paragraphs[ranIndex];
//         displayText(text);
//     } else {
//         fetch('/get_text/')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('No default text found');
//             }
//             return response.json();
//         })
//         .then(data => {
//             const text = data.text;
//             displayText(text);
//         })
//         .catch(error => {
//             console.error('Error fetching text:', error);
//             const fallbackText = paragraphs[Math.floor(Math.random() * paragraphs.length)];
//             displayText(fallbackText);
//         });
//     }
// }

// function displayText(text) {
//     typingText.innerHTML = "";
//     text.split("").forEach(char => {
//         let span = `<span>${char}</span>`;
//         typingText.innerHTML += span;
//     });
//     typingText.querySelectorAll("span")[0].classList.add("active");
//     // document.addEventListener("keydown", () => inpField.focus());

//     document.addEventListener("keydown", (event) => {
//         if (event.key === "Backspace") {
//             // Prevent the default backspace action if necessary conditions are met
//             event.preventDefault();
//         } else {
//             // Focus the input field only if another key is pressed
//             inpField.focus();
//         }
//     });
//     typingText.addEventListener("click", () => inpField.focus());
// }


function loadParagraph() {

    if (isAuthenticated) {
        ranIndex = Math.floor(Math.random() * paragraphs.length);
    } else {
        ranIndex = 0
    }
    typingText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        let span = `<span>${char}</span>`;
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", (event) => {
        if (event.key === "Backspace") {
            // Prevent the default backspace action if necessary conditions are met
            event.preventDefault();
        } else {
            // Focus the input field only if another key is pressed
            inpField.focus();
        }
    });
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");
        console.log('a')
        

    } else {
        clearInterval(timer);
        inpField.value = "";
        showRegisterButton();
        console.log('showed register')

        console.log(scoreSubmitted)

        if (!scoreSubmitted) {
            scoreSubmitted = true; 
            if (isAuthenticated) {
                submitScore();
                console.log('submitted score');
            } else {
                submit_pending_score();
            }
        }
    }


}


function submit_pending_score(){
    const score =  Math.round((charIndex - mistakes)/maxTime*60);
    console.log("submit_pending_score triggered");
    fetch('/store_pending_score/', {
        method: 'POST',
        body: JSON.stringify({ "pending_score": score }),
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        }
    }).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }).then(data => {
        if (data.status === 'success') {
            console.log('Pending score stored successfully.');
        } else {
            alert('Failed to store pending score.');
        }
    }).catch(error => {
        console.error('Error storing pending score:', error);
        alert('Error storing pending score. Please try again later.');
    });}


function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
    } else {
        clearInterval(timer);
        showRegisterButton();
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    mistakeTag.innerText = 0;
    scoreSubmitted = false
    if (registerButton) {
        registerButton.style.display = 'none'; // Hide the register button when the game is reset
    }
}

function showRegisterButton() {
    if (registerButton) {
        registerButton.style.display = 'block';
    }
    if (isAuthenticated) {
        tryAgainBtn.style.display = 'block';
    }
}




function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function updateLeaderboard() {
    fetch('/get_leaderboard/')
        .then(response => response.json())
        .then(data => {
            if (data.leaderboard) {
                const leaderboardBody = document.getElementById('leaderboard-body');
                leaderboardBody.innerHTML = ''; // Clear existing rows

                data.leaderboard.forEach(entry => {
                    const row = document.createElement('tr');
                    const usernameCell = document.createElement('td');
                    const scoreCell = document.createElement('td');

                    usernameCell.textContent = entry.username;
                    scoreCell.textContent = entry.score;

                    row.appendChild(usernameCell);
                    row.appendChild(scoreCell);
                    leaderboardBody.appendChild(row);
                });
            } else {
                alert('Failed to update leaderboard.');
            }
        })
        .catch(error => {
            console.error('Error fetching leaderboard data:', error);
            alert('Error fetching leaderboard data. Please try again later.');
        });
}



function submitScore() {
    score =  Math.round((charIndex - mistakes)/maxTime*60);
    fetch('/submit_score/', {
        method: 'POST',
        body: JSON.stringify({ "score": score }),
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        }
    }).then(response => response.json()).then(data => {
        if (data.status === 'success') {
            // alert('Score submitted successfully!');
            scoreSubmitted = false;
            updateScores(data.best_score, data.latest_score);
            updateLeaderboard();
        } else {
            alert('Failed to submit score.');
        }
    }).catch(error => {
        console.error('Error submitting score:', error);
        alert('Error submitting score. Please try again later.');
    });
}

function updateScores(bestScore, latestScore) {
    document.getElementById('best-score').textContent = bestScore;
    document.getElementById('latest-score').textContent = latestScore;
}



loadParagraph();

inpField.addEventListener("input", initTyping);

if (isAuthenticated) {
    tryAgainBtn.addEventListener("click", resetGame);
}

