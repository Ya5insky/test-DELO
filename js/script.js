// Модальное окно

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('openModal').addEventListener('click', function() {
      document.getElementById('modal').style.display = 'block';
    });
  
    document.querySelector('.modal__close').addEventListener('click', function() {
      document.getElementById('modal').style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
      }
    });
  
    document.querySelector('.modal__content').addEventListener('click', function(event) {
      event.stopPropagation();
    });
  
    document.getElementById('signupForm').addEventListener('submit', function(event) {
      event.preventDefault();
      let name = document.getElementById('name').value;
      let phone = document.getElementById('phone').value;
      let agreement = document.getElementById('agreement').checked;
      console.log("Имя: " + name + ", Телефон: " + phone + ", Согласие: " + agreement);
      document.getElementById('modal').style.display = 'none';
    });
  });




// Аккордеон  
document.querySelectorAll('.accordion__button').forEach((el) => {
    el.addEventListener('click', () => {
        let fagAccordionText = el.nextElementSibling

        if (fagAccordionText.style.maxHeight) {
            document.querySelectorAll('.accordion__text').forEach((el) => el.style.maxHeight = null)
            el.querySelector('.button-icon').classList.remove('icon-minus');
            el.querySelector('.button-icon').classList.add('icon-plus');
        } else {
            document.querySelectorAll('.accordion__text').forEach((el) => el.style.maxHeight = null)
            fagAccordionText.style.maxHeight = fagAccordionText.scrollHeight + 'px';
            el.querySelector('.button-icon').classList.remove('icon-plus');
            el.querySelector('.button-icon').classList.add('icon-minus');
        }
    });
});


// Burger Menu
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('burgerBtn').addEventListener('click', function(){
        document.querySelector('header').classList.toggle('open')
    });
});