// <script> 
// $(document).ready(function() {
//   // $('.col-lg-4 ').addClass('animated flash'); 
//   $('#demo').on("click" , backLight);
// });

// function backLight(){
// 	$(this).css('animated flash');	
// }
// </script>

 $(document).ready(function() {
    $('.animated').hover(
     function() {
      $(this).addClass('bounce'); // Добавляем класс bounce
     },
     function() {
      $(this).removeClass('bounce'); // Убираем класс
     }
    )})
