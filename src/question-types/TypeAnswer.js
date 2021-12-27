class TypeAnswerQuestion extends QuestionBase {
  constructor(question, correctAnswers, afterCheckFunction) {
    const checkButton = document.body.createElement("button")
    const userAnswerInput = document.body.createElement("textarea")
    const userAnswer = userAnswerInput.innerText
    
    super(question, correctAnswers, true, userAnswer, checkButton)
    
    this.userAnswerInput = userAnswerInput
    
    this.checkButton.addEventListener("click", () => afterCheckFunction(this))
  }
}
