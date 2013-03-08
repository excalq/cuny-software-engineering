$(document).ready(function() {

  $('input.add_text').click(function() {
    var one = $('#one');
    var newtext = "<br>This is some new text dynamically added!";
    one.append(newtext);
    
  });

  
  
});
