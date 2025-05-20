
const faq = document.querySelectorAll('.faq-box-question');

faq.forEach( question => {
  question.addEventListener('click', function() {
    this.classList.toggle('active');

    // answer
    let body = this.nextElementSibling;
    if (body.style.maxHeight === "300px"){
      body.style.maxHeight = "0px";
    }else {
      body.style.maxHeight = "300px";
    }
  })
})

