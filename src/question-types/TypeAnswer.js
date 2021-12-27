import QuestionBase from "./QuestionBase.js"

class TypeAnswerQuestion extends QuestionBase {
  constructor(question, correctAnswers, afterCheckFunction) {
    const checkButton = document.createElement("button")
    const userAnswerInput = document.createElement("textarea")
    const userAnswer = userAnswerInput.innerText
    
    super(question, correctAnswers, true, userAnswer, checkButton)
    
    this.userAnswerInput = userAnswerInput
    
    this.checkButton.addEventListener("click", () => afterCheckFunction(this))
    
    document.body.appendElement(userAnswerInput)
    document.body.appendElement(checkButton)
  }
}
