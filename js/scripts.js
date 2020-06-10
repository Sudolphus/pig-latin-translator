//business logic
const startTest = function(str) {
  const vowels = 'AEIOUaeiou'.split('');
  if (vowels.includes(str.charAt(0))) {
    return vowelStart(str);
  }
}

const vowelStart = function(str) {
  return str + 'way';
}

//user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const sentenceInput = $("input[name=sentence]").val();
    const newSentence = startTest(sentenceInput);

    $("#output").text(newSentence);
  });
});
