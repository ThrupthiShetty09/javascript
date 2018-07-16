function calc(operation){
var num1=parseInt(document.getElementById("num1").value);
var num2=parseInt(document.getElementById("num2").value);  
var message=" ";
    switch(operation){
        case "add":
            message=num1+ " + " +num2+ " = " +(num1+num2);
            break;
        case "sub":
            message=num1+ " - " +num2+ " = " +(num1-num2);
            break;
        case "mul":
            message=num1+ " * " +num2+ " = " +(num1*num2);
            break;
        case "div":
            message=num1+ " / " +num2+ " = " +(num1/num2);
            break;
        case "mod":
            message=num1+ " % " +num2+ " = " +(num1%num2);
            break;
        default:"please enter the valid input";
    }
     document.getElementById("res").innerHTML=message; 
}