exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {
  fizzBuzz: function(num) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number
let text;
console.log(typeof(num))
    switch(num){
      case (num%3 == 0 && num%5 == 0) && num : 
            console.log('fizzbuzz')
            text = 'fizzbuzz'; 
            break;
            
      case num%3 == 0  && num :  
        console.log('fizz');
        text = 'fizz'; 
        break;
        
      case num%5 == 0 && num : 
        console.log('buzz');
        text =  'buzz'; 
        break;
        
      case typeof(num) == "number" && num: 
          console.log('num');
          text = num; 
          break;
      
      default : 
        console.log('false');
        text = false; 
        break;
      
    }
    return text;    
  }
};
