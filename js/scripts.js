
$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Bork Woof!</li>");
    $("ul#webpage").prepend("<li>Meow Meow!</li>");
    $("ul#user").children("li").first().click(function() {
    $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
    $(this).remove();
});
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Woof Bork!</li>");
    $("ul#webpage").prepend("<li>Meow Meow Meow!</li>");
    $("ul#user").children("li").first().click(function() {
    $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
    $(this).remove();
    });
  });
    $("button#meow").click(function() {
      $("img").toggle(1200);
    });
});
