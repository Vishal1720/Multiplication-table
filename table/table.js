let num =document.getElementById("textbox");
console.log(num);
let inc1=document.getElementById("no1");
let inc2=document.getElementById("no2");
let inc3=document.getElementById("no3");
let inc4=document.getElementById("no4");
let inc5=document.getElementById("no5");
let inc6=document.getElementById("no6");
let inc7=document.getElementById("no7");
let inc8=document.getElementById("no8");
let inc9=document.getElementById("no9");
let inc10=document.getElementById("no10");
let answer=document.getElementsByClassName("ans");
console.log(num);
let numBox=document.getElementsByClassName("common");
console.log(numBox);
numBox.value="22";
let a=[inc1,inc2,inc3,inc4,inc5,inc6,inc7,inc8,inc9,inc10];


function submit() {
    
    if(isNaN(num.value))
    alert("Please enter a number");
    else
    {
    for (var i = 0; i < numBox.length; i++) 
    {
      numBox[i].value = num.value;
    }
    changeInc();
    equal();
  }}
  function changeInc()
  {
    for(i=0,count=1;i<a.length;i++)
    {
        a[i].value=count++;
        
    }
  }
  function equal()
  {
for(i=0;i<answer.length;i++)
{
    answer[i].value=num.value*a[i].value;
}
  }

  num.addEventListener('keyup',(e)=>{
    if(e.key === "Enter")
    {
      submit();
    }
  })