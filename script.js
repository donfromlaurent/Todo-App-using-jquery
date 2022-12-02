$(document).ready(function(){
    // $("#hide").click(function(){
    //   // $(".play").css("background-color", "pink");
    //   // $("body").css("background-color", "black");
    //   $(".play").hide(1000);
    // });
    // $("#show").click(function(){
    //   // $(".play").css("background-color", "pink");
    //   // $("body").css("background-color", "black");
    //   $(".play p").text("hello world");
    // });


    $("#addTodo").click(function(){
      var item = $("#todo").val();
      if (item !== ""){
        $("ol.myOl").append("<li>" + item + "</li>");
      $("input").val("");
      $("input").focus();
      }else{
        alert("Please enter a task")
     }
    });
    $("#todo").keyup(function(event){
      if(event.keyCode == 13){
        $("#addTodo").click();
      }
    });
    $(".myOl").on("dblclick", "li", function(){
      // $(this).toggleClass("strike").fadeOut();
      $("ol.finished li:first-child").css("display", "none")
      $("ol.finished").append($(this).detach());
    });
    $(".finished").on("dblclick", "li", function(){
      $("ol.myOl").append($(this).detach());
    })
    $("ol").sortable();
  });