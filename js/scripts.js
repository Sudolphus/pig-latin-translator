//business logic
const vowels = 'AEIOUaeiou'.split('');
const consonants = 'BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz'.split('')

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
    const newSentence = startTest(sentenceInput);

    $("#output").text(newSentence);
  });
});
