function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

const remarks = [
    "Very Poor",
    "Poor",
    "Average",
    "Good",
    "Perfect"
]

const gifs = [
    "vpoor.gif",
    "poor.gif",
    "average.gif",
    "good.gif",
    "perfect.gif"
]

function getScoreID(score) {
    if (score == 0) {
        return 0;
    }
    else if (score >= 1 && score < 3) {
        return 1;
    }
    else if (score == 3) {
        return 2;
    }
    else if (score > 3 && score < 6) {
        return 3;
    }
    else if (score >= 6) {
        return 4;
    }
}

const score = getUrlParameter('score');
const remark = remarks[getScoreID(score)];

document.getElementById("score").innerHTML = "Score: " + score;
document.getElementById("remark").innerHTML = remark;
document.getElementById("score-gif").src = "./gifs/" + gifs[getScoreID(score)];
