//business logic
const pigLatinTranslate = function(sentence) {
  const sentenceArray = sentence.split(' ');
  const translatedArray = sentenceArray.map(startTest);
  return translatedArray.join(' ');
}

const startTest = function(str) {
  if (str.search(/[\W\d_]/) > -1) {
    return str;
  } else {
    const firstVowel = str.search(/[aeiou]/i);
    if (firstVowel === 0) {
      return str + 'way';
    } else {
      const qBlock = /^[^aeiou]*(qu)/i;
      const cBlock = /^[^aeiou]+/i;
      if (str.search(qBlock) > -1) {
        return str.split(qBlock)[str.split(qBlock).length-1] + str.match(qBlock)[0] + "ay";
      } else {
        return str.split(cBlock)[str.split(cBlock).length-1] + str.match(cBlock)[0] + "ay";
      }
    }
  }
}

//user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const sentenceInput = $("input[name=sentence]").val();
    if (!sentenceInput) {
      alert('Enter a sentence');
      return;
    }
    const newSentence = pigLatinTranslate(sentenceInput);

    $("input[name=sentence]").val("");
    $(".row").show();
    $("#input").append("<li>" + sentenceInput + "</li>");
    $("#output").append("<li>" + newSentence + "</li>");
  });

  $('#reset').click(function() {
    $("ol > li").remove();
    $(".row").hide();
    $("input[name=sentence]").val("");
  });
});
