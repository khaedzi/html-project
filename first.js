var fnum = prompt("give me first number please :");
var snum=prompt("give me secound number please :");
var dis =prompt("enter ono of these + - * / ");

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
else if (dis=="$"){
 var sss=function(){
       alert("ssss")     
}
alert(sss())
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

let getItem = function() {
    let userInput = prompt('please enter what you need to order?');
    let item = '';
  
    while(userInput !== 'house' && userInput !== 'hotel') {
      userInput = prompt('Please enter something like car or bus only');
    break;}
  
    if(userInput === 'car') {
      item = '<img src="https://lh3.googleusercontent.com/proxy/O-zCdzjY06zqGqa2JtzrP18pF3mjwa-g6ErOIdde6_qet5D1g-7Yc2a8CxaEt2_t-S6v-zI2dYGItHNs_sunrZ98DD5dzBfuVWo7m06nmlMD6QigotnRG2aNMyII" />';
    } else if (userInput === 'bus') {
        item = '<img src="https://www.irizar.com/sweden/wp-content/uploads/2020/02/Irizar-ie-bus_web.jpg"/>'
    }
  
    return item;
  }
  
  let howMany = function() {
    let count = prompt('How many do you want to order?');
  
    while(count === '' || isNaN(count)) {
      count = prompt('Please enter a number!!');
    }
  
    return count;
  }
  
  // function showOrder
  // declare the other fuunction
  // call functioon from the html
  
  let showOrder = function() {
    let item = getItem();
    let total = howMany();
    let result = '';
  
    for(let i = 0; i < total; i++) {
      result = result + '<p>Model #' + i + ' ' + item + '</p>';
    }
    // document.write(item);
    return result;
  }