// inputs
let reviewForm = document.querySelector("#reviewForm");
let clientName = document.querySelector("#clientName");
let clientReview = document.querySelector("#clientReview");
let rating = document.querySelector("#rating");
let rate = document.getElementsByName("rate");
let orig3rdCard = document.querySelector("#orig3rdCard");

// button
let reviewSendBtn = document.querySelector("#reviewSendBtn");

// display
// let reviewsDiv = document.querySelector(".reviewsDiv");
let top3Rev = document.querySelector("#top3Rev");
let next3Rev = document.querySelector("#next3Rev");

// event listener
reviewSendBtn.addEventListener("click", managePost)

function managePost(e) {
    e.preventDefault();

    createCard();
    cloneReview();
    removeExcessCard();
    reviewForm.reset();
    
}

// create card *********************************************************************  
function createCard() {

    // create elements
    let cardDiv = document.createElement('div');
    cardDiv.setAttribute("class", "card");

    let cardBodyDiv = document.createElement('div');
    cardBodyDiv.setAttribute("class", "card-body text-center");

    let h1 = document.createElement('h1');
    h1.setAttribute("class", "card-title display-1");

    let h6 = document.createElement('h6');
    h6.setAttribute("class", "card-subtitle mb-2 text-muted");

    let h5 = document.createElement('h5');
    h5.setAttribute("class", "card-subtitle mb-2 text-muted");

    let pDate = document.createElement('p');
    pDate.setAttribute("class", "card-subtitle mb-2 text-muted");

    let p = document.createElement('p');
    p.setAttribute("class", "card-text");

    // define element content
    h1.innerHTML = `<i class="fa-solid fa-quote-right"></i>`;
    h6.innerHTML = getRating();
    h5.innerText = clientName.value;
    pDate.innerText = currentDate();
    p.innerText = clientReview.value;

    // newDiv.className = "new-div";

    // insert as first card
    top3Rev.insertBefore(cardDiv, top3Rev.firstElementChild);
    cardDiv.appendChild(cardBodyDiv);
    cardBodyDiv.appendChild(h1);
    cardBodyDiv.appendChild(h6);
    cardBodyDiv.appendChild(h5);
    cardBodyDiv.appendChild(pDate);
    cardBodyDiv.appendChild(p);
    
    // removeExcessCard();
}
// create card *********************************************************************

// clone orig 3rd card to next screen **********************************************
function cloneReview() {
    let clonedPost = top3Rev.lastElementChild.cloneNode(true);
    clonedPost.removeAttribute("id","");
    clonedPost.setAttribute("id","cloned");
    next3Rev.insertBefore(clonedPost, next3Rev.firstElementChild);
    
}
// clone orig 3rd card to next screen **********************************************

// remove card *********************************************************************
function removeExcessCard() {
    let top3RevTotal = top3Rev.childElementCount;
    let next3RevTotal = next3Rev.childElementCount;
    let maxCards = 3;

    if(top3RevTotal > maxCards) {
        top3Rev.removeChild(top3Rev.lastElementChild);
    }

    if(next3RevTotal > maxCards) {
        next3Rev.removeChild(next3Rev.lastElementChild);
    }
}
// remove card *********************************************************************

// get rating value ****************************************************************
function getRating() {
    let printStar = "";
    for (let star of rate) {
        if (star.checked) {
            console.log(star.value);
            
            for (let s = 1; s <= star.value; s++){
                printStar += `<i class="fa-solid fa-star starv1"></i>`;
            }
        }
    }
    return printStar;
}
// get rating value ****************************************************************

// Date format *********************************************************************
function currentDate() {
    
    let today = new Date();
    let day = today.getDate();
    let MM = today.getMonth();
    let year = today.getFullYear();
    let hr = today.getHours();
    // hr = hr || 12; 
    let mm = today.getMinutes();
    mm = mm < 10 ? `0${mm}` : mm;
    let ss = today.getSeconds();
    let ampm = hr >= 12 ? 'pm' : 'am';
    hr %= 12;

    const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    return month[MM] +" "+ day +", "+ year + " " + hr + ":" + mm + ":" + ss + " " + ampm;
}
// Date format *********************************************************************
