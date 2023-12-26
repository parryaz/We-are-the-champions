import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL : 'https://we-are-the-champ-default-rtdb.europe-west1.firebasedatabase.app/'
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const commentListInDB = ref(database, "commentList");
const inputEl = document.getElementById('input-say');
const publishBtnEl = document.getElementById("publish-btn");
const listEl = document.getElementById('comment-list');

publishBtnEl.addEventListener('click', function(){
    let inputValue = inputEl.value 
    push(commentListInDB, inputValue)

    clearInputField()
})

onValue(commentListInDB, function(snapshot){
    if(snapshot.exsits()){
        let itemArray = Object.entries(snapshot.val())


        for(let i=0; i< itemArray.length ; i++){
            let currentComment = itemArray[i]
            let currentCommentID = itemArray[0]
            console.log(currentCommentID)
        }
    }
})


function clearCommentListEl(){
    listEl.innerHTML = ''
}
function clearInputField(){
    inputEl.value = ''
}