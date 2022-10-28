"use strict";

const calcButton = document.getElementById("submit");
const calcResult = document.getElementById("result");

calcButton.addEventListener("click", (event) => {
  const firstNumber = document.getElementById("number1").value;
  const operator = document.getElementById("operator").value;
  const secondNumber = document.getElementById("number2").value;
  let resultCalculator;

  event.preventDefault();

  if ((firstNumber === "") || (String(firstNumber).trim() === "")) {
    console.log("Первое число не указано");
    return calcResult.innerText = "Первое число не указано";
  }

  if ((secondNumber === "") || (String(secondNumber).trim() === "")) {
    console.log("Второе число не указано");
    return calcResult.innerText = "Второе число не указано";
  }

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    console.log("Некорректный ввод чисел");
    return calcResult.innerText = "Некорректный ввод чисел";
  }

  switch (operator) {
    case "": {
      console.log("Не введён знак");
      return calcResult.innerText = "Не введён знак";
    }
    case "+": {
      resultCalculator = Number(firstNumber) + Number(secondNumber);
      break;
    }
    case "-": {
      resultCalculator = Number(firstNumber) - Number(secondNumber);
      break;
    }
    case "/": {
      resultCalculator = Number(firstNumber) / Number(secondNumber);
      break;
    }
    case "*": {
      resultCalculator = Number(firstNumber) * Number(secondNumber);
      break;
    }
    default: {
      console.log("Программа не поддерживает такую операцию");
      return calcResult.innerText = "Программа не поддерживает такую операцию";
    }
  }

  if (isNaN(resultCalculator)) {
    console.log("Операция некорректна");
    return calcResult.innerText = "Операция некорректна";
  }

  if (resultCalculator === Infinity) {
    console.log("Операция некорректна");
    return calcResult.innerText = "Операция некорректна";
  } else {
    console.log(resultCalculator);
    return calcResult.innerText = `${resultCalculator}`;
  }
});
