//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;
let label = document.getElementById("modeLabel");
let secLesson = document.getElementById("sec-lesson");
let startButton = document.getElementById("start-button");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.getElementById("score-container");

function updateModelLabel(checkbox) {
  if (checkbox.checked) {
    label.textContent = "Quiz Mode 📝";
    secLesson.classList.add("d-none");
    pronounce("This is quiz mode.");
    startButton.classList.remove("d-none");
  } else {
    label.textContent = "Learning Mode 👨‍🏫";
    secLesson.classList.remove("d-none");
    startButton.classList.add("d-none");
    displayContainer.classList.add("d-none");
    scoreContainer.classList.add("d-none");
  }
}

//Quiz Creation
function quizCreator() {
  quizArray.sort(() => Math.random() - 0.5);
  for (let i of quizArray) {
    i.options.sort(() => Math.random() - 0.5);
    let div = document.createElement("div");
    div.classList.add("container-mid", "d-none");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
<button class="option-div" onclick="checker(this)">${i.options[0]}</button>
<button class="option-div" onclick="checker(this)">${i.options[1]}</button>
 <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
  <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
`;
    quizContainer.appendChild(div);
  }
}

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("d-none");
  scoreContainer.classList.add("d-none");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    questionCount += 1;
    if (questionCount == quizArray.length) {
      displayContainer.classList.add("d-none");
      scoreContainer.classList.remove("d-none");
      //user score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Questions";
      //display quiz
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //d-none other cards
  quizCards.forEach((card) => {
    card.classList.add("d-none");
  });
  //display current question card
  quizCards[questionCount].classList.remove("d-none");
};

function startQuiz() {
  startButton.classList.add("d-none");
  displayContainer.classList.remove("d-none");
  initial();
}

function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}
