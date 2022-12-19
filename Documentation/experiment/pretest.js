
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
    question: "The Diesel cycle is employed for which type of engine?",
    answers: {
      a: "Spark ignition engine",
      b: "Compression ignition engine",
      c: "Both of the above"
    },
    correctAnswer: "b"
  },

  {
    question: "The typical compression ratio of the Diesel cycle is in the range:",
    answers: {
      a: "5-10",
      b: "10-15",
      c: "15-20",
      d: "20-25"
    },
    correctAnswer: "c"
  },

  {
    question: "The Diesel cycle consists of:",
    answers: {
      a: "Two isochores and two reversible adiabatic curves",
      b: "Two isobars and two isothermal curves",
      c: "One isochore, one isobar, and two reversible adiabatic curves",
      d: "One isochore, one isobar, and two isothermal curves"
    },
    correctAnswer: "c"
  },
  {
    question: "In the Diesel cycle, how is the fuel ignited for the combustion process?",
    answers: {
      a: "Spark plug",
      b: "Heat produced by compressed air",
      c: "Fuel injector pump",
      d: "Combustion valve"
    },
    correctAnswer: "b"
  },
  {
    question: "The efficiency of a Diesel cycle can be increased by:",
    answers: {
      a: "Increasing the cut-off ratio",
      b: "Decreasing the cut-off ratio",
      c: "Increasing the temperature",
      d: "Decreasing the temperature"
    },
    correctAnswer: "b"
  }
];





// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
