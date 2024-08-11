document.addEventListener("DOMContentLoaded", function() {
    const likeButton = document.getElementById("like-button");
    const likeCount = document.getElementById("like-count");

    let count = 0;

    likeButton.addEventListener("click", function() {
        count++;
        likeCount.textContent = count;
    });
});
