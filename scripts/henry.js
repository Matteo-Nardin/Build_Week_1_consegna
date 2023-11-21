const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: ["Central Processing Unit"],
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: ["Final"],
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: ["False"],
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: ["False"],
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: [".svg"],
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: ["Cascading Style Sheet"],
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: ["Nougat"],
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: ["140"],
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: ["False"],
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: ["Java"],
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
let startTime; //Dichiarazione variabile del tempo d'inizio del timer
let timeleft =10; //Tempo rimanente quando inizia il timer
let statoAnimazione; //in che stato si trova l'animazione del timer

let domande=[];
let c=0; //contatore delle domande da mostrare e rispondere
let difficoltaScelta = 'easy'; // impostato da solo ma poi deve essere chiesto dall'utente

let score = 0; //tiene conto del punteggio
let buttonpresscheck; //variabile per controllare che i bottoni risposte vengono premuti tanto quanto neccesario

let numDomande = questions.length;
domande= questions; //raccolgo subito gli oggetti nell'array domande, n domande scelta dall'utente che hanno la difficolta scelta dall'utente


document.querySelector('.totale_pagina').innerText ='/ '+ domande.length; //Mostro il numero totale di domande

function nextpage() { //main function che cicla le domande e risposte da mostrare all'utente

  //cancelAnimationFrame(statoAnimazione); //resetto l'animazione del timer ogni nuova domanda;
  requestAnimationFrame(updateTimer); //avvio il timer ad ogni nuova domanda,
  startTime=performance.now(); //Inizializzo il timer con il tempo corrente ogni nuova domanda
  buttonpresscheck=1; // Inizializzo la variabile di controllo ogni nuova domanda
 
  //mostro la nuova domanda e aggiorno il numero della domanda
  document.querySelector('h1').innerText = domande[c].question;
  document.querySelector('.numero_pagina').innerText = c+1;

  //cancello i buttoni creati precedentemente 
  document.querySelectorAll('.answers form button').forEach( btn => btn.remove());

  //creo nuovi buttoni in base al numeri di risposte presenti
  let numAnswers = domande[c].incorrect_answers.length + domande[c].correct_answer.length;
  for (let i = 0; i < numAnswers; i++) {
      let bottone = document.createElement('button');
      bottone.type = 'button';
      document.querySelector('form').appendChild(bottone);
  }                              

  // Inserisco  in uno dei bottone a caso generati la risposta giusta
  let correct_answerBtn = document.querySelectorAll('.answers form button')[Math.floor(Math.random()*numAnswers)];
  correct_answerBtn.innerText =domande[c].correct_answer;


  let d=0; // contatore delle risposte non essate
  document.querySelectorAll('.answers form button').forEach(btn => {
    if (btn.innerText != correct_answerBtn.innerText) {
      btn.innerText = domande[c].incorrect_answers[d]; //Mostro le risposte false
      d++;
    }
  })
  
  document.querySelectorAll('.answers form button').forEach(btn => { //Ciclo i buttoni creati
    btn.addEventListener('click', () => {
      if(buttonpresscheck===1) { //controllo if per rendere cliccabile una sola volta i bottoni;
        buttonpresscheck=0;
        scoreCheck(btn);
        createProceedButton();
        cancelAnimationFrame(statoAnimazione);
        c++; //Aumento il contatore
      }
    });
  });
}
nextpage();


function createProceedButton() {
  let button = document.createElement('button'); //Creo un nuovo bottone per andare alla domanda succesiva
  button.type = "button";
  if((c+1 == domande.length)) {  //faccio un controllo all'ultima domanda per andare alla pagina successiva
    button.innerText='Go to results';
    button.addEventListener('click', () => location.href = "./cielo.html?score=" + score);
  }else {
    button.innerText='Next Question'; 
    button.addEventListener('click',nextpage);
  }
  button.className ='nextQuestion';
  document.querySelector('form').appendChild(button); //Appendo bottone
}

function scoreCheck(bottone) {
  if (domande[c].correct_answer.includes(bottone.innerText)) {//controllo se il buttone, quando cliccato, corrisponde alla domanda giusta...
    bottone.className= 'correct'; //Gli do una classname per mostrare il bottone verde
    score += 1; //Aumento lo score
  } else { //se bottone cliccato è la risposta falsa...
    bottone.className = 'false'; //Gli do una classname per mostrare il bottone rosso
    document.querySelectorAll('.answers form button').forEach(button => { //inoltre ciclo i bottoni per mostrare la risposta vera
      if(domande[c].correct_answer.includes(button.innerText)){
        button.className = 'correct';
      }
    });
  }
}


let circle = document.querySelector('.circle circle');
let circumference = parseInt(circle.getAttribute('stroke-dasharray'));
let timerElement = document.getElementById("timer");

function updateTimer() { //timer- chiedi a cielo
    let currentTime = performance.now();
    let elapsedTime = (currentTime - startTime) / 1000; 

    let remainingTime = timeleft - elapsedTime;
    if (remainingTime <= 0) { //Se il timer va a zero... 
        remainingTime = 0;
        buttonpresscheck=0; //si disattivano i bottoni delle risposte tramite la variabile di controllo
        createProceedButton(); //chiamo la funzione per generare la next question button
        document.querySelectorAll('.answers form button').forEach(bttn => { //mostro la risposta giusta intanto
          if(bttn.innerText== domande[c].correct_answer){
              bttn.className = 'correct';
          }
        });
        c++; //Aumento il contatore delle domande 
    }

    let newProgress = 1 - (remainingTime / timeleft); 
    circle.style.strokeDashoffset = circumference * newProgress;

    if (newProgress >= 0.5) {
        circle.style.stroke = '#ffa500'; 
    }
    if (newProgress >= 0.75) {
        circle.style.stroke = '#ff0000'; 
    }

    timerElement.innerText ='seconds ' + Math.floor(remainingTime) + ' remaining'; 

    if (remainingTime > 0) {
        statoAnimazione=requestAnimationFrame(updateTimer);
    }
    return statoAnimazione;
}
