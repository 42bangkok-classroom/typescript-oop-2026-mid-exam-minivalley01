// Write your code below
const a = Number(process.argv.slice(2));
if(isNaN(a)|| a < 0 || a > 100 ){
    console.log("Invalid input");
}else if(a >= 80){
    console.log("Grade is A");
}else if( a >= 70 && a < 80){
    console.log("Grade is B");
}else if( a >= 60 && a < 70){
    console.log("Grade is C");
}else if( a >= 50 && a < 60){
    console.log("Grade is D");
}else{
    console.log("Grade is F");
}