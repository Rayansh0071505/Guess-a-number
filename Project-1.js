let secretnumber = Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;

// use this code of line to display number in place of question mark
// document.querySelector('.number').textContent=secretnumber;

document.querySelector('.check').addEventListener('click',function()
{
    const guess=Number(document.querySelector('.guess').value)
    if(!guess)
    {
        document.querySelector('.message').textContent='No inputs given ðð'
    }
    else if(guess===secretnumber)
    {
        document.querySelector('.message').textContent='Correct answer ðð';
        document.querySelector('.number').textContent=secretnumber;
        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('.number').style.width="30rem";
        if(score>highscore)
        {
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
        
 
    }
      else if(guess>secretnumber)
    {
        if(score>1){
        document.querySelector('.message').textContent="Guess is too high ,oh shit calm downðð¶ð®"
        score--;
        document.querySelector('.score').textContent=score;
        document.querySelector('body').style.backgroundColor='red';
    }}
    else if(guess>secretnumber)
    {
        if(score>1){
        document.querySelector('.message').textContent="Guess is too high ,oh shit calm downðð¶ð®"
        score--;
        document.querySelector('.score').textContent=score;
        document.querySelector('body').style.backgroundColor='red';
    }
    else
    {
        document.querySelector('.message').textContent="You lost Buddyð"
        document.querySelector('.score').textContent=0;

    }}
    else if(guess<secretnumber)
    {
        if(score>1){
            document.querySelector('.message').textContent="Guess too low ð¤¦ââï¸"
            score--;
            document.querySelector('.score').textContent=score;
        }
        else
        {
            document.querySelector('.score').textContent="You lost Buddyðð";
            document.querySelector('.score').textContent=0;
        }
    }
});

// again button
document.querySelector('.again').addEventListener('click',function()
{
    score=20;
    secretnumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent="Start guessing looserððð¤¨"
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('.number').textContent="?";
    document.querySelector('.guess').value="";
    document.querySelector('.score').textContent=score;

})