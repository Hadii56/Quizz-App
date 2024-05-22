const questions = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
];

let index = 0;
let total = questions.length
let right = 0,
    wrong = 0;
const quebox = document.getElementById("quebox")
const optioninputs = document.querySelectorAll(`.options`)
function loadquestions() {
    if (index === total) {
        return endquiz()
    }
    reset();
    const data = questions[index]
    console.log(data)
    quebox.innerText = `${index + 1})${data.question}`
    optioninputs[0].nextElementSibling.innerText = data.a;
    optioninputs[1].nextElementSibling.innerText = data.b;
    optioninputs[2].nextElementSibling.innerText = data.c;
    optioninputs[3].nextElementSibling.innerText = data.d;

}
function submitquiz() {
    const data = questions[index]
    const ans = getanswer()
    if (ans === data.correct) {
        right++;
    } else {
        wrong++
    }
    index++;
    loadquestions();
    return;
}
function getanswer() {
    let answer;
    optioninputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

function reset() {
    optioninputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

function endquiz() {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3>ThankYou for Solving the Quizz</h3>
    <h2>${right}/${total} are Correct</h2>
    </div>
    `
}
loadquestions();