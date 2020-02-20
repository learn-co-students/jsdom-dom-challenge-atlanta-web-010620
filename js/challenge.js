document.addEventListener("DOMContentLoaded", () => {

    let favorites = [];

    let commentList = document.querySelector('#list')
    let commentForm = document.querySelector('#comment-form');
    let counter = document.querySelector('#counter');
    let plusButton = document.querySelector('#plus');
    let minusButton = document.querySelector('#minus');
    let likeButton = document.querySelector('#heart');
    let pauseButton = document.querySelector('#pause');
    let likesList = document.querySelector('.likes');

    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let value = e.target.querySelector('#comment-input').value;
        let listItem = document.createElement('li')
        listItem.innerText = value
        commentList.appendChild(listItem)
    })

    function addCounter() {
        value = parseInt(counter.innerText)
        counter.innerText = value + 1;
    }

    function minusCounter() {
        value = parseInt(counter.innerText)
        counter.innerText = value - 1;
    }

    let startTimer = setInterval(addCounter, 1000);


    pauseButton.addEventListener('click', function(e) {
        if (e.target.innerText === "pause") {
            plusButton.disabled = true;
            minusButton.disabled = true;
            likeButton.disabled = true;
            e.target.innerText = "resume"
            clearInterval(startTimer);
        } else {
            plusButton.disabled = false;
            minusButton.disabled = false;
            likeButton.disabled = false;
            e.target.innerText = "pause"
            startTimer = setInterval(addCounter, 1000);
        }
    })

    plusButton.addEventListener('click', function(e) {
        addCounter();
    })

    minusButton.addEventListener('click', function(e) {
        minusCounter();
    })

    likeButton.addEventListener('click', function(e) {
        value = parseInt(counter.innerText)
        if (typeof favorites[value - 1] === 'undefined') {
            favorites[value - 1] = 1;
            let listItem = document.createElement('li')
            listItem.innerText = `${value} has been liked ${favorites[value - 1]} times`
            listItem.id = `${value}`
            likesList.appendChild(listItem)
        } else {
            favorites[value - 1] += 1;
            let listItem = document.getElementById(`${value}`)
            listItem.innerText = `${value} has been liked ${favorites[value - 1]} times`
        }
        
    })
});