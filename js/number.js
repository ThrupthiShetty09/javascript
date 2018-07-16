function checkPrime(){
    num = getUserInput();
    flag = true;
    
    if(num < 2){
    flag = false;
}
    for(i = 2 ; i <= Math.sqrt(num) ; i++){
        if(num % i == 0){
        flag = false;
        break;
      }
    }
  if(flag){
     showResult("given number is :"+num+" prime number" );
  }else{
      showResult("given number is :"+num+"  not a prime number"); 
  }
    
}
function factorial(){
    num = getUserInput(); 
    var res = 1;
    for( var i = 2;i <= num; i++){
        res *= i;
    }
   showResult("Factorial of : "+num+" is:" +res);
}
function factors(){
  num=getUserInput();
    var output = " ";
    for(var i = 1;i <= num; i++){
        if(num % i == 0){
            output += i +" ";
        }
    }
  showResult("Factors of Number is : "+num+" is:" +output);  
}
function fibonacci(){
   num=getUserInput();
    var output = "";
     if(num  == 1){
            output += "0";
        }else if(num  == 2){
            output += "0 1";
        }else{
            var a=0,b=1;
             output += "0 1";
             for(var i = 3;i <= num; i++){
                 c = a + b;
                 output +=  " "+c;
                 a=b;
                 b=c;
             }
        }
    showResult("Fibonacci series of : "+num+" is:" +output);  
    
}
function reverse(){
   num = getUserInput();
    var rev = 0;
    var num2 = num;
    var r;
    while(num != 0){
     r = num % 10;
    rev = rev * 10 + r;
    num =Math.floor( num/10);    
    }
   showResult("Reverse of Number  "+num2+" is:" +rev);   
    }
function palindrome(){
   num = getUserInput();
 
    var rev = 0;
    var num2 = num;
    var r;
    while(num != 0){
     r = num % 10;
    rev = rev * 10 + r;
    num =Math.floor( num/10);      
    }
    if(num2 == rev){
   showResult(" Given Number is  "+num2+" is Palindrome");   
   }else{
     showResult(" Given Number is  "+num2+" is not a Palindrome");  
   }
    }
function sumdigits(){
   num = getUserInput();
    var sum = 0;
    var num2 = num;
    while(num != 0){
     sum += num % 10;
     num =Math.floor( num/10);    
    }
   showResult("sum of digits  "+num2+" is:" +sum);   
}
function sumtosingle(){
   num = getUserInput();
    var sum = num;
    var num2 = num;
    while(num > 9){
     sum =Math.floor(num / 10 + num % 10);
     num = sum;    
    }
   showResult("sum to single digits of "+num2+" is:" +sum);   
}


function getUserInput(){
    num=document.getElementById("num").value;
    return num;
}
function showResult(message){
    document.getElementById("result").innerHTML="<h4>"+message+"</h4>";
}
