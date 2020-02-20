let counter = document.querySelector("#counter");
let counterValue = counter.innerHTML; 

// button variables 
const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")

// button listeners 
plus.addEventListener('click', function(){
    counterValue +=1; 
    counter.innerHTML = counterValue;
})

minus.addEventListener('click',function(){
    counterValue -=1; 
    counter.innerHTML = counterValue; 
})

let runTimer = true; 
// run every second while the runTimer variable is true 
window.setInterval(function(){
    if (runTimer) {
        counterValue = parseInt(counterValue)+1;
        counter.innerHTML = counterValue; 
    }}, 1000); 


// comment box 
// variables 
const commentForm = document.querySelector("#comment-form"); 

commentForm.addEventListener('submit', function(e){
    e.preventDefault(); 
    const textInput = e.target.querySelector("#comment-input"); 
    // create the ul if it's not already there 
    if (document.querySelector("#commentList") === null){
        const commentList = document.createElement("ul"); 
        commentList.id = "commentList"
        commentForm.appendChild(commentList); 
    }
    // append the comment to the list 
    const newListItem = document.createElement("li"); 
    newListItem.innerText = textInput.value; 
    commentList.appendChild(newListItem); 
    textInput.value = "";
});

// pause button 
const pauseButton = document.querySelector("#pause"); 
const buttons = document.querySelectorAll("button"); 

pauseButton.addEventListener('click',function(e){
    if (runTimer){
        runTimer = false; 
        // buttons.forEach(button => button.disabled = true); 
        buttons.forEach(button => button.disabled = true);
        pauseButton.disabled = false; 
        pauseButton.innerHTML = "resume"
    }else{
        runTimer = true; 
        buttons.forEach(button => button.disabled = false); 
        pauseButton.innerHTML = "pause"
        counterValue = 0; 
    }
})

// like button 
const heartButton = document.querySelector("#heart"); 
// create an object to store the number and their likes in 

const likesObj = {}; 

heartButton.addEventListener('click',function(e){
    if (likesObj[counter.innerHTML] === undefined){
        likesObj[counter.innerHTML] = 1; 
        console.log(likesObj)
    }else{
        likesObj[counter.innerHTML]+=1; 
    }
    console.log(`${counter.innerHTML} has ${likesObj[counter.innerHTML]} likes`)
    // list each number and its likes as li in the ul 
    // likesObj.forEach(function(like){

    // clear the li 
    likesList.innerHTML = ""; 
    for (const like in likesObj){
        // debugger; 
        let newLi = document.createElement('li'); 
        // let numberLikes = likesObj[counter.innerHTML]; 
        newLi.innerHTML = `The number ${like} has ${likesObj[like]} likes`; 
        likesList.appendChild(newLi); 
    }; 
    // })
    
    // make listing for this number if it doesn't exist yet 
    // if (document.querySelector(`likeListing${counter.innerHTML}`) === null){
    //     let newLikeListing = document.createElement('li'); 
    //     newLikeListing.id = `likeListing${counter.innerHTML}`; 
    //     newLikeListing.innerHTML = `The number ${counter.innerHTML} has 1 like`; 
    //     likesList.appendChild(newLikeListing); 
    // }else{
    //     let likeListing = document.querySelector(`likeListing${counter.innerHTML}`)
    //     likeListing.innerHTML = 
    // }
}) 


// make a list of the numbers and their likes 
const likesList = document.createElement('ul'); 
likesList.id = "likesList"
commentForm.appendChild(likesList)
