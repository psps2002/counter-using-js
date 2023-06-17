document.addEventListener('DOMContentLoaded', function(){
    const decrease = document.getElementById('decrease');
    const increase = document.getElementById('increase');
    const reset = document.getElementById('reset');
    let display = document.getElementById('display');
    let count = 0;

    decrease.addEventListener('click',function(){
        count = count - 1;
        display.innerText = `${count}`;
    })
    increase.addEventListener('click',function(){
        count = count + 1;
        display.innerText = `${count}`;
    })
    reset.addEventListener('click',function(){
        count = 0;
        display.innerText = `${count}`;
    })
})