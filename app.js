// alert("working");
var result=document.querySelector("#getAge");
var agee=document.querySelector("#agee");
var bmi=document.querySelector("#bmi");
var agepage=document.querySelector(".ageCal");
var bmispace=document.querySelector(".bmispace");
agee.addEventListener("click",()=>{
agepage.style.display="flex";
bmispace.style.display="none";

if(agepage.style.display="flex"){
        agee.style.border="white 2px solid";
        bmi.style.border="orangered 2px solid";
        
    }
})
if(agepage.style.display="flex"){
    agee.style.border="white 2px solid";
    
        
    }
bmi.addEventListener("click",()=>{
    agepage.style.display="none";
    bmispace.style.display="flex";
    if(  bmispace.style.display="flex"){
        bmi.style.border="white 2px solid";
        agee.style.border="orangered 2px solid";
    }
})



function ageCalculator() {
    
    var birth=document.querySelector("#birthYear").value;
    var current=document.querySelector("#currentYear").value;
    var answers=document.querySelector(".answers");
    var newAge=  parseInt(current-birth);
var newAgeInMonths=newAge*12;
var newAgeIndays=newAge*365;

    answers.textContent= "You are" +" "+ newAge +" " + "years"+ " "+newAgeInMonths+" "+"months"+" "+newAgeIndays+" "+"Days Old";
    answers.style.display="flex";
    //    var empty=" ";
    if (current < birth ) {
    answers.textContent="Age cannot be -ve";
        
    }
     else if ((!current ) || (!birth)) {
        console.log("Values cannot be Empty");
        answers.textContent="Values cannot be Empty";
        
    }
    else if ((!current == !birth)&&(birth==current) ){
        answers.textContent="Year must not be same";
        console.log("Year must not be same");
        
    }
    //         switch (current,birth) {
        //             case current < birth:
        //                     answers.textContent="Age cannot be -ve";
        //                 console.log("switch1");
        //         break;
        //         case (current = null)&&(birth = null ):
        //                 answers.textContent=" Values cannot be Empty";
        //             console.log("switch2");
        //             break;
        //         // case :
//         //     console.log("switch2");
//         //     break;

//     default:
//         break;
// }




    console.log(newAge);
}
function reset() {
    
    var birth=document.getElementById("birthYear");
    var answers=document.querySelector(".answers");
    var current=document.getElementById("currentYear");
    
    
    answers.style.display="none";
    if(
        birth.value !=" "){
        birth.value=" ";
        current.value=" ";
    }
    // console.log(birth);
    // console.log(current);
    console.log("clicking");
}
function reset2() {
    var weight=document.querySelector("#weight");
    var height=document.querySelector("#height");
    var answerBmi=document.querySelector(".answerBmi");
    

    answerBmi.style.display="none";
    if(
        weight.value !=" "){
        weight.value=" ";
        height.value=" ";
    }
    // console.log(birth);
    // console.log(current);
    console.log("clicking444");
}
function bmiCalculator() {
    var weight=document.querySelector("#weight").value;
    var height=document.querySelector("#height").value;
    var result= (weight / (height ** 2));
    result=result.toString().slice(0,6);
    var answerBmi=document.querySelector(".answerBmi");
    answerBmi.style.display="flex";
    answerBmi.innerHTML="Body Mass Index" +" "+ "is"+" "+result;
    if ((!weight)&&(!height)) {
        
        answerBmi.textContent="Values are Empty";
    }
    
    // result=Math.round(result);
}






// // var input = document.querySelector(".inputfield");
// var equals = document.querySelector(".equals")
// var del = document.querySelector(".del")
// var overlay = document.querySelector(".overlay")
// var advanced = document.querySelector(".advanced")
// var angle = document.querySelector(".angle")
// var sin = document.querySelector(".sin")
// var cos = document.querySelector(".cos")
// var tan = document.querySelector(".tan")
// var sqrt = document.querySelector(".sqrt")
// var square = document.querySelector(".square")
// var cube = document.querySelector(".cube")
// var cubert = document.querySelector(".cubert")
// var logger = document.querySelector(".log")
// var pie = document.querySelector(".pi")
// var body = document.querySelector("body")
// var round = document.querySelector(".round")
// var butts = new Array();
// butts = document.querySelectorAll("button");
// equals.addEventListener("click", function () {
//     input.value = eval(input.value)
// })
// // del.addEventListener("click", function () {
// //
// // })
// sin.addEventListener("click", function () {
//     input.value = Math.sin(parseFloat(input.value))
// })
// cos.addEventListener("click", function () {
//     input.value = Math.cos(input.value)
// })
// tan.addEventListener("click", function () {
//     input.value = Math.tan(input.value)
// })
// sqrt.addEventListener("click", function () {
//     input.value = Math.sqrt(input.value)
// })
// square.addEventListener("click", function () {
//     input.value = Math.pow(input.value, 2)
// })
// cube.addEventListener("click", function () {
//     input.value = Math.pow(input.value, 3)
// })
// cubert.addEventListener("click", function () {
//     input.value = Math.cbrt(input.value)
// })
// logger.addEventListener("click", function () {
//     input.value = Math.log10(input.value)
// })
// pie.addEventListener("click", function () {
//     input.value = Math.PI * input.value
// })
// round.addEventListener("click", function () {
//     input.value = Math.round(input.value)
// })
