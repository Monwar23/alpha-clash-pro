// function play(){
//     // hide the home screen
//     const homeSection=document.getElementById('home-screen')
//     homeSection.classList.add('hidden')

//     // show the playground
//     const playgroundSection=document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden')
// }
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
