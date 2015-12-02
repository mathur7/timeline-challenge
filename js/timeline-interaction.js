$( document ).ready(function() {
  $(".icon-container").on('click', function(e) {
    $(this).closest('li').toggleClass("active");
  });

  $(".command-list-prompt").on('click', function() {
    console.log($(this).closest(".command-student-list"));
    $(this).closest(".student-wrapper").toggleClass("active");
    $(this).closest(".command-list-prompt").toggleClass("active");
  })
});