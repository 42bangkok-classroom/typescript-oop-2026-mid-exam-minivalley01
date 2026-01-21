// Write your code below
const a = Number(process.argv.slice(2));
if(isNaN(a)|| a < 0 || a > 100 ){
    console.log("Invalid input");
}else if(a >= 80){
    console.log("A");
}else if( a >= 70 && a < 80){
    console.log("B");
}else if( a >= 60 && a < 70){
    console.log("C");
}else if( a >= 50 && a < 60){
    console.log("D");
}else{
    console.log("F");
}