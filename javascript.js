$(document).ready(function() {

  var one = $('#one');
  var two = $('#two');
  var newtext = "<br>This is some new text dynamically added!";
  $('input#add_text').click(function() {
    one.append(newtext);
  });
  $('input.add_text').click(function() {
    two.append(newtext);
    two.css('background', 'url("http://michaeldoret.com/doret/artwork/knicks.gif")');
  });

  
  
});
