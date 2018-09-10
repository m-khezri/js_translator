const spanish = {
    "merry": "Feliz",
    "christmas": "Navidad",
    "and": "y",
    "happy": "prospero",
    "new": "nuevo",
    "year": "ano"
};

const german = {
    "merry": "Frohe",
    "christmas": "Weihnachten",
    "and": "und ein",
    "happy": "gluckliches",
    "new": "Neues",
    "year": "Jahr"
};

const french = {
    "merry": "joyeux",
    "christmas": "Noel",
    "and": "et",
    "happy": "bonne",
    "new": "nouvel",
    "year": "An"
};

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};
      
const spanishTranslate = () => {

    const inputValue = document.getElementById('inputBox').value;
    const inputWords = inputValue.split(" ");

    const spanishTranslatedString = spanishStringBuilder (inputWords);
    printToDom(spanishTranslatedString, 'returnText');
}

const spanishStringBuilder  = (inputWords) => {
    let newString = '';
    for(let i = 0; i < inputWords.length; i++) {
        let spanishWord = spanish[inputWords[i]];
        newString += `<p>${spanishWord}</p>`

    };

    return newString;

}
const spanishButton = document.getElementById('spanishButton');
    spanishButton.addEventListener("click", spanishTranslate);

    const germanTranslate = () => {
        const inputValue = document.getElementById('inputBox').value;
        const inputWords = inputValue.split(" ");
        const germanTranslatedString = germanStringBuilder (inputWords);
        printToDom(germanTranslatedString, 'returnText');
    }
    
    const germanStringBuilder  = (inputWords) => {
        let newString = '';
        for(let i = 0; i < inputWords.length; i++) {
            let germanWord = german[inputWords[i]];
            newString += `<p>${germanWord}</p>`
        };
        return newString;
    }
    const germanButton = document.getElementById('germanButton');
        germanButton.addEventListener("click", germanTranslate);

        const frenchTranslate = () => {
            const inputValue = document.getElementById('inputBox').value;
            const inputWords = inputValue.split(" ");
            const frenchTranslatedString = frenchStringBuilder (inputWords);
            printToDom(frenchTranslatedString, 'returnText');
        }
        
        const frenchStringBuilder  = (inputWords) => {
            let newString = '';
            for(let i = 0; i < inputWords.length; i++) {
                let frenchWord = french[inputWords[i]];
                newString += `<p>${frenchWord}</p>`
            };
            return newString;
        }
        const frenchButton = document.getElementById('frenchButton');
            frenchButton.addEventListener("click", frenchTranslate);