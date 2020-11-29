var question = true

questionno = 0 

flip = () => {
    if (question == true) {
        question = false;
        document.getElementById("what").style.backgroundColor = "#191919";
        document.getElementById("maintext").style.color = "#eeeeee";
    }
    else {
        question = true;
        document.getElementById("what").style.backgroundColor = "#ffffff";
        document.getElementById("maintext").style.color = "#191919";
    }
    update();
} 

next = () => {
    questionno++; 
    if (questionno == questions.length) {
        questionno = 0; 
    };
    console.log("questionno = " + questionno);
    update();
} 
rand = () => {
    questionno = Math.floor(Math.random() * questions.length);
    console.log("questionno = " + questionno);
    update();
} 

update = () => {
    if (question == true) {
        document.getElementById("maintext").innerHTML = questions[questionno]
    }
    if (question == false) {
        document.getElementById("maintext").innerHTML = answers[questionno]
    }
} 