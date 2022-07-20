function evaluate(expression: string): number {
    let expressionReplaced : string = expression.replaceAll("sin","Math.sin").replaceAll("cos","Math.cos")
    let answer : number = eval(expressionReplaced)
    return answer
  }