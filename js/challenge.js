//OBSERVATIONS OF FEATURES
 
// COMMENT BOX
// - listens for a click on the submit button
// - if there is no writing in the text box, nothing happens
// - if there is writing in the text box, it takes that writin (innertext) and appends it to the dom as a paragraph under the "comments section"

// General Comments & Approach
// - listen for clicks on each individual feature OR listen for clicks in the whole DOM, and wrtie conditional logic for each?

//DEFINE GLOBAL SCOPE FUNCTIONS & VARIABLES HERE
const counter = document.querySelector('#counter')

function countUp () {
    counter.textContent = parseInt(counter.textContent) + 1; 
}

function countDown () {
    counter.textContent = parseInt(counter.textContent) - 1; 
}

// COUNTER 
// - starts automatically once the dom is loaded 
// - code must run on a loop/interval
// - code increments +1
// - code may use a settimeout after 1 second (use an interval instead, so it creates an automatic loop)

// PAUSE BUTTON
// - listens for a click on the pause button
// - pauses the automatic counter (think about making the counter function into a variable?)(think about using a clearinterval function)
// - changes the pause button inner text to "resume"
// - greys out the plus, minus, like, and submit Buttons and disables them (look for classes for all buttons)
// - when the button is resume button is pressed, it enables all the buttons and changes the innter text back to pause
// - think about adding conditional logic to what happens when the button is presed IF it reads paused VS resume

document.addEventListener('DOMContentLoaded', () => {
//find a way to identify the counter
const counter = document.querySelector('#counter')
//increment it's value by 1  - > stored in countUp function
function countUp () {
    counter.textContent = parseInt(counter.textContent) + 1; 
}
//write the countUp code into an interval 
const intervalId = setInterval(countUp, 1000); 

 const pauseButton = document.getElementById(`pause`);
 const buttons = document.querySelectorAll(`button:not(#pause)`);
 console.log(buttons)
 pauseButton.addEventListener(`click`, () => {
    if (pauseButton.textContent === `pause`){
        clearInterval(intervalId);
        console.log(counter.textContent)
        pauseButton.textContent = `resume`
        buttons.forEach((button) => {
            button.disabled = true;
        })
    } else {
       setInterval(countUp, 1000);
        pauseButton.textContent = `pause`; 
        buttons.forEach((button) => {
            button.disabled = false;
        })
    }
 })
});



// PLUS & MINUS BUTTONS
// - listens for a click on the plus and minus button 
// - if the click is on the plus sign, it increments the counter by 1
// - if the click is on the minus sign, it decrements the counter by 1
document.addEventListener(`DOMContentLoaded`, () => {
    //find a way to identify the each button individually since they dont have a class
        const plusButton = document.getElementById('plus');
        const minusButton = document.getElementById('minus');
    
        document.addEventListener(`click`, (event) => {
            if(event.target === plusButton){
                countUp();
            } else if (event.target === minusButton){
                countDown();
            }
        });
    });


// LIKE BUTTON
// - listens for a click on the heart button
// - once the button is clicked, it takes the current number on the counter (innerText) and appends it as a unordered list to the dom
// - it also adds how many times the same button has been clicked and updates the nunmber without adding a new line. 

document.addEventListener(`DOMContentLoaded`, () => {
    //find a way to identify the heart button
    const heartButton = document.getElementById(`heart`);
    const likeCounts = {};
    let likeNotification;

    document.addEventListener(`click`, (event) => {
        if(event.target === heartButton){
            const number = counter.textContent;
            if(likeCounts[number] === undefined){
                likeCounts[number] = 1;
            } else {
                likeCounts[number]++;
            }
        
           if(!likeNotification){
              likeNotification = document.createElement(`ul`);
              const body = document.querySelector(`body`);
              body.appendChild(likeNotification);
           }
           
           const likeItem = document.createElement(`li`);
           likeItem.textContent = `The number ${number} has been liked ${likeCounts[number]} times`;
           likeNotification.appendChild(likeItem); 
        }
    })
})


// COMMENT BOX
// - listens for a click on the submit button
// - if there is no writing in the text box, nothing happens
// - if there is writing in the text box, it takes that writin (innertext) and appends it to the dom as a paragraph under the "comments section"

document.addEventListener(`DOMContentLoaded`, () => {
    const submitForm = document.querySelector(`form`);
    const commentBox = document.getElementById(`comment-input`)
    submitForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const commentText = commentBox.value;
        newComment = document.createElement(`p`);
        const body = document.querySelector(`body`);
        newComment.textContent = commentText
        body.appendChild(newComment)
    })
})