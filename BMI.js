//call the elements by there id from html file
const heightInput = document.getElementById('heigth');
const weifhtInput = document.getElementById('weight');
const bmiresult = document.getElementById('bmiresult');
const weightCondition = document.getElementById('weight-condition');
const btn = document.getElementById('btn');

//function to cacluate BMI
function Cacluatebmi(){
    //get height and weight from input
 const height = parseFloat(heightInput.value)/100;//confirm height to meters 
 const weight = parseFloat(weifhtInput.value);

  //cacluate BMI
 const bmi = (weight / (height * height)).toFixed(2);
 //display and store bmi result
    bmiresult.value = bmi;

  //determine weight condition based on BMI
    let condition ='';
    if(bmi === ""){
       condition ="please enter your weight and height";
    }
    else if(bmi < 18.5){
      condition ="under weight";
    }
    else if(bmi >=18.5 && bmi <= 24.9){
        condition= 'normal weight';

    }
    else if(bmi >=25 && bmi <= 29.9){
        condition ='over weight';
    }
    else {
        condition = 'obesity';
    }
  
   //store the weightcondition to condition and display it
    weightCondition.textContent = condition;

}
//aadd an evenlistener  to the button 
//to trigger the BMI cacluation
btn.addEventListener('click',Cacluatebmi);



