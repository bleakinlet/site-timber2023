let passcode = '';
function pressButton(num) {
    const buttonPressed = document.querySelectorAll('.js-button'); 
    passcode = passcode + (num + 1);
    passcodeElement();

    if (passcode.length > 4) {
        document.querySelector('.js-passcode').innerText = 'INVALID';
        passcode = '';
    }
}

function passcodeElement() {
    document.querySelector('.js-passcode').innerText = passcode;
    console.log(passcode.length);
}

function hKeyCheck() {
    if (passcode === '1134') {
        window.location.replace("https://timbertoast.neocities.org/html/myth/quiet");
    } else if (passcode === '5285') {
        window.location.replace("https://timbertoast.neocities.org/html/myth/taiga-terminal");
    } else {
        document.querySelector('.js-passcode').innerText = 'INVALID';
        passcode = '';
    }
}
