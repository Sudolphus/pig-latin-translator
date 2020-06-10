//business logic
const pigLatinTranslate = function(sentence) {
  const sentenceArray = sentence.split(' ');
  const translatedArray = sentenceArray.map(splitter);
  return translatedArray.join(' ');
}

const splitter = function(str) {
  if (str.search(/[\W\d_]/) > -1) {
    return str;
  } else {
    const firstVowel = str.search(/[aeiou]/i);
    if (firstVowel === 0) {
      return str + 'way';
    } else {
      const consonantBlock = /^[^aeiou]*((?<=q)u|(?!=u)[^aeiou])/i;
      return str.split(consonantBlock)[str.split(consonantBlock).length-1] + str.match(consonantBlock)[0] + "ay";
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
