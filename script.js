const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yessss yuhooo congratulations you won a diamond shaury tripathi your rare diamond is Astha Tripathi";
  gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbndwYW1wMWhrbHlkcHQzOHlqajl3MGswNmpnNjZvb3JlOTRoZWpwMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9G0AdBbVrkV3O/giphy.gif";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
