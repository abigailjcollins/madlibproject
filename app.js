function createParagraph(){

    var wordOne = document.getElementById('wordOne').value;
    var wordTwo = document.getElementById('wordTwo').value;
    var wordThree = document.getElementById('wordThree').value;
    var wordFour = document.getElementById('wordFour').value;
    var wordFive = document.getElementById('wordFive').value;
    var wordSix = document.getElementById('wordSix').value;
    var wordSeven = document.getElementById('wordSeven').value;
    var wordEight = document.getElementById('wordEight').value;
    var wordNine = document.getElementById('wordNine').value;
    var wordTen = document.getElementById('wordTen').value;
    var wordEleven = document.getElementById('wordEleven').value;
    var wordTwelve = document.getElementById('wordTwelve').value;
    var wordThirteen = document.getElementById('wordThirteen').value;
    var wordFourteen = document.getElementById('wordFourteen').value;
    var wordFifteen = document.getElementById('wordFifteen').value;

    var paragraph = `I started from my sleep with ${wordOne}; a cold ${wordTwo} covered my forehead; when, by the dim and ${wordThree} light of
    the moon, as it forced its way through the window shutters, I beheld the ${wordFour} the ${wordFive} monster whom I had
    created. He held up the curtain of the bed; and his eyes, if eyes they may be called, were fixed on me. His
    ${wordSix}opened, and he muttered some ${wordSeven} sounds, while a grin wrinkled his cheeks. He might have spoken, but
    I did not hear; one hand was stretched out, seemingly to ${wordEight} me, but I escaped and ran downstairs. I took
    refuge in the ${wordNine}belonging to the house which I inhabited, where I ${wordEleven} during the rest of the night,
    walking up and down in the greatest agitation, listening, ${wordTwelve}, catching, and fearing each sound as if it
    were to announce the approach of the ${wordThirteen} ${wordFourteen} to which I had so ${wordFifteen} given life.`

    document.getElementById('answer').innerHTML = paragraph;
}