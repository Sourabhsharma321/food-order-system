// about use review slider

let reviews = document.querySelectorAll('.review-wrapper');

let currentReviews = [0, 2];

let updateReviewSlider = (cards) => {

    cards.forEach((cards_index) => {
        reviews[cards_index].classList.add('active');
    })
}

setInterval(() => {
    currentReviews.forEach((cards_index, i) => {
        reviews[cards_index].classList.remove('active');

        currentReviews[i] = cards_index >= reviews.length - 1 ? 0 : cards_index + 1;
    })

    setTimeout(() => {
        updateReviewSlider(currentReviews);
    }, 250)

}, 4000)

updateReviewSlider(currentReviews)

//fag
let faqs = [...document.querySelectorAll('.faq')];

faqs.map(faq => {
    let ques = faq.querySelector('.question-box');

    ques.addEventListener('click', () => {
        faq.classList.toggle('active');
    })
})

//dish slider

let dishSlider = document.querySelector('.dish-slide');

let rotationVal = 0;

setInterval(() => {

    rotationVal += 120;

  dishSlider.style.transform = 'translateY(-50%) rotate(${rotationVal}deg)';

},3000)