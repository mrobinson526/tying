/* Objective 1:  On Load, only show lower case keyboard
$(document).ready(function() {
    $('#keyboard-upper-container').hide();
    $('#keyboard-lower-container').show();
}); */
/* Objective 2: Toggle Shift key to show/hide lower keyboard */
let lower = getDocumentById("keyboard-lower-container");
let upper = getDocumentById("keyboard-upper-container");
document.addEventListener('keydown', function(event) {
    if (event.shiftKey) {
        $("lower").hide()
        $("upper").show()
    } else {
        $("upper").hide()
        $("lower").show()
    }
});
function event() {
    $("#target").toggle();  
}  

/* Objective: Highlight character pressed on keyboard */
$(container.target).keypress(function(event) {
    var keycode = event.keyCode || event.which;
    if(keycode == '#target') {
        $("#target").css("color", "yellow");
    }
});
/* Objective: Sentences in array displayed at top of page (one sentence at a time) */
document.ready(function() {
    let sentences = [
        "ten ate neite ate nee ente ite ate inet ent eate",
        "Too ato too n0t enot one totA not anot t00 aNot",
        "oat itai oat tain nate eate tea ann inant nean",
        "itant eate anot eat nato inate eat anot tain eat",
        "new ene ate ite tent tiet ent ine ene ete ene ate",
    ];
    let letterIndex = 0;
    let sentenceIndex = 0;
    let currentLetterDiv = $("#next-letter");
    currentLetterDiv.text(currentLetter);
    $("#words").append(sentences[sentenceIndex]);
    let currentSentence = sentences[0];
    let currentLetter = currentSentence[0];
    var start;
    var finish;
    var errors = 0;

    $("#sentence").append(currentSentence);
    $("next-letter").append(currentLetter);
    $("keyboard-upper-container").hide();

    $(document).keydown(function(event) {
        var keyDown = event.which;
        if (keyDown === 16) {
            $("#keyboard-upper-container").show();
            $("#keyboard-lower-container").hide();
        }
    })
    $(document).keyup(function(event) {
        var keyUp = event.which;
        if (keyUp === 16) {
             $("#keyboard-upper-container").hide();
             $("#keyboard-lower-contaier").show();   
            }
            $('.highlight').removeClass('highlight');
   });
   $(document).keypress(function(event) {
        var keyPress = event.which;
        $("#" + keyPress).addClass("highlight");
        var currentSentence = sentences[sentenceIndex];
        var currentLetter = currentSentence[letterIndex];

        if (start == undefined) {
            start = event.timeStamp;
        }
        $("#highlightBlock").css("left", "+=17.5px");
        letterIndex++;
        var nextLetter = currentSentence[letterIndex];
        currentLetterDiv.text(nextLetter);
        if (letterIndex < currentSentence.length - 1) {
            if (event.which === currentLetter.charCodeAt()) {
                $("#feedback").append("<span class = 'glyphicon glyphicon-remove'></span>");
                errors++;
            }
        }
        if (letterIndex == currentSentence.length) {
            $("#sentence").empty();
            sentenceIndex++;
            currentSentence=sentences[sentenceIndex];
            $("#sentence").append(sentences[sentenceIndex]);
            letterIndex = 0;
            if (sentenceIndex < sentences.length - 1) {
                var nextLetter = currentSentence[letterIndex];
            }
            currentLetterDiv.text(nextLetter);
            $("#highlightBlock").css({left: 17});
            $("#feedback").empty();
        }
        if (sentenceIndex > sentences.length - 1) {
            finish = event.timeStamp;
            var time = (finish-start);
            time /= 60000;
            var speed = Math.round((54 / time) - (errors * 2));
            $("#next-letter").text("Your score is " + speed + " words per minute");
            setTimeout(function () {
                var tryAgain = confirm("Do you want to try again?");
                if (tryAgain == true) {
                    window.location.reload();
                } else {
                    return;
                };
                }, 4000);
            };
        })
   });


}
l

