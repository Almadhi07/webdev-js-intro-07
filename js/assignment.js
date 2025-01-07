"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];


function returnTheRemainder (num1, num2){
    return num1 % num2;
}

function checkIfEven(num){
    return num % 2 === 0;

}

function checkIfEven(num){
    return num % 2 === 0;
}

function getTheFourthElement(arr){
    return arr[3];
}

submissionBtn.addEventListener("click", function(){
    remainderElement.textContent = returnTheRemainder(5,4);

    checkIfEvenElement.textContent = checkIfEven(47);

    lostNumbersElement.textContent = getTheFourthElement(lostNumbers);

});