const inputScreen=document.querySelector("#inputScreen");
const numbers=document.querySelectorAll(".numbers");
const operators=document.querySelectorAll(".operators");
const equalbtn=document.querySelector("#equalbtn");
const resetbtn=document.querySelector("#resetbtn");
const deletebtn=document.querySelector("#deletebtn");
const percentagebtn=document.querySelector("#percentagebtn");
const funcbtn=document.querySelectorAll(".funcButtons");
const allButtons=document.querySelectorAll("button");
const endbtn=document.querySelectorAll(".endbtn");
//styling
const header=document.querySelector("header");
const buttonContainer=document.querySelector(".buttonHolder");
const themeChanger=document.querySelector("#outerContainer");
const themeSwitchContainer=document.querySelector("#buttonContainer");
const themeSwitchText=document.querySelector("legendTextContainer");
const toggleSwitch=document.querySelector(".redButton");
const blueMode=document.querySelector("#bluemode");
const lightMode=document.querySelector("#lightmode");
const violetMode=document.querySelector("#violetmode");
const attribution = document.querySelector(".attribution");
const anchor =document.querySelectorAll(".attribution a");
let currentInput ='';
let firstNumber = null;
let operator = null;

inputScreen.value=0;
numbers.forEach(number=>{
    number.addEventListener('click',handleNumberButtonClick);
})
operators.forEach(operator=>{
    operator.addEventListener('click',handleOperatorButtonClick);
})
equalbtn.addEventListener('click',handleEqualButtonClick);
percentagebtn.addEventListener('click',handlePercentButtonClick);
resetbtn.addEventListener('click',reset);
deletebtn.addEventListener('click',deleting);
blueMode.addEventListener('click',go_to_1);
lightMode.addEventListener('click',go_to_2);
violetMode.addEventListener('click',go_to_3);


        function go_to_1() {
            document.body.style.backgroundColor="hsl(222, 26%, 31%)";
            toggleSwitch.style.backgroundColor="hsl(6, 63%, 50%)";
            inputScreen.style.backgroundColor="hsl(224, 36%, 15%)";
            inputScreen.style.color="hsl(30, 25%, 89%)";
            themeSwitchContainer.style.backgroundColor="hsl(223, 31%, 20%)";
            header.style.color="hsl(0, 0%, 100%)";
            buttonContainer.style.backgroundColor="hsl(223, 31%, 20%)";
            toggleSwitch.classList.add('horizTranslate1');
            toggleSwitch.classList.remove('horizTranslate2');
            toggleSwitch.classList.remove('horizTranslate3');
            attribution.style.color="hsl(224, 36%, 15%)";
            anchor.forEach(a=>{a.style.color="hsl(28, 16%, 65%)"});
            allButtons.forEach(button=>{
              button.classList.add('bluetheme-allbtn');
              button.classList.remove('lighttheme-allbtn');
              button.classList.remove('violettheme-allbtn');
            });
            funcbtn.forEach(button=>{
              button.classList.add('bluetheme-funcbtn');
              button.classList.remove('lighttheme-funcbtn');
              button.classList.remove('violettheme-funcbtn');
            });
            endbtn.forEach(button=>{
              button.classList.add('bluetheme-endbtn');
              button.classList.remove('lighttheme-endbtn');
              button.classList.remove('violettheme-endbtn');
            });
        }

        function go_to_2() {
            document.body.style.backgroundColor="hsl(0, 0%, 90%)";
            toggleSwitch.style.backgroundColor="hsl(25, 98%, 40%)";
            inputScreen.style.backgroundColor="hsl(0, 0%, 93%)";
            inputScreen.style.color="hsl(198, 20%, 13%)";
            themeSwitchContainer.style.backgroundColor="hsl(0, 5%, 81%)";
            header.style.color="hsl(198, 20%, 13%)";
            buttonContainer.style.backgroundColor="hsl(0, 5%, 81%)";
            toggleSwitch.classList.add('horizTranslate2');
            toggleSwitch.classList.remove('horizTranslate3');
            toggleSwitch.classList.remove('horizTranslate1');
            attribution.style.color="hsl(185, 42%, 37%)";
            anchor.forEach(a=>{a.style.color="hsl(25, 98%, 40%)"});
            allButtons.forEach(button=>{
              button.classList.add('lighttheme-allbtn');
              button.classList.remove('bluetheme-allbtn');
              button.classList.remove('violettheme-allbtn');
            });
            funcbtn.forEach(button=>{
              button.classList.add('lighttheme-funcbtn');
              button.classList.remove('bluetheme-funcbtn');
              button.classList.remove('violettheme-funcbtn');
            });
            endbtn.forEach(button=>{
              button.classList.add('lighttheme-endbtn');
              button.classList.remove('bluetheme-endbtn');
              button.classList.remove('violettheme-endbtn');
            });
        }

        function go_to_3() {
            document.body.style.backgroundColor="hsl(268, 75%, 9%)";
            toggleSwitch.style.backgroundColor="hsl(176, 100%, 44%)";
            inputScreen.style.backgroundColor="hsl(268, 71%, 12%)";
            themeSwitchContainer.style.backgroundColor="hsl(268, 71%, 12%)";
            inputScreen.style.color="hsl(52, 100%, 62%)";
            header.style.color="hsl(52, 100%, 62%)";
            buttonContainer.style.backgroundColor="hsl(268, 71%, 12%)";
            toggleSwitch.classList.add('horizTranslate3');
            toggleSwitch.classList.remove('horizTranslate2');
            toggleSwitch.classList.remove('horizTranslate1');
            attribution.style.color="hsl(52, 100%, 62%)";
            anchor.forEach(a=>{a.style.color="hsl(176, 100%, 44%)"});
            allButtons.forEach(button=>{
              button.classList.add('violettheme-allbtn');
              button.classList.remove('bluetheme-allbtn');
              button.classList.remove('lighttheme-allbtn');
            });
            funcbtn.forEach(button=>{
              button.classList.add('violettheme-funcbtn');
              button.classList.remove('bluetheme-funcbtn');
              button.classList.remove('lighttheme-funcbtn');
            });
            endbtn.forEach(button=>{
              button.classList.add('violettheme-endbtn');
              button.classList.remove('bluetheme-endbtn');
              button.classList.remove('lighttheme-endbtn');
            });
        }

function handleNumberButtonClick(e) {
    const buttonValue = e.target.value;
    currentInput += buttonValue;
    inputScreen.value = currentInput;
  }

  function handleOperatorButtonClick(e) {
    if (firstNumber === null) {
      const buttonValue = e.target.value;
      firstNumber = parseFloat(currentInput);
      operator = buttonValue;
      inputScreen.value += operator;
      currentInput = '';
    }else if(currentInput=='' && firstNumber!=null){
        operator=e.target.value;
        inputScreen.value=firstNumber+ operator;
    } 
    else{
        currentInput = parseFloat(currentInput);
        switch (operator) {
          case '+':
            firstNumber += currentInput;
            inputScreen.value = firstNumber;
            operator = e.target.value; 
            inputScreen.value +=operator;
            break;
          case '-':
                  firstNumber -= currentInput;
                  inputScreen.value = firstNumber;
                  operator = e.target.value; 
                  inputScreen.value +=operator;
            break;
          case '/':
                  if(currentInput!=0){
                  firstNumber /= currentInput;
                  inputScreen.value = firstNumber;
                  operator = e.target.value; 
                  inputScreen.value +=operator;
                }
                  else{
                    firstNumber=null;
                    currentInput='';
                    operator='';
                    inputScreen.value="not valid operation"+operator;
                  }
            break;
          case '*':
                  firstNumber *= currentInput;
                  inputScreen.value = firstNumber;
                  operator = e.target.value; 
                  inputScreen.value +=operator;
            break;
        }
        currentInput = '';
    }
  }
  function handleEqualButtonClick(e) {
   
    if (operator !== null) {
      currentInput = parseFloat(currentInput);
      equals(operator);
      currentInput = '';
    }
  }
function equals(operator){
    switch (operator) {
        case '+':
          firstNumber += currentInput;
          inputScreen.value = firstNumber;
          operator = e.target.value; 
          inputScreen.value +=operator;
          break;
        case '-':
                firstNumber -= currentInput;
                inputScreen.value = firstNumber;
                operator = e.target.value; 
                inputScreen.value +=operator;
          break;
        case '/':
                if(currentInput!=0){
                firstNumber /= currentInput;
                inputScreen.value = firstNumber;
                operator = e.target.value; 
                inputScreen.value +=operator;
              }
                else{
                  firstNumber=null;
                  currentInput='';
                  operator='';
                  inputScreen.value="not valid operation"+operator;
                }
          break;
        case '*':
                firstNumber *= currentInput;
                inputScreen.value = firstNumber;
                operator = e.target.value; 
                inputScreen.value +=operator;
          break;
      }
  
      
}
function handlePercentButtonClick(){
   firstNumber= parseFloat(inputScreen.value)/100;
  
   inputScreen.value=firstNumber;
}

function reset(){
    inputScreen.value=0;
    currentInput='';
    firstNumber=null;
    operator=null;
}
function deleting(){
   currentInput= currentInput.slice(0,-1)
   if(currentInput=='')
    inputScreen.value=0;
    else
    inputScreen.value=currentInput
   
}
