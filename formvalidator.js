const form = document.querySelector('form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const card = document.querySelector('#card');

form.addEventListener('keyup', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    let nameValue = name.value.trim();
    let emailValue = email.value.trim();
    let cardValue = card.value.trim();
   console.log(emailValue)
    if (nameValue ==='') {
        name.classList.remove('passed', 'failed');
    }
    else if (!isName(nameValue)){
        name.classList.add('failed')
    }
    else {
        name.classList.add('passed')
    }
    if(emailValue ===''){
        email.classList.remove('passed', 'failed');
    } else if(!isEmail(emailValue))
    {
        email.classList.add('failed')
    } else {
        email.classList.remove('failed')
        email.classList.add('passed')
    }
    if(cardValue === ''){
        card.classList.remove('passed', 'failed')
    } else if(!valid_credit_card(cardValue)){
        card.classList.add('failed');
    } else {
        card.classList.add('passed')
        card.classList.remove('failed')
    }


}
function isName(name){
    return /^[a-z ,.'-]+$/i.test(name);
}

function isEmail(email){
    return  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


function valid_credit_card(value) {
    // accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(value)) return false;

    // The Luhn Algorithm.
    var nCheck = 0, nDigit = 0, bEven = false;
    value = value.replace(/\D/g, "");

    for (var n = value.length - 1; n >= 0; n--) {
        var cDigit = value.charAt(n),
            nDigit = parseInt(cDigit, 10);

        if (bEven) {
            if ((nDigit *= 2) > 9) nDigit -= 9;
        }

        nCheck += nDigit;
        bEven = !bEven;
    }

    return (nCheck % 10) == 0;
}



