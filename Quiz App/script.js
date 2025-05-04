let qustion=[{
    'ques': 'Who is virat Kohli',
    'a': 'Actor',
    'b': 'Cricketer',
    'c':'Teacher',
    'd':'Engineer',
    'correct':'b' 
},{
    'ques': 'Who is Sharukh Khan',
    'a': 'Actor',
    'b': 'Director',
    'c':'Pilot',
    'd':'Engineer',
    'correct':'a' 
},
{
    'ques': 'Who is Sunder pichai',
    'a': 'Developer',
    'b': 'Gamer',
    'c':'Worker',
    'd':'Engineer',
    'correct':'d'
}
]

index=0;
const data=qustion
const ques=document.getElementById("ques")
const option=document.querySelectorAll(".option")
function loadQuestion(){
    ques.innerText=`${"Q"+(index+1)+") "}`+qustion[index].ques
   option[0].nextElementSibling.innerText=qustion[index].a
   option[1].nextElementSibling.innerText=qustion[index].b
   option[2].nextElementSibling.innerText=qustion[index].c
   option[3].nextElementSibling.innerText=qustion[index].d
}

loadQuestion()

let total=qustion.length;
let right=0;
let wrong=0;
//submit btn
const btn=document.getElementById("submit")
btn.addEventListener('click',()=>{
    submitQuiz()
    if(index<qustion.length) index++;
    if (index==total) {
        return endQuiz()
    }else{
    reset()
    }
    loadQuestion()
})


const submitQuiz= ()=>{
    ans=getAnswer()
    const correct=qustion[index].correct
    
    console.log(ans)
    console.log(correct)
    if(ans==correct){
        console.log("yes")
        right++;
    }
    else{
        console.log("wrong")
        wrong++;
    }
    return;
}

// ...existing code...

function getAnswer() {
    let answer = null;
    option.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
}

function reset(){
    option.forEach((input)=>{
        input.checked=false
    })
}

const endQuiz = () => {
    const box = document.getElementsByClassName("box")[0];
    const btnContainer = document.getElementsByClassName("btn")[0];
    box.innerHTML = `
        <h1>Thank you for playing the quiz!</h1>
        <div class="result">
            <p>Total Questions: ${total}</p>
            <p>Correct Answers: ${right}</p>
            <p>Wrong Answers: ${wrong}</p>
            <p>Score: ${((right/total) * 100).toFixed(2)}%</p>
            <button id="again" onclick="location.reload()">Try Again</button>
        </div>
    `;
    if (btnContainer) {
        btnContainer.remove();
    }
}