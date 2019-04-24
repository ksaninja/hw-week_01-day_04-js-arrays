//1------------------------------------------------------------------------------------------
 const summing = function(num)
{
 do {
    num+=num;
    num++;}
    while (num <= 5);
    ("Sum = " + num);
    console.log(summing);
}

//------
 var sum = 0;
var num = 0;
while (num <= 5) {  
  sum += num;        
    ++num;             
}
return("Summation = " + sum);

//------

 var d = 0
var sum =0
do {
    sum+=d;
++d;}
while (d <= 5);
console.log(sum);

//2--------------------------------------------------------------------------------------------
const evens = function(num)
{
 let summ = 0 ;
 for (let n= 0; n < num.length; n++)
 {
summ=summ+ n;
}
 
 return (summ);}

undefined
evens([2,4,6,8,9,2]);
15

//3-------------------------------------------------------------------------------------------
const evens = function(num)
{
 let summ = 0 ;
 for (let n= 1; n < num.length; n++)
 {
if (n %2 === 0)
{
summ=summ+ n;
}
 }
 return (summ/num.length);}

undefined
evens([5,6,7,9,2,6,8,5]);
1.5

//4------------------------------------------------------------------------------------------
const star=function (sqr)
{
    return sqr.split("").reverse().join("");
}

undefined

star("haha")
"ahah"
star("salha")
"ahlas"

//5------------------------------------------------------------------------------------------
const salha=function(f1)
{
let i=0;
for(i=0;i<=f1.length;++i)
{
   return (f1.join(” - “))
}

}

undefined
salha([‘hg’,‘ug’])
“hg - ug”
salha([‘hg’,‘ug’,‘kyjgfhdg’,‘jh’])
“hg - ug - kyjgfhdg - jh”



//6------------------------------------------------------------------------------------------

function count(num) {
    var s = "";
    for(var i = 1; i <= num; i++) {
      s += i;
  
      if (i < (num)) {
        s += ', ';
      }
    }
    return s;
  }
//-----
const sqns=function(cnt){
for (let cnt = 0; cnt>= arr1.length;--cnt)
do ()
{
    
}
return ;
}
 //-this will return the numbers backdown without repeating the last one
 //
 //

//7-8-----------------------------------------------------------------------------------------
//-نقوم بالتصفيه باستخدام الجملة الشرطية
//نستخدم الmethod .split, لاسترجاع القيم التي تحتوي الحرف المطلوب
  //
//
//
  //9----------------------------------------------------------------------------------------
  function long1(string) {
    let d1 = string.split(" ");
    let  lng = 0;
    let  word = null;
   for (let i = 0; i < d1.length; i++)
 {
        if (lng < d1[i].length) {
            lng = d1[i].length;
            word = d1[i];
        }
    }
    return word;
 }

undefined
long1("qwdf jgikgioboi ljohlogohohiohioih qrqr");
"ljohlogohohiohioih"
  //10----------------------------------------------------------------------------------------
  function maxi(fff) {

    fff.sort((x, y) => y - x);
    
    for (var s = 0; s < fff.length; s++)
     {
      if (fff[s] % 2 == 0)
        return fff[s];
      }
    }
undefined
maxi([2,3,55,6,8,9,18,21]);
18


  //----------------------------------------------------------------------------------------