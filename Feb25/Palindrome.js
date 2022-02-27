
function palindrome(string){
    var len = string.length;  
  
    
    for (let i = 0; i < len/2; i++) {  
  
        
        if (string[i] != string[len - 1 - i]) {  
            return false;
        }
    
      
}  
return true;
}


var input = prompt("Enter string or number");

var output = palindrome(input);

if(output){
    document.write("Given string is  a Palindrome");
}
else{
    document.write("Given string is not a Palindrome");
}

