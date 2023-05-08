var a=new Array("1","3")
var b=new Array("4","5")
console.log("a values " +a);
a.pop();
console.log("a values after pop() \n" +a);
a.push("hello");
console.log("a values after push() \n" +a);
delete a[0];
console.log("a values after delete() \n" +a);
console.log("b values " +b);
var num=a.concat(b);
console.log("c values  "  +num);