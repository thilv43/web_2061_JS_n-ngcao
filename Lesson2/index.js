// có 2 cách để tạo ra một function trong js 
// 1. Declaration
// 2. Expression
// Việc thực hiện một chuỗi công việc và đưa ra kết quả 
// string 
// number
document.getElementById("index");
function sum(a,b) {
    if(typeof(a) == "number" && typeof(b) == "number"){
        return a + b
    }
    return -1
}
console.log(sum(100, 50));

const sumFunction = function(a,b) {
    if(typeof(a) == "number" && typeof(b)){
        return a + b
    }
    return -1;
}
console.log(sum(200, 20))



function search(str, keyword){
    str = str.toLowerCase();
    keyword = keyword.toLowerCase();
    return str.indexOf(keyword)
}
console.log(search());