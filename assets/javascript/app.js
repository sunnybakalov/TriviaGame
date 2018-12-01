$(document).ready(function() {
  //object needed for the answer to each question.
  var answer = [
    {
      question: "Which of these players has won the most championships?",
      choices: [
        "Michael Jordan",
        "Kobe Bryant",
        "Bill Russell",
        "Kevin Durant"
      ],
      answerIndex: 2
    },
    {
      question:
        "Which of these players has only made one 3 point shot in their entire career?",
      choices: [
        "Kemba Walker",
        "Shaquille O'Neal",
        "Klay Thompson",
        "Rudy Gobert"
      ],
      answerIndex: 1
    },
    {
      question: "Which team has never won an NBA championship?",
      choices: [
        "Cleveland Cavaliers",
        "Detroit Pistons",
        "Denver Nuggets",
        "New York Knicks"
      ],
      answerIndex: 2
    },
    {
      question: "Which of these players has the most 60 point games?",
      choices: [
        "Kareem Abdul Jabbar",
        "Kobe Bryant",
        "Wilt Chamberlain",
        "Larry Bird"
      ],
      answerIndex: 2
    },
    {
      question:
        "Who is the only player to ever average a triple double in more than 1 season?",
      choices: [
        "Oscar Robertson",
        "Derrick Rose",
        "Magic Johnson",
        "Russell Westbrook"
      ],
      answerIndex: 3
    },
    {
      question: "Which player has the most missed shots in NBA history?",
      choices: ["Lebron James", "JR Smith", "Draymond Green", "Kobe Bryant"],
      answerIndex: 3
    },
    {
      question: "Who is the youngest player to ever win the MVP award?",
      choices: [
        "Derrick Rose",
        "LeBron James",
        "Michael Jordan",
        "Kobe Bryant"
      ],
      answerIndex: 0
    },
    {
      question: "How long is a regulation NBA game",
      choices: ["40 minutes", "35 minutes", "48 minutes", "60 minutes"],
      answerIndex: 2
    },
    {
      question: "What player was the inspiration behind the NBA logo?",
      choices: [
        "Jerry West",
        "Hakeem Olajuwon",
        "Elgin Baylor",
        "Michael Jordan"
      ],
      answerIndex: 0
    },
    {
      question:
        "Who was the first foreign-born NBA player to become league MVP?",
      choices: [
        "Toni Kukoc",
        "Dirk Nowitzki",
        "Pau Gasol",
        "Kristaps Porzingis"
      ],
      answerIndex: 1
    }
  ];

  //variable for beginning score
  var score = 0;
  //variable for wrong guesses
  var wrong = 0;
  //variable that keeps track of the question we are on. it increments by 1 with each turn.
  var number = 0;
  //variables
  var timer = $("#timer");
  var question = $("#question");
  var choice1 = $("#answer1");
  var choice2 = $("#answer2");
  var choice3 = $("#answer3");
  var choice4 = $("#answer4");
  var result1 = $("#result1");
  var result2 = $("#result2");
  var result3 = $("#result3");
  var startBtn = $("#startBtn");

  //variable that will hold our interval ID when we execute
  var intervalId;

  //timer seconds variable.
  var seconds = 15;

  var isGameStarted = false;

  //the function that clears the intervalId and keeps the timer running
  function run() {
    seconds = 15;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  };

  //the function that counts down and checks if the user ran out of time
  function decrement() {
    $("#timer").html(seconds + " seconds remaining");
    --seconds;
    //this is where we check if the user ran out of time
    if (seconds <= 0) {
      stop();
      wrong++;
      hideStuff();
        result1.text("Time's up!");
        result2.text("The correct answer is: " + answer[number].choices[answer[number].answerIndex]);
        result3.text(answer[number].choices[answer[number].answerIndex]);
      setTimeout(function() {
        number++;
        populate();
        run();
      }, 4000);
      
    }
  };

  //the stop function that clears our intervalId
  function stop() {
    seconds = 15;
    clearInterval(intervalId);
  };

  //this function hides the timer, question, and answer choices.
  function hideStuff() {
    timer.hide();
    question.hide();
    choice1.hide();
    choice2.hide();
    choice3.hide();
    choice4.hide();
  };

  //this function reveals if the user's choice was correct after each question
  function displayResult() {
      if (buttonIndex === answer[number].answerIndex) {
        result1.text("Correct!");
        result2.text("The correct answer is: " + answer[number].choices[answer[number].answerIndex]);
      } else {
        result1.text("Wrong!")
        result2.text("The correct answer is: " + answer[number].choices[answer[number].answerIndex]);
      }
  };

  //this function is displayed at the end of the game and shows the user's results.
  function endGame() {
    result1.text("Game Over");
    result2.text("You got " + score + " out of " + number + " correct!");
    if (score >= 5) {
      result3.text("Good Job!");
    } else {
      result3.text("Good effort! Try again!");
    }
  };

  //the function that populates the current question and the answer choices on the screen
  function populate() {
    question.text(answer[number].question);
    choice1.text(answer[number].choices[0]);
    choice2.text(answer[number].choices[1]);
    choice3.text(answer[number].choices[2]);
    choice4.text(answer[number].choices[3]);
    timer.show();
    question.show();
    choice1.show();
    choice2.show();
    choice3.show();
    choice4.show();
    result1.empty();
        result2.empty();
            result3.empty();
  };

  function isGameStillGoing() {
    if (number === answer.length) {
      console.log("out of questions");
      console.log(number);
      console.log(wrong);
      console.log(score);
      hideStuff();
    //   displayResult();
      endGame();
    } else {
      setTimeout(function() {
        populate();
        run();
      }, 4000);
      console.log(number);
      console.log(wrong);
      console.log(score);
    }
  };

  //function that starts the game when you click the Start Button
  $("#startBtn").click(function() {
    if (isGameStarted === false) {
      isGameStarted = true;
      timer.show();
      question.show();
      choice1.show();
      choice2.show();
      choice3.show();
      choice4.show();
      startBtn.hide();
      run();
      populate();
    }
  });

  //user clicks button
  $("#buttonContainer").on("click", ".bBallBtn", function(event) {
    console.log(event.target);

    //this is how we tell what button the user clicked on
    var buttonIndex = $(this).attr("data-index");

    console.log(parseInt(buttonIndex));
    buttonIndex = parseInt(buttonIndex);
    //get data index value so we can have that as an index to see if the user got right answer
    //number keeps track of what question the user is on
    //we can use the number to get the right question
    //check if the data-index === answerIndex
    if (buttonIndex === answer[number].answerIndex) {
      //show some html to the screen to show the user that they got the answer right
      //display results
      //user gets new question
      //stop timer
      stop();
      score++;
      hideStuff();
        result1.text("Correct!");
        result2.text("The correct answer is: ");
        result3.text(answer[number].choices[answer[number].answerIndex]);
      console.log("Correct!!");
      console.log(answer[number].choices[answer[number].answerIndex]);
      number++;
      isGameStillGoing();
    } else {
      console.log("Wrong answer!!");
      stop();
      wrong++;
      hideStuff();
        result1.text("Wrong!");
        result2.text("The correct answer is: ");
        result3.text(answer[number].choices[answer[number].answerIndex]);
      number++;
      isGameStillGoing();
    }
  });
});
