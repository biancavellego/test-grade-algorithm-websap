{/* 

<p>Question 1:</p>
<form>
    <input type="radio" id="alternative_1" name="test" value="Alternative 1">
    <label for="alternative_1">Alternative 1</label><br>
    <input type="radio" id="alternative_2" name="test" value="Alternative 2">
    <label for="alternative_2">Alternative 2</label><br>
    <input type="radio" id="alternative_3" name="test" value="Alternative 3">
    <label for="alternative_3">Alternative 3</label><br>
    <input type="radio" id="alternative_4" name="test" value="Alternative 4">
    <label for="alternative_4">Alternative 4</label><br>
    <input type="radio" id="alternative_5" name="test" value="Alternative 5">
    <label for="alternative_5">Alternative 5</label><br>
</form>

*/}

const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );


function gradingAlgorithm(applicantAnswersArray, applicant) {
    const correctAnswers = randomIntArrayInRange(1, 5, 10);
    let applicantGrade = 10;
  
    for (let i = 0; i < 10; i++) {
      if (applicantAnswersArray[i] === undefined) {
        applicantGrade -= 1;
      } else if (applicantAnswersArray[i] !== correctAnswers[i]) {
        applicantGrade -= 1;
      }
    }
    applicantGrade = Math.max(applicantGrade, 0);
  
    return `${applicant}'s final grade: ${applicantGrade}`;
}

console.log(gradingAlgorithm([1, 1, 1], "Mr Doe"))