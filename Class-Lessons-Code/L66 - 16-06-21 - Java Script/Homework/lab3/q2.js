function isStrInsideOther(str1,str2,idx,len){
    
    var strToShow = str1.slice(idx,idx+len);
    console.log(strToShow);
    return strToShow==str2;
}

console.log(isStrInsideOther('Moshe','Mos',0,3)); //true
console.log(isStrInsideOther('Moshe','Mos',1,3)); //false
console.log(isStrInsideOther('Neta','Net',0,3)); //true
