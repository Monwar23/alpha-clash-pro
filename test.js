const currentScore=getTextElementValueById('current-score')
        const updatedScore=currentScore+1
        setTextElementValueById('current-score',updatedScore)



        function getTextElementValueById(elementId){
            const element=document.getElementById(elementId)
            const elementValueText=element.innerText
            const value=parseInt(elementValueText)
            return value
        }
        
        function setTextElementValueById(elementId, value){
            const element=document.getElementById(elementId)
            element.innerText=value
        }


        removeBackgroundColorById(expectedAlphabet)
        continueGame()