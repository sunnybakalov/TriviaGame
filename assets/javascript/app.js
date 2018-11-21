$(document).ready(function () {

//object needed for the answer to each question.
var answer = {
    question1: {
        question: "Which of these players has won the most championships?",
        choices: ["Michael Jordan", "Kobe Bryant", "Bill Russell", "Kevin Durant"],
        answer: 2
    },
    question2: {
        question: "Which of these players has only made one 3 point shot in their entire career?",
        choices: ["Kemba Walker", "Shaquille O'Neal", "Klay Thompson", "Rudy Gobert"],
        answer: 1
    },
    question3: {
        question: "Which team has never won an NBA championship?",
        choices: ["Cleveland Cavaliers", "Detroit Pistons", "Denver Nuggets", "New York Knicks"],
        answer: 2
    },
    question4: {
        question: "Which of these players has the most 60 point games?",
        choices: ["Kareem Abdul Jabbar", "Kobe Bryant", "Wilt Chamberlain", "Larry Bird"],
        answer: 2
    },
    question5: {
        question: "Who is the only player to ever average a triple double in more than 1 season?",
        choices: ["Oscar Robertson", "Derrick Rose", "Magic Johnson", "Russell Westbrook"],
        answer: 3
    }
}

//variable for beginning score
var score = 0;

//variables 
var question = $("#question");
var choice1 = $("#answer1");
var choice2 = $("#answer2");
var choice3 = $("#answer3");
var choice4 = $("#answer4");

//variable for the user's choice(click)

//slides
//need to have an on click function for the answer that the user chooses on each slide
//if statement on each slide. if (userChoice === rightAnswer) {$().html("Correct!") }

//there needs to be a 30 second countdown function that can be applied to each slide

}