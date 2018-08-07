$(function(){
  $(".card>p").click(function(){
    $(this).toggle();
    $(this).siblings().toggle();
    });
});
