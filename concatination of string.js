//concatination of all strings::
let str = ["hi" ,"helo" ,"pranshu","shukla!"];
function concat(str){
    let result = "";
    for(let i=0;i<str.length; i++){
        result += str[i];
    }
    return result;
}
