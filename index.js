// Variable

const faq = document.getElementsByClassName('question-box')

for( let i = 0; i < faq.length; i++ ) {
    faq[i].addEventListener('click', function (){
        this.classList.toggle('active')
        let image = this.querySelector('.question-box-box img')
        if(image.src.includes("assets/images/icon-plus.svg")) {
            image.src = "assets/images/icon-minus.svg"
        }
        else{
            image.src = "assets/images/icon-plus.svg"
        }
    })
}
