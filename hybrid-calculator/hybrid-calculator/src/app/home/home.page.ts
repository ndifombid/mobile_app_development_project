import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  displayValue: string = '';
  operator: string = '';
  firstOperand: number | null = null;
  waitingForSecondOperand: boolean = false;

  constructor() {}

  appendNumber(number: string) {
    if (this.waitingForSecondOperand) {
      this.displayValue = number;
      this.waitingForSecondOperand = false;
    } else {
      this.displayValue =
        this.displayValue === '' ? number : this.displayValue + number;
    }
  }

  appendOperator(operator: string) {
    if (this.firstOperand === null) {
      this.firstOperand = parseFloat(this.displayValue);
    } else if (this.operator) {
      const result = this.calculateResult(
        this.firstOperand,
        parseFloat(this.displayValue),
        this.operator
      );
      this.displayValue = String(result);
      this.firstOperand = result;
    }
    this.operator = operator;
    this.waitingForSecondOperand = true;
  }

  clear() {
    this.displayValue = '';
    this.operator = '';
    this.firstOperand = null;
    this.waitingForSecondOperand = false;
  }

  calculate() {
    if (this.firstOperand !== null && this.operator !== '') {
      const result = this.calculateResult(
        this.firstOperand,
        parseFloat(this.displayValue),
        this.operator
      );
      this.displayValue = String(result);
      this.firstOperand = null;
      this.operator = '';
      this.waitingForSecondOperand = false;
    }
  }

  calculateResult(
    firstOperand: number,
    secondOperand: number,
    operator: string
  ): number {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  }
}
