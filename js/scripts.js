//business logic
const vowels = 'AEIOUaeiou'.split('');

const startTest = function(str) {
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
    const newSentence = startTest(sentenceInput);

    $("#output").text(newSentence);
  });
});
