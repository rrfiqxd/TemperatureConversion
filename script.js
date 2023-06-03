const fromText = document.querySelectorAll(".from-text"),
toText = document.querySelectorAll(".to-text"),
selectTag = document.querySelectorAll("select"),
icons = document.querySelectorAll(".row i");


icons.forEach(icon => {
    icon.addEventListener("click", ({target}) =>{
        if(target.classList.contains("fa-volume-up")) {
             if(target.id == "from"){
                utterance = new SpeechSynthesisUtterance(fromText.value);
                utterance.lang = selectTag[0].value;
            } else {
                utterance = new SpeechSynthesisUtterance(toText.value);
                utterance.lang = selectTag[1].value;
            }
            speechSynthesis.speak(utterance);
        }
    });
});

