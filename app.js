var btnTranslate =document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time or check the console")
}


function clickHandler(){
    var inputText = txtInput.value; //Taking an Input from Text Area

    //calling the server--processing
    fetch(getTranslationURL(inputText))
    .then (response => response.json())
    .then(json => {console.log(json.contents.translated)
            var translatedText= json.contents.translated;
            outputDiv.innerHTML = translatedText; // Output Displayed

    })
    .catch(errorHandler)


};


btnTranslate.addEventListener("click",clickHandler)



