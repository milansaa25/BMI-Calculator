document.getElementById("get-bmi").addEventListener("click", function(){
    var weight = document.getElementById("weight").value;
      var height = document.getElementById("height").value;
    
    var bmi = weight / (height * height);
    
    var weight_value = "";
    
    if (bmi < 18.5){
      weight_value = "underweight";
    }
    else if(bmi > 18.5 && bmi<=25){
      weight_value = "normal weight";
    }
      else if(bmi > 25 && bmi<=30){
      weight_value = "overweight";
    }
      else if(bmi > 30){
      weight_value = "obese";
    }
      
    alert("You BMI is " + bmi + ". You are " + weight_value);
    
  });