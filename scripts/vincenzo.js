

let procedi = () => { 
    let btn = document.querySelector("#btnPr");
    let checkbox = document.querySelector("#accetto");
    /* let difficultyButtons = document.querySelectorAll(".difficulty-button"); */

    let isCheckboxChecked = false;
    /* let isDifficultySelected = false; */

    checkbox.addEventListener('change', () => {
        isCheckboxChecked = checkbox.checked;
        updateProceedButtonState();
    });

    /* difficultyButtons.forEach(button => {
        button.addEventListener('click', () => {
            isDifficultySelected = isAtLeastOneDifficultySelected();
            updateProceedButtonState();
        });
    }); */

    btn.addEventListener('click', (evt) => {
        if (!isCheckboxChecked) {
            alert("Per favore accetta le condizioni per proseguire...");
            evt.preventDefault();
        } /* else if (!isDifficultySelected) {
            alert("Seleziona almeno una difficoltà per procedere...");
            evt.preventDefault();
        } */ else {
            window.location.href = "./henry.html";
        }
    });

    /* function isAtLeastOneDifficultySelected() {
        for (let i = 0; i < difficultyButtons.length; i++) {
            if (difficultyButtons[i].classList.contains('selected')) {
                return true;
            }
        }
        return false;
    } */

    function updateProceedButtonState() {
        /* isDifficultySelected = isAtLeastOneDifficultySelected(); */
        btn.disabled = !(isCheckboxChecked /* && isDifficultySelected */);
        if (btn.disabled) {
            btn.style.filter = 'none';
        } else {
            btn.style.filter = 'drop-shadow(0 0 1.2rem #00ffff)';
            btn.style.cursor = 'pointer';
        }
    }
}

/* let styleBtnDifficolta = () => {
    let btnDifficolta = document.querySelectorAll(".difficulty-button")

    btnDifficolta.forEach(e => {
        e.style.color = 'purple';
        e.style.fontSize = '1em';
        e.style.padding = '0.7em 2em 0.7em 2em';
        e.style.marginTop = '1em';

        e.addEventListener('click', () => {
            e.classList.toggle('selected');
        });
    });
} */

procedi();
/* styleBtnDifficolta(); */
