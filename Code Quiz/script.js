(function(){
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // HTML radio button
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
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combines our output list into one string
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gathers quiz's answer containers
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keeps track of answers
      let numCorrect = 0;
  
      // this is for each question
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // finds answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'lightred';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "Who is Michael Jordan",
        answers: {
          a: "Hockey All-Star",
          b: "Hall of Fame Baksetball Palyer",
          c: "Prison Maker"
        },
        correctAnswer: "b"
      },
      {
        question: "What Teams did Jordan play for?",
        answers: {
          a: "Chicago Bulls, Washington Wizards, Chicago White Sox",
          b: "New York Knicks, New York Yankees, Seattle Supersonics",
          c: "Played for the FBI"
        },
        correctAnswer: "a"
      },
      {
        question: "Who designed the Jordan 3?",
        answers: {
          a: "Adi Dasler",
          b: "Matt Parker",
          c: "John Smith",
          d: "Tinker Hatfield"
        },
        correctAnswer: "d"
      },
      {
        question: "Where was Jordan Born?",
        answers: {
          a: "Willmington, NC",
          b: "Brooklyn, New York",
          c: "Chicago, IL",
          d: "Los Angeles, CA"
        },
        correctAnswer: "b"
      },
      {
        question: "What is Jordan's favorite move on court?",
        answers: {
          a: "The Dunk",
          b: "Fadeaway",
          c: "Crossover",
          d: "Finger Roll"
        },
        correctAnswer: "b"
      }
    ];
  
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(currentSlide);
  
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  