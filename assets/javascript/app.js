// set up all variables 
var correctScore = 0;

var wrongScore = 0;

var unanswered = 0;

var value = "";

var answers = ["Hypertext Transfer Protocol Secured", "Elon Mask", "Momentum", "2*X", "Reflection of light"];


$(document).ready(function() {


    var audio = new Audio('MI.mp3');

    function restart() {
        location.reload();
    }

    function displayScore() {

        $("#submitButton").hide();
        $("#startButton").hide();
        $(".quizContent").hide();
        $("#restartButton").show();

        var value = $('#question1 input:radio:checked').val();


        if (value == undefined) {
            unanswered++;

        } else if (value == answers[0]) {
            correctScore++;
        } else {
            wrongScore++;
        }


        var value = $('#question2 input:radio:checked').val();


        if (value == undefined) {
            unanswered++;

        } else if (value == answers[1]) {
            correctScore++;
        } else {
            wrongScore++;
        }


        var value = $('#question3 input:radio:checked').val();


        if (value == undefined) {
            unanswered++;

        } else if (value == answers[2]) {
            correctScore++;
        } else {
            wrongScore++;
        }


        var value = $('#question4 input:radio:checked').val();


        if (value == undefined) {
            unanswered++;

        } else if (value == answers[3]) {
            correctScore++;
        } else {
            wrongScore++;
        }


        var value = $('#question5 input:radio:checked').val();


        if (value == undefined) {
            unanswered++;

        } else if (value == answers[4]) {
            correctScore++;
        } else {
            wrongScore++;
        }


        $("#correctScore").html("Correct Answers: " + correctScore);
        console.log(correctScore);
        if (correctScore >= 4) {
            $("#smartAss").html("IQ is over 9000! Smart ass!  ");
            $("#smartAss").append("<img src='assets/images/smartass.jpg'>");
        }

        $("#wrongScore").html("Wrong Answers: " + wrongScore);
        console.log(wrongScore);
        if (wrongScore >= 2) {

            $("#badAss").html("How the... How did you do that ?!  ");
            $("#badAss").append("<img src='assets/images/badass.jpg'>");
        }

        $("#unanswered").html("Unanswered Questions: " + unanswered);
        console.log(unanswered);
    }


    function start() {

        audio.play();
        $("#submitButton").show();
        $(".quizContent").show();
        $("#startButton").hide();
        $("#des").hide();


        var countDown = 30;

        var counter = setInterval(timer, 1000);

        function timer() {
            countDown = countDown - 1;
            $("#timer").html("Hurry, only " + countDown + " seconds left~");
            if (countDown <= 0) {
                clearInterval(counter);

                displayScore();
            }

        }

    };



    $('#startButton').on('click', function() {
        start();

    });

    $('#submitButton').on('click', function() {
        displayScore();

    });

    $('#restartButton').on('click', function() {
        restart();

    });

    $(".quizContent").hide();
    $("#restartButton").hide();
    $("#submitButton").hide();



});