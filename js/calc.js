//add your code here


let operator = $("#operation")
let num1 = $("#number1")
let num2 = $("#number2")

function validate(operator, num1, num2) {
  
  if (operator == "+" || operator == "-" || operator == "*" || operator == "/") {
    if (isNaN(num1) || num1 === "" || isNaN(num2) || num2 === "") {

      $("#result").text("Sorry,one of those is not a valid number!")
    
      } else {
        answer(operator, num1, num2); 
      }
    }
    else {
      $("#result").html("Sorry that is not a valid operator");
    }
  } 
  
  
