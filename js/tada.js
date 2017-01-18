
 $(document).ready(function() {
    $('.animated').hover(
     function() {
      $(this).addClass('tada'); // Добавляем класс bounce
     },
     function() {
      $(this).removeClass('tada'); // Убираем класс
     }
    )})