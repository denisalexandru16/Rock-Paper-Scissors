// tipuri de variable
//const , let si var

const computerChoiceDisplay=document.getElementById(`computer-choice`)
const ourChoiceDisplay=document.getElementById(`our-choice`)
const resultDisplay=document.getElementById(`result`)
const vars=document.querySelectorAll(`button`)
let ourChoice
let computerChoice
let result
vars.forEach(vars => vars.addEventListener(`click`,(e)=>{
    ourChoice=e.target.id
    ourChoiceDisplay.innerHTML=ourChoice
    generateComputerChoice()
    getResult()
}))


function generateComputerChoice(){
    const randomNumber=Math.floor(Math.random()*vars.length) + 1 //care inseamna 3, cate variabile sunt de tip button
    //+1 reprezinta de fapt de la 1-3 penntru ca daca nu ar fi fost de la 0 la 2

    if(randomNumber===1){
        computerChoice='rock'
    }
    if(randomNumber===2){
        computerChoice='paper'
    }
    if(randomNumber===3){
        computerChoice='scissors'
    }
    computerChoiceDisplay.innerHTML=computerChoice
}

function getResult(){
    if(computerChoice===ourChoice){
        result='Draw!'
    }
    if(computerChoice==='rock' && ourChoice==='paper'){
        result='you win!'
    }
    if(computerChoice==='rock' && ourChoice==='scissors'){
        result='you lost!'
    }
    if(computerChoice==='paper' && ourChoice==='scissors'){
        result='you win!'
    }
    if(computerChoice==='paper' && ourChoice==='rock'){
        result='you lost!'
    }
    if(computerChoice==='scissors' && ourChoice==='rock'){
        result='you win!'
    }
    if(computerChoice==='scissors' && ourChoice==='paper'){
        result='you lost!'
    }
    resultDisplay.innerHTML=result
}