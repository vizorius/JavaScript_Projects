// Creates an object to keep track of values.
const Calculator = {
  // This will display 0 on the calculator screen.
  Display_Value: '0',
  // This will hold the first operand for any expressions; we set it to null for now.
  First_Operand: null,
  // This checks whether or not the second operand has been inputted by the user.
  Wait_Second_Operand: false,
  // This will hold the operator; we set it to null for now.
  operator: null,
};

// This modifies values each time a button is clicked.
function Input_Digit(digit) {
  const { Display_Value, Wait_Second_Operand } = Calculator;

  // If waiting for the second operand, reset the display value.
  if (Wait_Second_Operand === true) {
    Calculator.Display_Value = digit;
    Calculator.Wait_Second_Operand = false;
  } else {
    // If the current display value is 0, overwrite it; otherwise, append the digit.
    Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
  }
}

// This section handles decimal points.
function Input_Decimal(dot) {
  // Prevent adding a decimal when waiting for the second operand.
  if (Calculator.Wait_Second_Operand === true) return;

  // If the display value doesn’t already include a decimal point, add one.
  if (!Calculator.Display_Value.includes(dot)) {
    Calculator.Display_Value += dot;
  }
}
// This section handles operators.
function Handle_Operator(Next_Operator) {
  const { First_Operand, Display_Value, operator } = Calculator;
  // Convert the current display value to a number.
  const Value_of_Input = parseFloat(Display_Value);
    // Check if an operator already exists and if waiting for the second operand.
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
  // If the first operand is null and the input is a number, set it as the first operand.
  if (First_Operand == null && !isNaN(Value_of_Input)) {
    Calculator.First_Operand = Value_of_Input;
    } else if (operator) { // Check if an operator already exists.
        const Value_Now = First_Operand || 0;
        // Perform the calculation and update the display value.
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        // Fix floating point precision issues.
        result = Number(result).toFixed(9);
        // Remove trailing zeros.
        result = (result * 1).toString();
        Calculator.Display_Value = result;
        Calculator.First_Operand = result;
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

// This object contains the calculations for each operator.
const Perform_Calculation = {
  '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
  '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
  '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
  '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
  '=': (First_Operand, Second_Operand) => Second_Operand,
};
// This function resets the calculator to its initial state.
function Calculator_Reset() {
  Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
// This function updates the calculator screen with the current display value.
function Update_Display() {
  const display = document.querySelector('.calculator-screen');
  display.value = Calculator.Display_Value;
}
// This section monitors button clicks.
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // Get the target element that was clicked.
    const { target } = event;
    // If the clicked element is not a button, exit the function.
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
});
// This function initializes the display when the page loads.
Update_Display();
