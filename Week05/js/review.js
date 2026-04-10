
const reviewsDisplay = document.querySelector(".reviews");


let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;


if (numReviews !== 0) {
	reviewsDisplay.textContent = numReviews;
} else {
	reviewsDisplay.textContent = `This is your first review.`
}


numReviews++;


localStorage.setItem("numReviews-ls", numReviews);