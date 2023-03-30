let boxtext = document.getElementsByClassName('boxtext')[0];
let button = document.querySelector(".button");
let allboxes = document.querySelectorAll('.opt');
let alloption = document.querySelectorAll('.optiontext');
let score=document.querySelector('.scoretext');

const item = [
    {
        question: "Which of the following is NOT a semantic HTML tag?",
        options: ['a. <header>', 'b. <div>', 'c. <nav>', 'd. <footer>'],
        answer: 'b. <div>'
    },

    {
        question: "Which CSS property is used to set the background color of an element?",
        options: ['a. background-color', 'b. color', 'c. border-color', 'd. outline-color'],
        answer: 'a. background-color'
    },

    {
        question: "Which of the following is NOT a valid value for the CSS display property?",
        options: ['a. flex', 'b. block', 'c. center', 'd. inline'],
        answer: 'c. center'
    },


    {
        question: "Which of the following is NOT a data type in JavaScript?",
        options: ['a. string', 'b. boolean', 'c. float', 'd. number'],
        answer: 'c. float'
    },

    {
        question: "Which of the following is NOT a type of loop in JavaScript?",
        options: ['a. for', 'b. while', 'c. do-while', 'd. repeat-until'],
        answer: 'd. repeat-until'
    }
]


let index = 0;
let opt = Array.from(alloption);
boxtext.textContent = item[0].question;
opt.forEach(element => {
    if (index < 4) {
        element.textContent = item[0].options[index];
        index++;
    }
})

let x = 1;
index = 0;
let i = 1;
button.disabled = true;
button.addEventListener('click', () => {
    if (i < item.length) {
        boxtext.textContent = item[i].question;
        index = 0;
        opt.forEach(element => {
            if (index < 4) {
                element.textContent = item[x].options[index];
                index++;
            }
        })
        allboxes.forEach(box => {
            box.style.backgroundColor = '';
            flag = false;
            button.disabled = true;
        });
        i++;
        x++;
    }
});

let flag = false;
let s=0;
let scorekeep=s+"/5";
let answers = item.map((obj) => obj.answer);
opt.forEach((option) => {
    option.addEventListener('click', () => {
        selectedOption = true;
        if (flag) {
            return;
        }
        let selectedAnswer = option.textContent;
        if (selectedAnswer === answers[x - 1]) {
            option.parentElement.style.backgroundColor = "rgba(0, 255, 0, 0.5)";
            s++;
            let scorekeep=s+"/5";
            score.textContent=scorekeep;
        } else {
            option.parentElement.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
            let correctOptionIndex = item[x - 1].options.findIndex(option => option === answers[x - 1]);
            setTimeout(() => {
                alloption[correctOptionIndex].parentElement.style.backgroundColor = "rgba(0, 255, 0, 0.5)";
            }, 100);
        }
        button.disabled = false;
        flag = true;
    });

});
