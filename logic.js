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
    let result = `${applicant} final grade: `;

    if(applicantAnswersArray.length <= 10) {
        for(let i = 0; i <= applicantAnswersArray.length; i++) {
            const applicantAnswer = applicantAnswersArray[i];
            
            for (let j = 0; j < correctAnswers.length; j++) {
                const correctAnswer = correctAnswers[j];
    
                if(applicantAnswersArray.length === 10){
                    if(applicantAnswer === correctAnswer) {
                        applicantGrade += 1;
                        return result + `${applicantGrade}`;
                    }
                    applicantGrade -= 1;
                    return result + `${applicantGrade}`;
                }
                if(applicantAnswersArray.length < 10){
                    const unansweredQuestions = 10 - applicantAnswersArray.length
                    // if appl = 10 and unQ = 9 and if answer is right, then applGrade = 1 + 1
                    applicantGrade = applicantGrade - unansweredQuestions - 1
                    if(applicantAnswer === correctAnswer) {
                        applicantGrade += 1;
                        return result + `${applicantGrade}`;
                    }
                    if(applicantGrade === 0) {
                        applicantGrade = 0;
                        return result + `${applicantGrade}`;
                    }
                    applicantGrade -= 1;
                    return result + `${applicantGrade}`;
                }
            }
        }
    }
}

console.log(gradingAlgorithm([1], "Mr Doe"))