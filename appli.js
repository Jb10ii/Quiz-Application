const userInputOne = document.getElementsByName("num1");
const userInputTwo = document.getElementsByName("num2");
const userInputThree = document.getElementsByName("num3");
const userInputFour = document.getElementsByName("num4");
const userInputFive = document.getElementsByName("num5");
const userInputSix = document.getElementsByName("num6");
const userInputSeven = document.getElementsByName("num7");
const userInputEight = document.getElementsByName("num8");
const userInputNine = document.getElementsByName("num9");
const userInputTen = document.getElementsByName("num10");
const userAnswers = document.getElementsByClassName("Answer");
const userBtn = document.getElementById("btn");
const scoreDisplay = document.getElementById("scoreDisplay"); 
const userGpaInput = document.getElementById("gradeInput");
const userGpaScore = document.getElementById("gpaFeedback");

userBtn.addEventListener('click', () => {
    const answers = ['D', 'A', 'B', 'D', 'B', 'B', 'C', 'B', 'D', 'C'];
    let score = 0;

    
    const getselectedChoice = (radioButtons) => {
        for (let i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                return radioButtons[i].value;
            }
        }
        return null; 
    };

    
    const checkAnswer = (questionNumber, userInput, correctAnswer) => {
        const selectedChoice = getselectedChoice(userInput);
        const answerDisplay = userAnswers[questionNumber];
        if (selectedChoice === correctAnswer) {
            answerDisplay.textContent = "Correct!";
            answerDisplay.style.color = "green"
            score++;
        } else {
            answerDisplay.textContent = `Wrong! Correct answer: ${correctAnswer}`;
            answerDisplay.style.color = "red"; 
        }
    };


   
    checkAnswer(0, userInputOne, answers[0]);
    checkAnswer(1, userInputTwo, answers[1]);
    checkAnswer(2, userInputThree, answers[2]);
    checkAnswer(3, userInputFour, answers[3]);
    checkAnswer(4, userInputFive, answers[4]);
    checkAnswer(5, userInputSix, answers[5]);
    checkAnswer(6, userInputSeven, answers[6]);
    checkAnswer(7, userInputEight, answers[7]);
    checkAnswer(8, userInputNine, answers[8]);
    checkAnswer(9, userInputTen, answers[9]);



    scoreDisplay.textContent = `Your score is: ${score} / 10`;


    const calculateGpa = () => {
        const userGpa = parseFloat(userGpaInput.value); 
    
        
        if (isNaN(userGpa)) {
            userGpaScore.textContent = "Please enter a valid grade.";
            return;
        }
    
        
        if (userGpa  >= 0 && userGpa < 5) {
            userGpaScore.textContent = "You have failed.";
        } else if (userGpa  >= 5 && userGpa  < 7) {
            userGpaScore.textContent = "You have an average score.";
        } else if (userGpa  >= 7 && userGpa  <= 10) {
            userGpaScore.textContent = "You have an above-average score.";
        } else {
            userGpaScore.textContent = "Invalid score. Please enter a grade between 0 and 10.";
        }
    }  
   
    const calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.addEventListener('click', calculateGpa);
    
});
