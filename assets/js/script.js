var timer = 75;
var questionInd = 0;

var questions = ["The condition of an if/else statement must be surrounded by what syntax?", "test"];
var answers = [
    {0: "a. Curly Brackets {}", 1: "b. Parenthesese ()", 2: "c. Quotations ''", 3: "d. Straight Brackets []", 4: 1},
    {0: "test"}
];

var pickQuestion = function() {
    var question;
    var answer;
    for (var i = 0; i < questions.length; i++) {
        question = questions[i];
        answer = answers[i];
        console.log(question + answer);
        $(".quiz-title").html(question);
        $(".quiz-content").html(
            "<button id='answer-1' class='bg-darkpurple text-light quiz-button badge-pill' >" + answer[0] + "</button> <br />" +
            "<button id='answer-2' class='bg-darkpurple text-light quiz-button badge-pill' >" + answer[1] + "</button> <br />" +
            "<button id='answer-3' class='bg-darkpurple text-light quiz-button badge-pill' >" + answer[2] + "</button> <br />" +
            "<button id='answer-4' class='bg-darkpurple text-light quiz-button badge-pill' >" + answer[3] + "</button> <br />"
            );

        checkAnswer(answer);

    }
};

var checkAnswer = function(answer) {
    $('.quiz-button').on("click", function(event){
        event.preventDefault;
        var userChoice = $(this).attr("id").replace("answer-", "");
        console.log(userChoice);
        if (userChoice == answer[4]) {
            console.log("win");
        }
        else if (userChoice != answer[4]) {
            console.log("lose");
        };
    });
}

$("#start-quiz").on("click", function(event) {
    event.preventDefault();
    pickQuestion();
});