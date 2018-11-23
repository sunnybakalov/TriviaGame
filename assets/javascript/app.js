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

  var number = 0;

  //variables
  var timer = $("#timer");
  var question = $("#question");
  var choice1 = $("#answer1");
  var choice2 = $("#answer2");
  var choice3 = $("#answer3");
  var choice4 = $("#answer4");

  //start button
  var startBtn = $("#startBtn");

  //variable that will hold our interval ID when we execute
  var intervalId;

  //timer seconds variable.
  var seconds = 21;

  var isGameStarted = false;

  //the function that keeps the timer running
  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  //the function that counts down
  function decrement() {
    //decrease timer by 1
    seconds--;
    $("#timer").html(seconds + " seconds remaining");
    if (seconds === 0) {
      stop();
      alert("time is up!");
      wrong++;
      //THIS IS WHERE THE CORRECT ANSWER NEEDS TO BE DISPLAYED
    }
  }

  //the stop function that clears our intervalId
  function stop() {
    clearInterval(intervalId);
  }

  function displayResult() {
    timer.hide();
    question.hide();
    choice1.hide();
    choice2.hide();
    choice3.hide();
    choice4.hide();
  }

  //the function that populates the current question and the answer choices on the screen

  function populate() {
    question.text(answer[0].question);
    choice1.text(answer[0].choices[0]);
    choice2.text(answer[0].choices[1]);
    choice3.text(answer[0].choices[2]);
    choice4.text(answer[0].choices[3]);
  }



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
      decrement();
      populate();

      if (seconds >= 1) {
        console.log("the game is still going");
        // if ()
      }
    }
    if($(".btn").click() === answer[i].answerIndex) {
        score++;
    }
  });

  //slides
  //need to have an on click function for the answer that the user chooses on each slide
  //if statement on each slide. if (userChoice === rightAnswer) {$().html("Correct!") }

  //there needs to be a 30 second countdown function that can be applied to each slide
});
