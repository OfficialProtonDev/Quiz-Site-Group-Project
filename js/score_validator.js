const answers = [
    "", 
    "", 
    "", 
    "", 
    "", 
    ""
];

function calc_score() {
    var score = 0;
    var currAnswer = 0;

    var radios = document.getElementsByName('option');

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            if (radios[i].value == answers[currAnswer]) {
                score += 1;
            }
            
            currAnswer += 1;
        }
    }
    
    window.location.href = "score_display.html?score=" + score;
}