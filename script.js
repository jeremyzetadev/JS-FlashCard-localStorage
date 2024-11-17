const flashcards = document.getElementsByClassName("flashcards")[0];
const createBox = document.getElementsByClassName("create-box")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");

let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
contentArray.forEach(divMaker);

function divMaker(content){
    var div = document.createElement("div");
    var h2_question = document.createElement("h2");
    h2_question.setAttribute('style','border-top:1px solid red; padding:15px; margin-top:30px');
    var h2_answer = document.createElement("h2");
    h2_answer.setAttribute('style','ext-align:center; display:none; color:red');
    h2_question.innerHTML = content.my_question;
    h2_answer.innerHTML = content.my_answer;

    div.className = 'flashcard';
    div.appendChild(h2_question);
    div.appendChild(h2_answer);
    flashcards.appendChild(div);

    div.addEventListener("dblclick",()=>{
        if(h2_answer.style.display=="none"){
            h2_answer.style.display="block";
        }
        else if(h2_answer.style.display=="block"){
            h2_answer.style.display="none";
        }
    })
}

function addFlashcard(){
    var flashcard_info = {
        'my_question': question.value,
        'my_answer': answer.value
    }

    contentArray.push(flashcard_info);
    localStorage.setItem('items',JSON.stringify(contentArray));
    divMaker(contentArray[contentArray.length-1]);
    question.value = '';
    answer.value ='';
}

function delFlashCards(){
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
}

function showCreateCardBox(){
    createBox.style.display = "block";
}

function hideCreateBox(){
    createBox.style.display ="none";
}