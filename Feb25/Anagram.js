function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
       document.write('Invalid Input');
       
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
        document.write("Given Strings are Anagrams");
    } else { 
       document.write("Given strings are not Anagrams");
    }
 }
 var a = prompt("Enter string1");
 var b = prompt("Enter string2");
 checkStringsAnagram(a,b);