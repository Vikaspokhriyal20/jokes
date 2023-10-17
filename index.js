let light = document.getElementById('light');
let light_Btn = document.getElementById('light-btn');

let count = 0;

light_Btn.addEventListener('click', () => {
    if (count===0) {
        light.innerText = '🍿🍿';
        light_Btn.innerText = 'popcorn';
        count = 1;
    }else{
        light.innerText = '🍕🍕';
        light_Btn.innerText = 'pizza';
        count = 0;
    }
});


// counter 

let counter_value = document.getElementById('counter');
let count_btn = document.getElementById('counter-btn');

let mycount = 1;

count_btn.addEventListener('click', () => {
    counter_value.innerHTML = mycount++;

    if (mycount > 10) {
        counter_value.style.color = 'red';
    } else {
        counter_value.style.color = 'green';
    }
});




