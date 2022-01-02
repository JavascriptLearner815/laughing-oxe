export default class QuestionBase {
  constructor(question, correctAnswer, multipleCorrectAnswers, userAnswer, checkButton, afterCheckFunction) {
    this.question = question
    this.correctAnswer = correctAnswer
    this.multipleCorrectAnswers = Boolean(multipleCorrectAnswers)
    this.userAnswer = userAnswer
    this.checkButton = checkButton
    this.afterCheckFunction = afterCheckFunction
    this.isCorrect = false
    this.buttonClicked = false
    
    this.checkButton.addEventListener("click", () => {
      if (!this.buttonClicked) {
        if (this.multipleCorrectAnswers) {
          this.correctAnswer.forEach(answer => {
            if (answer === this.userAnswer) return this.isCorrect = true
          })
        } else {
          if (this.correctAnswer === this.userAnswer) this.isCorrect = true
        }
      }
      
      this.buttonClicked = true
      
      this.afterCheckFunction(this)
    })
  }
}
