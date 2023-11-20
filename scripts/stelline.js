
/* function evidenziastelle(starCount) {
    const stars = document.querySelectorAll('.star');
    for(let i=0; i<10; i++){
        stars[i].addEventListener('click', () => {
            if(stars[i].style.opacity === 1){
                stars[i].style.opacity = 0.4;
            }
            else{
                stars[i].style.opacity = 1;
            }
        })
    }
    console.log(stars)
    stars.forEach((star, index) => {
        star.style.color = index < starCount ? '#FFD700' : '#ccc';
    });
}
evidenziastelle() */

const stars = document.querySelectorAll('.star');
for(let i=0; i<stars.length; i++){
    stars[i].addEventListener('click', () => {
        let n=i
        if(stars[i].style.opacity == '1'){            
            for(n=i+1; n<stars.length; n++){
                stars[n].style.opacity = '0.4';
                console.log(n)
            }
        }
        else{
            for(n; n>=0; n--){
                stars[n].style.opacity = '1';
                console.log(n)
            }
        }
    })
}



