//business logic
const vowels = 'AEIOUaeiou'.split('');
const consonants = 'BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz'.split('')

const pigLatinTranslate = function(sentence) {
  const sentenceArray = sentence.split(' ');
  const translatedArray = sentenceArray.map(startTest);
  return translatedArray.join(' ');
}

const startTest = function(str) {
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str.charAt(i)) && !consonants.includes(str.charAt(i))) {
      return str;
    }
  }
  if (vowels.includes(str.charAt(0))) {
    return vowelStart(str);
  } else {
    return consonantStart(str);
  }
}

const vowelStart = function(str) {
  return str + 'way';
}

const consonantStart = function(str) {
  let firstVowel;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str.charAt(i))) {
      firstVowel = i;
      break;
    }
  }
  if (str.charAt(firstVowel-1) === "Q" || str.charAt(firstVowel-1) === "q") {
    if (str.charAt(firstVowel) === "U" || str.charAt(firstVowel) === "u") {
      firstVowel += 1;
    }
  }
  if (firstVowel) {
    return str.slice(firstVowel) + str.slice(0, firstVowel) + "ay";
  } else {
    return str + 'ay';
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
