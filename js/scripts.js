//business logic
const pigLatinTranslate = function(sentence) {
  const sentenceArray = sentence.split(' ');
  const translatedArray = sentenceArray.map(splitter);
  return translatedArray.join(' ');
}

const splitter = function(str) {
  const stringArray = stripper(str)
  if (stringArray[1].search(/[\W\d_]/) > -1) {
    return str;
  } else {
    if (stringArray[1].search(/[aeiou]/i) === 0) {
      return stringArray[0] + stringArray[1] + 'way' + stringArray[2];
    } else {
      const consonantBlock = /^[^aeiou]*((?<=q)u|(?!=u)[^aeiou])/i;
      return stringArray[0] + stringArray[1].split(consonantBlock)[stringArray[1].split(consonantBlock).length-1] + stringArray[1].match(consonantBlock)[0] + "ay" + stringArray[2];
    }
  }
}

const stripper = function(str) {
  let newStr = str;
  let begin = '';
  let end = '';
  while (newStr.search(/[\W\d_]/) === 0) {
    begin += newStr.charAt(0);
    newStr = newStr.slice(1);
  }
  while (newStr.search(/[\W\d_]$/) === newStr.length-1) {
    end = newStr.charAt(newStr.length-1) + end;
    newStr = newStr.slice(0, newStr.length-1);
  }
  return [begin, newStr, end];
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
