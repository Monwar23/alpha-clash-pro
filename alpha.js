// function play(){
//     // hide the home screen
//     const homeSection=document.getElementById('home-screen')
//     homeSection.classList.add('hidden')

//     // show the playground
//     const playgroundSection=document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden')
// }
function handleKeyboardButtonPress(event){
    const playerPress=event.key
    // console.log(playerPress)
    // stop the game if press esc
    if(playerPress==='escaped'){
        gameOver()
    }
    // expected press
    const currentAlphabetElement=document.getElementById('current-alphabet')
    const currentAlphabet=currentAlphabetElement.innerText
    const expectedAlphabet=currentAlphabet.toLowerCase()
    // check
    if(playerPress===expectedAlphabet){
        console.log('yes')
        //  score update    
        const currentScore=getTextElementValueById('current-score')
        const updatedScore=currentScore+1
        setTextElementValueById('current-score',updatedScore)
        

        removeBackgroundColorById(expectedAlphabet)
        continueGame()
       
    }
    else{
        console.log('no')
        const currentLife=getTextElementValueById('current-life')
        const updatedLife=currentLife-1
        setTextElementValueById('current-life',updatedLife)
        if(updatedLife===0){
            gameOver();
        }
    }
}
document.addEventListener('keyup',handleKeyboardButtonPress)

function continueGame(){
    //1. generate a random alphabet
    const alphabet=getARandomAlphabet(); 
    // 2.show this
    const currentAlphabetElement=document.getElementById('current-alphabet')
    currentAlphabetElement.innerText=alphabet 
    // set bg color
    setBackgroundColorById(alphabet)
}


function play(){
    hideElementByID('home-screen');
    hideElementByID('final-score')
    showElementByID('play-ground');
    // restore life value
    setTextElementValueById('current-life',5)
    setTextElementValueById('current-score',0)
    continueGame()
}
function gameOver(){
    hideElementByID('play-ground');
    showElementByID('final-score')
    // update final score
    const lastScore=getTextElementValueById('current-score')
    setTextElementValueById('last-score',lastScore)

    // clear last highlight
    const currentAlphabet=getElementTextById('current-alphabet')
    removeBackgroundColorById(currentAlphabet)
}
