const boxes = document.querySelectorAll('.boxes');
const section = document.querySelectorAll('.sec');

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function() {
    show(i);
  });
}

function show(i){
  for (let j = 0; j < section.length; j++){
    if (i == j){
      section[j].style.display = 'block';
      boxes[j].style.backgroundColor = "green";
    }
    else{
      section[j].style.display = 'none';
      boxes[j].style.backgroundColor = "grey";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      // Get the parent <h3> and the associated answer
      const faqItem = button.closest(".faq-item");
      const answer = faqItem.querySelector(".ans");

      // Hide all answers and reset all buttons
      document.querySelectorAll(".faq-item").forEach((item) => {
        const otherAnswer = item.querySelector(".ans");
        const otherButton = item.querySelector(".toggle-btn");

        if (otherAnswer !== answer) {
          otherAnswer.style.display = "none"; // Hide other answers
          otherButton.innerHTML = "&#x25BC;"; // Reset arrow to down
        }
      });

      // Toggle the visibility of the clicked answer
      const isExpanded = answer.style.display === "block";
      answer.style.display = isExpanded ? "none" : "block";

      // Change arrow direction for the clicked question
      button.innerHTML = isExpanded ? "&#x25BC;" : "&#x25B2;"; // Down/Up arrow

      // Prevent event bubbling to parent elements
      event.stopPropagation();
    });
  });
});