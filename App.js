let btn = document.querySelectorAll('numberBtn')
let rate  = document.querySelector('.btn')
let submit  = document.querySelector('.sub')
let hero = document.querySelector('.container')

function thankYouState() {
    let rateCard = sessionStorage.getItem('myRate');
    hero.innerHTML = "";
    hero.innerHTML = `<div class="feedback">
  <div>
<img src="images/illustration-thank-you.svg" alt="">
  </div>
  <div class="select">
 <p id="num" class="mt-3 mb-3"> You selected ${rateCard}  out of 5
</p>
 <h1> Thank you!</h1>
<p>
  We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch! 
</p>
  </div>
</div>`
}

function rateNum(e) {
    if (e.target != submit) {
        let rate = e.target.innerHTML;
        console.log(rate);
        sessionStorage.setItem('myRate', rate);
        return rate;
    }
    
}
rate.addEventListener('click', rateNum);
submit.addEventListener('click', thankYouState);