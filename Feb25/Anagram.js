function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
       return "Invalid Input because given strings have different lengths";
       
    }
    
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
        return "Given Strings are Anagrams";
    } else { 
       return "Given strings are not Anagrams";
    }
 }
 var a = prompt("Enter string1");
 var b = prompt("Enter string2");
 var out = checkStringsAnagram(a,b);

 document.write(out);