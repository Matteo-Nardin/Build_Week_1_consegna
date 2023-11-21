//import { score } from "./henry";

// A A A  :  la variabile score non funziona!!!  --->  può essere che non venga incrementata ???



    //score = 7;   // numero risposte corrette
    //numDomande = 20;   // numero domande totale
    // Results page script
    const urlParams = new URLSearchParams(window.location.search);
    const cieloscore = urlParams.get('score');

    console.log(cieloscore);
    let corrette = (cieloscore * 100)/numDomande;    // percentuale di risposte corrette 
    let sbagliate = 100-corrette;    // percentuale di risposte sbagliate


    // Creazione grafico donut percentuali
    const ctx = document.getElementById('myChart');
        
        // setup
        const data = {
            datasets: [{
              data: [sbagliate, corrette],
              backgroundColor: ['#B1387F', '#76F9FB']
              
            }]
        }
        // shadow
        const ShadowPlugin = {
            beforeDraw: (chart, args, options) => {
              const { ctx } = chart;
              ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
              ctx.shadowBlur = 10;
              ctx.shadowOffsetX = 5;
              ctx.shadowOffsetY = 5;
            },
          };
        // config
        new Chart(ctx, {
          type: 'doughnut',
          data,
          options: {
            borderDashOffset:0,
            borderJoinStyle:0,
            borderColor: '#0000',
            cutout: '70%'
          },
          plugins:[ShadowPlugin]
        });

// funzione messaggio di esame passato
const examPassed = () => {
    let inner = document.querySelector('#prova');
    let div = document.createElement('div');
        div.className = 'congrat';  // classe al div
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        p2.style.color = '#76F9FB'
        p1.innerText = "Congratulations!"
        p2.innerText = "You passed the exam."
        div.appendChild(p1)
        div.appendChild(p2)

        let p3 = document.createElement('p');
        p3.innerHTML = "We'll send you the certificate <br>in few minutes. <br> Check your email (including promotions / spam folder)"
        inner.appendChild(div);
        inner.appendChild(p3);
}

// funzione messaggio di esame fallito
const examNotPassed = () => {
    let inner = document.querySelector('#prova');
    let div = document.createElement('div');
        div.className = 'congrat';  // classe al div
        
        let p = document.createElement('p');
        p.style.color = '#B1387F'
        p.style.paddingTop = '3em'
        p.innerText = "You failed the exam."
        div.appendChild(p)

        inner.appendChild(div);
}

// messaggio a sx del grafico per risposte corrette
const correct = () => {
    let percent = document.querySelector('#correct .percent');
    let questions = document.querySelector('#correct .questions');

    percent.innerText = corrette.toFixed(1)+'%';
    questions.innerText = cieloscore +'/'+numDomande+' questions'
}

// messaggio a dx del grafico per risposte sbagliate
const wrong = () => {
    let percent = document.querySelector('#wrong .percent');
    let questions = document.querySelector('#wrong .questions');

    percent.innerText = sbagliate.toFixed(1)+'%';
    questions.innerText = numDomande-cieloscore +'/'+numDomande+' questions'
}

// funzione per bottone 'rate us'
const btn = ()=>{
    let btn = document.querySelector('#rateUS button')
    btn.addEventListener('click', ()=>{
        window.location.href = "./mila.html";
    })
}


// richiamo funzioni
correct()
wrong()
btn()

if(corrette>=60){
    examPassed()
}else{
    examNotPassed()
}