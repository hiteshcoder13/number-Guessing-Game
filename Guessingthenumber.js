
let submit = document.getElementById('btn0');

let result = document.getElementById('result');
let playagain = document.getElementById('btn1');
let tryagain = document.getElementById('btn2');
let tryimg = document.getElementById('tryagain');
let number = Math.floor(Math.random()*6);

submit.addEventListener('click', () => {
    let input = document.getElementById('number').value;
    
    console.log(number);
   if(input==number){
    let congrats = document.getElementsByClassName('congrats');
    congrats[0].style.visibility = 'visible';
    tryimg.style.visibility = 'hidden';
    result.innerHTML = input;
   }
else{
tryimg.style.visibility = 'visible';
}
});

playagain.addEventListener('click', () => {
    window.location.reload();

});
