
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------
  const myQuestions = [
    {
      question: "At the end of the combustion phase, what is the approximate pressure in Diesel engines?",
      answers: {
        a: "20 bar",
        b: "25 bar",
        c: "30 bar",
        d: "35 bar"
      },
      correctAnswer: "d"
    },
    {
      question: "What is the relationship between compression ratio rk, expansion ratio re, and the cut-off ratio rc?",
      answers: {
        a: "rc = rk*re",
        b: "rk = rc*re",
        c: "re = rc*rk",
        d: "None of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "If P1 = 4.61 kPa and the compression ratio is 4.9, what is P3 for an air standard Diesel cycle?",
      answers: {
        a: "35 kPa",
        b: "40 kPa",
        c: "50 kPa",
        d: "55 kPa"
      },
      correctAnswer: "c"
    },
    {
      question: "If the compression ratio of the Diesel cycle is 5.39 and the cut-off ratio is 3.07, what is the air standard efficiency of the cycle?",
      answers: {
        a: "0.43",
        b: "0.39",
        c: "0.25",
        d: "0.17"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following is true about compression ignition engines?",
      answers: {
        a: "They have higher mechanical efficiency",
        b: "They have higher thermodynamic efficiency",
        c: "They have higher volumetric efficiency",
        d: "All of the above"
      },
      correctAnswer: "d"
    }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
