// script.js – Calculator logic and UI handling
// Implements a simple calculator with button and keyboard support.

// Calculator class definition
class Calculator {
  // Private fields (modern JavaScript syntax)
  #currentValue = '0';
  #previousValue = '';
  #operator = null; // '+', '-', '*', '/'
  #shouldResetScreen = false;

  constructor() {
    // Ensure display is initialized
    this.updateDisplay();
  }

  // Append a digit or decimal point to the current value
  addDigit(digit) {
    // If we need to reset the screen (after an operation), start fresh
    if (this.#shouldResetScreen) {
      this.#currentValue = '';
      this.#shouldResetScreen = false;
    }

    // Prevent multiple leading zeros (except when a decimal follows)
    if (digit === '0') {
      if (this.#currentValue === '0') return; // ignore additional leading zero
    }

    // Handle decimal point – only one allowed per number
    if (digit === '.') {
      if (this.#currentValue.includes('.')) return; // ignore extra decimal
      // If current value is empty, start with '0.'
      if (this.#currentValue === '' || this.#currentValue === '0') {
        this.#currentValue = '0.';
        return;
      }
    }

    // Normal digit handling – replace leading zero with the new digit
    if (this.#currentValue === '0' && digit !== '.') {
      this.#currentValue = digit;
    } else {
      this.#currentValue += digit;
    }
  }

  // Choose an operator (+, -, *, /)
  chooseOperator(op) {
    // If an operator is already set and we have a previous value, compute first
    if (this.#operator && this.#previousValue !== '' && !this.#shouldResetScreen) {
      this.compute();
    }
    this.#operator = op;
    this.#previousValue = this.#currentValue;
    this.#shouldResetScreen = true; // next digit starts a new number
  }

  // Perform the pending computation
  compute() {
    if (!this.#operator) return; // nothing to compute
    const prev = parseFloat(this.#previousValue);
    const curr = parseFloat(this.#currentValue);
    let result;

    switch (this.#operator) {
      case '+':
        result = prev + curr;
        break;
      case '-':
        result = prev - curr;
        break;
      case '*':
        result = prev * curr;
        break;
      case '/':
        if (curr === 0) {
          // Division by zero – display error and reset state
          this.#currentValue = 'Error';
          this.updateDisplay();
          this.clear();
          return;
        }
        result = prev / curr;
        break;
      default:
        return;
    }

    // Trim unnecessary trailing zeros (e.g., 2.0 -> 2)
    this.#currentValue = Number.isFinite(result) ? result.toString() : 'Error';
    this.#previousValue = '';
    this.#operator = null;
    this.#shouldResetScreen = true;
  }

  // Reset calculator to its initial state
  clear() {
    this.#currentValue = '0';
    this.#previousValue = '';
    this.#operator = null;
    this.#shouldResetScreen = false;
  }

  // Remove the last character from the current value
  backspace() {
    if (this.#shouldResetScreen) {
      // If we are supposed to reset, treat backspace as clearing the screen
      this.clear();
      return;
    }
    if (this.#currentValue.length > 1) {
      this.#currentValue = this.#currentValue.slice(0, -1);
    } else {
      this.#currentValue = '0';
    }
  }

  // Update the calculator display element
  updateDisplay() {
    const display = document.getElementById('display');
    if (display) {
      display.textContent = this.#currentValue;
    }
  }
}

// Expose Calculator for testing if needed
window.Calculator = Calculator;

// DOMContentLoaded – set up event listeners and instantiate the calculator
document.addEventListener('DOMContentLoaded', () => {
  const calculator = new Calculator();

  // Helper to invoke a method and then refresh display
  const invoke = (fn, ...args) => {
    fn.apply(calculator, args);
    calculator.updateDisplay();
  };

  // Button event binding
  const buttons = document.querySelectorAll('.buttons button');
  buttons.forEach(button => {
    const action = button.dataset.action;
    const value = button.dataset.value; // for digit, operator, decimal
    button.addEventListener('click', () => {
      switch (action) {
        case 'digit':
          invoke(calculator.addDigit, value);
          break;
        case 'decimal':
          invoke(calculator.addDigit, '.');
          break;
        case 'operator':
          invoke(calculator.chooseOperator, value);
          break;
        case 'equals':
          invoke(calculator.compute);
          break;
        case 'clear':
          invoke(calculator.clear);
          break;
        case 'backspace':
          invoke(calculator.backspace);
          break;
        default:
          // No action – ignore
          break;
      }
    });
  });

  // Keyboard support
  document.addEventListener('keydown', e => {
    const key = e.key;
    // Digits and decimal point
    if (/^[0-9]$/.test(key)) {
      e.preventDefault();
      invoke(calculator.addDigit, key);
    } else if (key === '.') {
      e.preventDefault();
      invoke(calculator.addDigit, '.');
    } else if (['+', '-', '*', '/'].includes(key)) {
      e.preventDefault();
      invoke(calculator.chooseOperator, key);
    } else if (key === 'Enter' || key === '=') {
      e.preventDefault();
      invoke(calculator.compute);
    } else if (key === 'Backspace') {
      e.preventDefault();
      invoke(calculator.backspace);
    } else if (key === 'Escape' || key.toLowerCase() === 'c') {
      e.preventDefault();
      invoke(calculator.clear);
    }
    // Other keys are ignored
  });
});
