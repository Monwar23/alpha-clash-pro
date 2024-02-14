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
    console.log(playerPress)
    // expected press
    const currentAlphabetElement=document.getElementById('current-alphabet')
    const currentAlphabet=currentAlphabetElement.innerText
    const expectedAlphabet=currentAlphabet.toLowerCase()
    // check
    if(playerPress===expectedAlphabet){
        console.log('yes')
        //  score update    
        //  1.get correct score
        const currentScoreElement=document.getElementById('current-score')
        const currentScoreText=currentScoreElement.innerText
        const currentScore=parseInt(currentScoreText)
        // 2.increase score 1
        const NewScore=currentScore+1
        // 3.show score
        currentScoreElement.innerText=NewScore
        // start a new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame()
    }
    else{
        console.log('no')
        const currentLifeElement=document.getElementById('current-life')
        const currentLifeText=currentLifeElement.innerText
        const currentLife=parseInt(currentLifeText)
        const newLife=currentLife-1
        currentLifeElement.innerText=newLife

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
    showElementByID('play-ground');
    continueGame()
}
