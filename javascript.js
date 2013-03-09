$(document).ready(function() {

  var one = $('#one');
  var two = $('#two');
  var newtext = "<br>This is some new text dynamically added!";

  $('input#one_button').click(function() {
    var typed_text = $("#typed_text").val();
    console.log(typed_text);
    one.append(typed_text);
    two.slideUp();
  });
  $('input.add_text').click(function() {
    two.slideDown();
    two.append(newtext);
    two.css('background', 'url("http://michaeldoret.com/doret/artwork/knicks.gif")');
  });

  
  
});
