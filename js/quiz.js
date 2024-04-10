var questionCount = 6;
const form = document.getElementById("form");
var allQuestionsAnswered = true;

console.log(form);

const answers = [
    1, 
    5, 
    8, 
    12, 
    14, 
    15
];

function calc_score() {
    var score = 0;

    for (var i = 0; i < questionCount; i++){
        var radios = document.getElementsByName("Question " + (i + 1));

        for (var index = 0; index < radios.length; index++) {
            if (radios[index].checked) {
                if (radios[index].value == answers[i]) {
                    score += 1;
                }
            }
        }
    }

    console.log("test");
    window.location.href = "score_display.html?score=" + score;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    allQuestionsAnswered = true;

    for (var i = 0; i < questionCount; i++){
        var radios = document.getElementsByName("Question " + (i + 1));

        var questionAnswered = false;

        for (var index = 0; index < radios.length; index++) {
            if (radios[index].checked) {
                questionAnswered = true;
            }
        }

        if (questionAnswered == false) {
           alert("Question " + (i + 1) + " not answered");
           allQuestionsAnswered = false;
           break;
        }
    }

    if (allQuestionsAnswered == true) {
        calc_score();
    }
})