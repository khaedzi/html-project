var fnum = prompt("give me first number please :");
var snum=prompt("give me secound number please :");
var dis =prompt("enter ono of these + - * / ");

colaction();
function colaction(){
if(dis=="+"){

    sum();
}
else if(dis=="-"){

    min();
}
else if(dis=="*")
{
mult();

}
else if (dis=="/")
{
divi();

}
function sum(){

sum1=parseInt(fnum)+parseInt(snum);
alert(sum1);

}

function min(){

    min1=parseInt(fnum)-parseInt(snum);
    alert(min1);
    
    }

    function mult(){

        mul1=parseInt(fnum)*parseInt(snum);
        alert(mul1);
        
        }
        function divi(){

            divi1=parseInt(fnum)/parseInt(snum);
            alert(divi1);
            
            }}