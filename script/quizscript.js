// --------------------------------------------- Quiz page coding --------------------------------------------------------------
// Questions will be asked
const Questions = [{
    id: 0,
    q: "In 1768, Captain James Cook set out to explore which ocean?",
    a: [{ text: "Atlantic Ocean", isCorrect: false },
        { text: "Indian Ocean", isCorrect: false },
        { text: "Pacific Ocean", isCorrect: true },
        { text: "Arctic Ocean", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What is the capital of Thailand?",
    a: [{ text: "Lampang", isCorrect: false, isSelected: false },
        { text: "Phuket", isCorrect: false },
        { text: "Ayutthaya", isCorrect: false },
        { text: "Bangkok", isCorrect: true }
    ]

},
{
    id: 2,
    q: "What is actually electricity?",
    a: [{ text: "A flow of water", isCorrect: false },
        { text: "A flow of air", isCorrect: false },
        { text: "A flow of electrons", isCorrect: true },
        { text: "A flow of atoms", isCorrect: false }
    ]

},
{
    id: 3,
    q: "Which of the following is not an international organisation?",
    a: [{ text: "FBI", isCorrect: true },
        { text: "FIFA", isCorrect: false },
        { text: "ASEAN", isCorrect: false },
        { text: "NATO", isCorrect: false }
    ]

},
{
    id: 4,
    q: "What is the speed of sound?",
    a: [{ text: "120 km/h", isCorrect: false },
        { text: "400 km/h", isCorrect: false },
        { text: "1,200 km/h", isCorrect: true },
        { text: "700 km/h", isCorrect: false }
    ]

},
{
    id: 5,
    q: "Which of the following animals can run the fastest?",
    a: [{ text: "Lion", isCorrect: false },
        { text: "Tiger", isCorrect: false },
        { text: "Leopard", isCorrect: false },
        { text: "Cheetah", isCorrect: true }
    ]

},
{
    id: 6,
    q: "What do we call a newly hatched butterfly?",
    a: [{ text: "A butter", isCorrect: false },
        { text: "A caterpillar", isCorrect: true },
        { text: "A moth", isCorrect: false },
        { text: "A chrysalis", isCorrect: false }
    ]

},
{
    id: 7,
    q: "What is the main component of the sun?",
    a: [{ text: "Liquid lava", isCorrect: false },
        { text: "Molten iron", isCorrect: false },
        { text: "Rock", isCorrect: false },
        { text: "Gas", isCorrect: true }
    ]

},
{
    id: 8,
    q: "Which company is known for publishing the Mario video game?",
    a: [{ text: "Xbox", isCorrect: false },
        { text: "SEGA", isCorrect: false },
        { text: "Nintendo", isCorrect: true },
        { text: "Electronic Arts", isCorrect: false }
    ]

},
{
    id: 9,
    q: "How many time zones are there in total in the world?",
    a: [{ text: "8", isCorrect: false },
        { text: "16", isCorrect: false },
        { text: "24", isCorrect: true },
        { text: "32", isCorrect: false }
    ]

}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

// Grabbing the evaluate button
let finalvalue = 0;
console.log("The value initiatied is ",finalvalue)
const evaluate = document.getElementsByClassName("evaluate");
// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "white";
        finalvalue++;
        
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}
if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 9) {
    id++;
    iterate(id);
    console.log(id);
}
else if (id == 9) {
    console.log("value is" + finalvalue);
    document.querySelector('.next').innerText = "Finish";
    var resultText = document.getElementsByClassName('result');
    resultText[0].innerText = "";
    if (finalvalue > 9)
    {
        resultText[0].innerHTML = "Your IQ level is high.";
        resultText[0].style.color = "white";
    }
    else if (finalvalue < 9 || finalvalue >= 7)
    {
        resultText[0].innerHTML = "Your IQ level is good.";
        resultText[0].style.color = "white";
    }
    else if (finalvalue < 7 || finalvalue >= 5)
    {
        resultText[0].innerHTML = "Your IQ level is average.";
        resultText[0].style.color = "white";
    }
    else
    {
        resultText[0].innerHTML = "Your IQ level is below average.";
        resultText[0].style.color = "white";
    }
    document.querySelector('.next').innerText = "Next";
    iterate("0");
    finalvalue = 0;
}
if (id >= 1){
    document.getElementById("prev").disabled = false;
}
})
// --------------- event added by me for previous button --------------------

const previous = document.getElementsByClassName('previous');
previous[0].addEventListener("click", () => {
if (id < 9 || id >= 1) {
    document.getElementById("prev").disabled = false;
    id--;
    iterate(id);
    console.log(id);
}
if (id == 0 || id <= 0)
{
    document.getElementById("prev").disabled = true;
}
})