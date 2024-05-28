// Variable
const faq = document.getElementsByClassName('question-box')
for( let i = 0; i < faq.length; i++ ) {
    faq[i].addEventListener('click', function (){
        this.classList.toggle('active')
        let image = this.querySelector('.question-box-box img')
        if(this.classList.contains('active')) {
            image.src = "assets/images/icon-minus.svg"
        }
        else{
            image.src = "assets/images/icon-plus.svg"
        }
    })
}

// Key navigation
let currentIndex = 0
document.addEventListener("keydown", function (event){
    let image = faq[currentIndex].querySelector('.question-box-box img')
    switch (event.key){
        case 'ArrowDown':
            currentIndex =(currentIndex + 1)% faq.length;
            break;
        case 'ArrowUp':
            currentIndex = (currentIndex - 1)% faq.length;
            if(currentIndex < 0){
                currentIndex = 0;
            }
            break;
        case 'ArrowLeft':
            faq[currentIndex].classList.toggle('active');
            if(image.src.includes("assets/images/icon-plus.svg")) {
                image.src = "assets/images/icon-minus.svg";
            }
            else{
                image.src = "assets/images/icon-plus.svg";
            }
            break;
        case 'ArrowRight':
            faq[currentIndex].classList.toggle('active');
            if(image.src.includes("assets/images/icon-plus.svg")) {
                image.src = "assets/images/icon-minus.svg";
            }
            else{
                image.src = "assets/images/icon-plus.svg";
            }
            break;
    }
})


